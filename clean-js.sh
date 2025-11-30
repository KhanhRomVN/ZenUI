#!/bin/bash

# Script xóa toàn bộ file .js trong folder src

echo "🔍 Đang tìm kiếm file .js trong folder src..."

# Đếm số lượng file .js
count=$(find src -type f -name "*.js" | wc -l)

if [ $count -eq 0 ]; then
  echo "✅ Không tìm thấy file .js nào trong folder src"
  exit 0
fi

echo "📋 Tìm thấy $count file .js"
echo ""
echo "Danh sách file sẽ bị xóa:"
find src -type f -name "*.js" -print

echo ""
read -p "⚠️  Bạn có chắc chắn muốn xóa tất cả file .js? (y/N): " confirm

if [ "$confirm" = "y" ] || [ "$confirm" = "Y" ]; then
  echo "🗑️  Đang xóa file .js..."
  find src -type f -name "*.js" -delete
  echo "✅ Đã xóa $count file .js thành công!"
else
  echo "❌ Đã hủy thao tác xóa"
fi