# AGENT.md — Enda Eyesus Fellowship Platform

> **Project**: Enda Eyesus — Ethiopian Orthodox Student Fellowship at Mekelle University
> **Last Updated**: 2026-02-21

---

## 🎯 Project Overview

This is the **official frontend** for the *Enda Eyesus* university church fellowship platform. It serves Ethiopian Orthodox Tewahedo Christian students at Mekelle University. The platform supports member registration, login, announcements, service scheduling, and community self-management.

**Design Theme**: Modern Orthodox Minimalism — minimal, sacred, respectful, spiritual yet professional.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | ShadCN UI |
| Form Handling | React Hook Form + Zod |
| State Management | Zustand |
| HTTP Client | Axios |
| Icons | Lucide React |
| Package Manager | npm |

---

## 🎨 Design System

### Color Palette

| Name | Hex |
|---|---|
| Deep Royal Gold | `#C9A227` |
| Deep Church Red | `#7A1C1C` |
| Dark Emerald Green | `#0F3D2E` |
| Warm Ivory (Background) | `#F8F5F0` |
| Off White (Cards) | `#FFFFFF` |

### Typography
- **Font**: Inter (Google Fonts) — clean modern academic feel
- **Headings**: Semi-bold, spaced letter-spacing for sacred feel
- **Body**: Regular weight, 16px base

### Design Rules
- ✅ Soft rounded cards (`rounded-xl`, `rounded-2xl`)
- ✅ Gold accent borders on key elements (`border-l-4 border-gold`)
- ✅ Subtle Ethiopian Orthodox cross SVG watermark on auth backgrounds
- ✅ Clean inputs with light borders
- ❌ No glassmorphism
- ❌ No neon or vibrant gradients
- ❌ No tech startup aesthetics

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx         # Login page
│   │   └── register/
│   │       └── page.tsx         # 2-step registration wizard
│   ├── dashboard/
│   │   ├── layout.tsx           # Sidebar + Navbar shell
│   │   ├── page.tsx             # Main feed / Home
│   │   ├── my-class/page.tsx    # My Service Class page
│   │   ├── announcements/page.tsx
│   │   └── profile/page.tsx
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles + CSS vars
├── components/
│   ├── ui/                      # ShadCN auto-generated components
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterStep1.tsx
│   │   └── RegisterStep2.tsx
│   ├── dashboard/
│   │   ├── Sidebar.tsx
│   │   ├── Topbar.tsx
│   │   └── AnnouncementCard.tsx
│   └── shared/
│       ├── CrossWatermark.tsx   # SVG Orthodox Cross background
│       └── PageWrapper.tsx
├── lib/
│   ├── utils.ts                 # ShadCN cn() utility
│   ├── axios.ts                 # Configured Axios instance
│   └── validators/
│       ├── loginSchema.ts
│       └── registerSchema.ts
├── store/
│   └── authStore.ts             # Zustand auth state
└── types/
    └── user.types.ts            # Shared types
```

---

## 🌐 Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/login` | `LoginForm` | Username + Password login |
| `/register` | `RegisterWizard` | 2-step registration |
| `/dashboard` | `DashboardLayout` | User home feed |
| `/dashboard/my-class` | `MyClassPage` | Service class info |
| `/dashboard/announcements` | `AnnouncementsPage` | Church announcements |
| `/dashboard/profile` | `ProfilePage` | User profile |

---

## 🧩 Key Components

### Authentication

#### `(auth)/login/page.tsx`
- Centered card on ivory background with subtle cross SVG watermark
- Fields: `username`, `password`
- Buttons: Login (dark green, gold on hover)
- Links: Register, Forgot Password, Home
- Uses Zod + React Hook Form

#### `(auth)/register/page.tsx`
- 2-step wizard controlled via React `useState`
- Gold top border on card (`border-t-4 border-[#C9A227]`)
- Church red progress bar between steps
- **Step 1**: Full Name, Username, Sex, Department, Service Class, Email, Phone, Academic Year, Password, Confirm Password
- **Step 2**: Profile Image Upload, Bio (max 200 chars), Birth Date, Birth Place

### Dashboard

#### `dashboard/layout.tsx`
- Left vertical sidebar — `bg-[#0F3D2E]` (Dark Emerald Green)
- Sidebar links: Home, My Class, Announcements, Profile
- Active link highlighted with gold (`text-[#C9A227]`)
- Top navbar with user avatar and notifications

---

## 🧠 State Management (Zustand)

**Store**: `src/store/authStore.ts`

```ts
interface AuthState {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}
```

---

## 🔌 API (Axios)

**Base Instance**: `src/lib/axios.ts`

```ts
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
});
```

All API calls go through this instance. Auth token is attached via request interceptor.

---

## ✅ Validation Schemas (Zod)

### `loginSchema.ts`
```zod
{ username: string (min 3), password: string (min 6) }
```

### `registerSchema.ts`
**Step 1 fields:** fullName, username, sex, department, serviceClass, email, phone, academicYear, password, confirmPassword
**Step 2 fields:** profileImage, bio (max 200), birthDate, birthPlace

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 🤖 Agent Instructions

When working on this project as an AI agent, please follow these rules:

1. **Design Fidelity**: Always respect the Modern Orthodox Minimalism theme. No gradients, no glassmorphism, no neon.
2. **Color Usage**: Only use the 4 defined palette colors. Do not introduce new ones without explicit approval.
3. **ShadCN Components**: Always use ShadCN UI components (`Button`, `Input`, `Select`, `Card`, `Form`, `Badge`, `Avatar`) as the base for UI. Extend with Tailwind.
4. **Cross Watermark**: Auth pages MUST include the subtle SVG Orthodox cross watermark in the background.
5. **Form Validation**: Every form MUST use Zod schema + React Hook Form. Never use uncontrolled inputs.
6. **TypeScript**: All components must be fully typed. No `any` usage unless absolutely necessary.
7. **Server vs Client Components**: Use `"use client"` only for interactive/stateful components. Keep pages server components where possible.
8. **File Naming**: Components use PascalCase. Pages use `page.tsx`. Utilities use camelCase.
9. **Sidebar Active State**: Active sidebar link must use `text-[#C9A227]` and `bg-white/10`.
10. **Error Handling**: All API errors must be caught and displayed to the user via form error messages or toast notifications.
11. **Accessibility**: Use semantic HTML (`nav`, `main`, `aside`, `header`). All interactive elements need `aria-label` attributes.
12. **Performance**: Prefer `next/image` for all images. Use dynamic imports for heavy components.

---

## 📝 Contributing Notes

- This project is for a university Christian fellowship, so keep all UI text respectful and spiritually appropriate.
- The interface language is **English** (eventual Amharic/Tigrinya i18n support may be added later).
- When adding new pages, always add them to the route table in this AGENT.md.
- Before any PR, run `npm run build` to ensure zero TypeScript and build errors.
