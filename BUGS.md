# 🐛 Bug Tracking - ZChat

Danh sách các lỗi cần xử lý và tiến độ sửa lỗi.

---

## 🟡 Lỗi nhỏ / Giao diện (Low Priority)

- [ ] **Chưa load chat nhanh**: Tin nhắn, các đoạn chat bị load chậm. Vô web 4 giây mới load các chat.

---

## ✅ Đã sửa (Resolved)

- [x] ~~**Lỗi Deploy Vercel**~~: Thiếu biến môi trường `ENV` khi build project -> *Fixed ngày 06/08*.
- [x] **Lỗi không upload được ảnh đại diện**: Không upload được ảnh đại diện và báo lỗi "[ZChat] Avatar upload error: StorageApiError: new row violates row-level security policy at supabase-js@2:13:10331".
