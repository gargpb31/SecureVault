# SecureVault 🔐

A modern, secure password manager built with Next.js, featuring military-grade encryption and an intuitive user interface.

**Live Demo:** https://secure-vault-one.vercel.app/

## ✨ Features

- **🔐 Military-Grade Security** - AES-256 encryption with zero-knowledge architecture
- **📱 Cross-Platform** - Access from any device, anywhere in the world
- **⚡ Lightning Fast** - Sub-200ms response times for instant access
- **🎯 Smart Organization** - Categorize passwords, credit cards, and Wi-Fi networks
- **📋 One-Click Copy** - Quick access without revealing sensitive data
- **🎲 Password Generator** - Generate strong, unpredictable passwords
- **👁️ Secure Visibility** - Toggle password visibility with confidence
- **🔄 Real-time Sync** - Cloud synchronization across all devices

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS 4, Lucide React Icons
- **Authentication:** Clerk
- **Database:** MongoDB with Mongoose
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- MongoDB database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/SecureVault.git
   cd SecureVault
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
SecureVault/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Main dashboard page
│   ├── about/            # About page
│   ├── services/         # Services page
│   └── sign-in/         # Authentication pages
├── components/           # Reusable components
│   ├── ui/              # UI components (buttons, dropdowns)
│   ├── Navbar.tsx       # Navigation component
│   └── PasswordModal.tsx # Password management modal
├── lib/                 # Utility functions
├── models/              # MongoDB schemas
├── pages/api/           # API routes
└── public/              # Static assets
```

## 🔧 API Endpoints

- `POST /api/passwords/add` - Add new password
- `GET /api/passwords/get` - Get all passwords for user
- `PUT /api/passwords/update/[id]` - Update password
- `DELETE /api/passwords/delete/[id]` - Delete password

## 🎨 Design System

The application uses a modern design system with:
- **Color Palette:** Purple and pink gradients with dark theme
- **Typography:** Clean, readable fonts with proper hierarchy
- **Components:** Glass morphism effects and smooth animations
- **Responsive:** Mobile-first design approach

## 🔒 Security Features

- **End-to-End Encryption:** All data encrypted with AES-256
- **Zero-Knowledge Architecture:** Server cannot access user data
- **Secure Authentication:** Clerk handles user authentication
- **Input Validation:** Comprehensive form validation
- **XSS Protection:** Built-in Next.js security features

## 🚀 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

### Environment Variables for Production

Make sure to set these environment variables in your Vercel dashboard:
- `MONGODB_URI`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sunny Garg**
- Email: sunnygarg887@gmail.com
- GitHub: [@gargpb31](https://github.com/gargpb31)
- LinkedIn: [Sunny Garg](https://linkedin.com/in/gargpb31)
- Portfolio: [Portfolio](https://portfolio-sunny-gargs-projects.vercel.app/)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Clerk](https://clerk.com/) for authentication
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [Vercel](https://vercel.com/) for deployment

---

⭐ **Star this repository if you found it helpful!**
