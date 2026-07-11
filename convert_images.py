import os
try:
    from PIL import Image
except ImportError:
    print("Vui lòng cài đặt thư viện Pillow bằng lệnh: pip install Pillow")
    exit(1)

image_dir = "/home/dangbao/Desktop/WorkSpace/Sushi-HN/Nhan-sushi-website-/public/images"
# Kích thước tối đa cho ảnh menu (giúp giảm dung lượng mạnh hơn nữa mà vẫn siêu nét trên điện thoại/máy tính)
max_size = (1920, 1920)

print(f"Đang quét thư mục: {image_dir}")
converted_count = 0

for filename in os.listdir(image_dir):
    if filename.startswith("Menu Nhan") and filename.lower().endswith(".png"):
        filepath = os.path.join(image_dir, filename)
        
        try:
            print(f"Đang xử lý: {filename}...")
            img = Image.open(filepath)
            
            # Chuyển đổi định dạng nếu cần (hỗ trợ lưu ảnh trong suốt hoặc màu sắc chuẩn WebP)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # Thu nhỏ ảnh nếu kích thước quá lớn (VD: 4000x3000 -> 1920x1440)
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Tạo tên file mới với đuôi .webp và thay khoảng trắng bằng dấu gạch dưới
            new_filename = os.path.splitext(filename)[0].replace(" ", "_") + ".webp"
            new_filepath = os.path.join(image_dir, new_filename)
            
            # Lưu ảnh WebP với chất lượng 80% (tối ưu nhất cho dung lượng và độ nét)
            img.save(new_filepath, "WEBP", quality=80, method=6)
            
            # Xóa ảnh gốc để giải phóng dung lượng
            os.remove(filepath)
            print(f"  -> Xong: {new_filename}")
            converted_count += 1
            
        except Exception as e:
            print(f"  -> Lỗi khi xử lý {filename}: {e}")

print(f"\nHoàn tất! Đã chuyển đổi thành công {converted_count} ảnh sang định dạng WebP siêu nhẹ.")
