# 📁 FileUploader Component

The `FileUploader` is a reusable React component built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It allows users to **upload files** by either clicking a button or using drag-and-drop. The component handles **file validation**, **upload progress**, and **removal**, and integrates with your backend to store the uploaded files.

---

## 🚀 Features

- 📤 Drag-and-drop file upload
- ✅ File size validation (max 50MB)
- 🖼️ Thumbnail preview for supported file types
- 🔁 Shows upload status with a loader GIF
- ❌ Option to remove a file before upload
- 🔔 Toast notifications for errors (e.g., file too large)
- 📦 Backend integration for actual file upload

---

## 🧱 Technologies Used

- **React & Next.js**
- **TypeScript**
- **Tailwind CSS**
- **React Dropzone** for drag-and-drop functionality
- **Appwrite** or similar backend for file storage
- **Custom toast hook** (`useToast`) for notifications

---

## 📂 File Structure

```txt
/components
│
├── FileUploader.tsx         # Main file upload component
├── Thumbnail.tsx            # Shows preview based on file type
├── ui/button.tsx            # Custom button UI
├── ui/toaster.tsx           # Toast wrapper
│
/lib
├── utils.ts                 # Utility functions (e.g., file type detection)
├── actions/file.actions.ts  # Upload function
│
/constants
└── index.ts                 # Includes MAX_FILE_SIZE constant


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
