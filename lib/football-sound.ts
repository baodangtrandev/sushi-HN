/**
 * Football stadium atmosphere generator — Web Audio API.
 * 100% royalty-free (all audio synthesized programmatically).
 *
 * Strategy: "passive unlock" pattern
 *   1. Call primeAudioContext() on first page interaction (scroll / mousemove / click).
 *   2. Call startFootballSound() when the popup shows — context is already running.
 */

// ── Singleton shared context (pre-unlocked on first user interaction) ─────────
let _primed: AudioContext | null = null;

// Active playback handles
let _ctx: AudioContext | null = null;
let _master: GainNode | null = null;
let _noise: AudioBufferSourceNode | null = null;
let _lfo: OscillatorNode | null = null;

/**
 * Call this as early as possible on first user interaction (scroll / click / etc).
 * Creates and resumes an AudioContext so it is ready to play later.
 */
export async function primeAudioContext(): Promise<void> {
  if (_primed && _primed.state === "running") return;
  try {
    const AC =
      window.AudioContext ||
      (window as Window & { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return;
    if (!_primed) _primed = new AC();
    if (_primed.state === "suspended") await _primed.resume();
  } catch {
    /* noop */
  }
}

/**
 * Start football stadium sound.
 * Works without user gesture if primeAudioContext() was called earlier.
 */
export async function startFootballSound(): Promise<boolean> {
  try {
    const AC =
      window.AudioContext ||
      (window as Window & { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return false;

    stopFootballSound(0);

    // Reuse the pre-unlocked context if available, otherwise create fresh
    if (_primed && _primed.state === "running") {
      _ctx = _primed;
      _primed = null;
    } else {
      _ctx = new AC();
      if (_ctx.state === "suspended") await _ctx.resume();
      if (_ctx.state !== "running") return false;
    }

    _master = _ctx.createGain();
    _master.gain.value = 0;
    _master.connect(_ctx.destination);

    const sr = _ctx.sampleRate;

    // ── Pink noise buffer (crowd roar) ───────────────────────────────────
    const buf = _ctx.createBuffer(1, sr * 4, sr);
    const d = buf.getChannelData(0);
    let b0 = 0,
      b1 = 0,
      b2 = 0,
      b3 = 0,
      b4 = 0,
      b5 = 0,
      b6 = 0;
    for (let i = 0; i < d.length; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + w * 0.0555179;
      b1 = 0.99332 * b1 + w * 0.0750759;
      b2 = 0.969 * b2 + w * 0.153852;
      b3 = 0.8665 * b3 + w * 0.3104856;
      b4 = 0.55 * b4 + w * 0.5329522;
      b5 = -0.7616 * b5 - w * 0.016898;
      d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11;
      b6 = w * 0.115926;
    }

    _noise = _ctx.createBufferSource();
    _noise.buffer = buf;
    _noise.loop = true;

    // Bandpass at 750 Hz → vocal chant range
    const bp = _ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 750;
    bp.Q.value = 0.55;

    _noise.connect(bp);
    bp.connect(_master);
    _noise.start();

    // ── Chanting LFO (1.4 Hz) ────────────────────────────────────────────
    _lfo = _ctx.createOscillator();
    _lfo.type = "sine";
    _lfo.frequency.value = 1.4;
    const lfoGain = _ctx.createGain();
    lfoGain.gain.value = 0.04;
    _lfo.connect(lfoGain);
    lfoGain.connect(_master.gain);
    _lfo.start();

    // ── Fade master in (volume 0 → 0.25) ─────────────────────────────────
    const now = _ctx.currentTime;
    _master.gain.setValueAtTime(0, now);
    _master.gain.linearRampToValueAtTime(0.25, now + 2.0);

    // ── Referee whistle ───────────────────────────────────────────────────
    _playWhistle(_ctx, now + 0.3);

    return true;
  } catch {
    return false;
  }
}

/** Stop and clean up all audio. */
export function stopFootballSound(fadeMs = 500): void {
  try {
    if (_master && _ctx) {
      const now = _ctx.currentTime;
      _master.gain.cancelScheduledValues(now);
      _master.gain.setValueAtTime(_master.gain.value, now);
      _master.gain.linearRampToValueAtTime(0, now + fadeMs / 1000);
    }
  } catch {
    /* noop */
  }

  const refs = { noise: _noise, lfo: _lfo, ctx: _ctx };
  _noise = null;
  _lfo = null;
  _ctx = null;
  _master = null;

  setTimeout(() => {
    try {
      refs.noise?.stop();
    } catch {
      /* noop */
    }
    try {
      refs.lfo?.stop();
    } catch {
      /* noop */
    }
    try {
      refs.ctx?.close();
    } catch {
      /* noop */
    }
  }, fadeMs + 150);
}

// ── Internal ──────────────────────────────────────────────────────────────────

function _playWhistle(ctx: AudioContext, startTime: number) {
  for (const tw of [
    { t: 0, f0: 2100, f1: 2450, dur: 0.32 },
    { t: 0.48, f0: 2050, f1: 2500, dur: 0.42 },
  ]) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = startTime + tw.t;

    osc.type = "sine";
    osc.frequency.setValueAtTime(tw.f0, t);
    osc.frequency.linearRampToValueAtTime(tw.f1, t + tw.dur);

    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.1, t + 0.04);
    gain.gain.setValueAtTime(0.1, t + tw.dur - 0.04);
    gain.gain.linearRampToValueAtTime(0, t + tw.dur);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + tw.dur + 0.05);
  }
}
