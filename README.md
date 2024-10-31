# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Các bước để bắt đầu khởi tạo và chạy

npm i (chạy lần đầu khi mới clone dự án về)
npm run dev (sau khi chạy xong, terminal trả về vd: localhost:3000, => để mở: ctrl+ click vào link)

# Tạo page mới

Tạo page mới trong thư mục pages:
nếu page đó có conpenent, css riêng => tạo thư mục trong pages => để các trang, css, component vào thư mục ấy (Xem ví dụ trong HomePage)

Khi muốn gọi api từ BackEnd của java về để lấy dữ liệu, cần tạo một file service.js trong thư mục services

# Sử dụng AntDesign và tailwind để tạo page.

- Tailwind nói giống Bootstrap vậy; cũng có các class; khi use chỉ cần lên web của tailwind => tìm class có css cần thiết => rồi sử dụng(ko cần import gì cả, vì dự án đã có sẵn)

- AntDesign: Cung cấp các mẫu giao diện UI đa dạng (component)
  Các thành phần như Button, Input, Card, Table có thể được import và sử dụng trực tiếp.
  ví dụ:
  import { Button } from 'antd';
  const App = () => (
  <Button type="primary">Click me</Button>
  );
