import os
import re

directory = "/home/dangbao/Desktop/WorkSpace/Sushi-HN/Nhan-sushi-website-"

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replacer(match):
        num_str = match.group(1) # e.g. '0001'
        last_two = num_str[2:] # '01'
        return f'/images/Menu_Nhan_2025-{last_two}.webp'
        
    new_content, count = re.subn(r'https://hebbkx1anhila5yf\.public\.blob\.vercel-storage\.com/(\d{4})-[^"]+\.(?:jpg|png|webp)', replacer, content)
    
    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Replaced {count} instances in {filepath}")

for root, _, files in os.walk(directory):
    if "node_modules" in root or ".next" in root or ".git" in root:
        continue
    for file in files:
        if file.endswith(".tsx"):
            replace_in_file(os.path.join(root, file))

print("Done replacing all cloud URLs!")
