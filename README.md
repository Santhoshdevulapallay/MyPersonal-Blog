# 📝 My React Blog

Welcome to my blog project! 🚀  
This is a modern, responsive web application built with **React** and powered by **React Router, React Query, and shadcn/ui** components.  
It includes features like dynamic blog posts, global notifications, and a clean layout with tooltips and icons.

---

## ✨ Features
- ⚡ **React Router** for seamless navigation
- 📡 **React Query** for efficient API data fetching & caching
- 🔔 **Toast Notifications** using Toaster & Sonner
- 💬 **Tooltip support** with `TooltipProvider`
- 🖼️ **Lucide React Icons** for a modern UI
- 📱 **Responsive Layout** with reusable components
- 📰 Blog system with dynamic routes (`/blog/:slug`)

---

## 📸 Preview

Home:
![Blog Screenshot](https://raw.githubusercontent.com/Santhoshdevulapallay/MyPersonal-Blog/main/img1.png)

---

## 📂 Project Structure
```bash
src/
 ├── components/
 │   ├── Layout.jsx        # App layout (header, footer, etc.)
 │   └── ui/               # shadcn/ui components (toaster, tooltip, etc.)
 ├── pages/
 │   ├── Home.jsx
 │   ├── About.jsx
 │   ├── Blog.jsx
 │   ├── BlogPost.jsx
 │   ├── Contact.jsx
 │   └── NotFound.jsx
 ├── App.jsx               # Main app with routes & providers
 └── main.jsx              # Entry point


