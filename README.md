# Format-Topia

A powerful web-based text formatting tool designed to make text transformation quick and easy.

## 📝 Bio

Format-Topia is a modern web application that provides a comprehensive suite of text formatting and transformation tools. Built with a clean, intuitive interface, it allows users to quickly convert text cases, trim spaces, preview markdown, transform text to JSON, and more. Whether you're a developer cleaning up text data, a writer formatting content, or anyone who works with text, Format-Topia streamlines the process with just a few clicks.

## 🚀 Features

- **Text Case Conversion**: Easily transform text to UPPERCASE or lowercase
- **Space Trimming**: Remove extra spaces from your text
- **Markdown Conversion & Preview**: Convert to Markdown and preview the rendered output
- **JSON Parsing & Preview**: Transform your text to properly formatted JSON
- **File Upload**: Upload text files directly for formatting
- **Word & Character Count**: Track the number of words and characters in real-time
- **Dark/Light Theme**: Switch between dark and light modes for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **UI Libraries & Frameworks**: React 19 & Next.js 15 with App Router & Shadcn/ui
- **Styling**: Tailwind CSS 4 with Typography plugin
- **State Management**: React Context API
- **Markdown Processing**: Marked and React Markdown with rehype-raw (for handling HTML tags)
- **Json Viewer**: React JSON viewer
- **Notifications**: Sonner for toast notifications
- **File Handling (download & upload)**: React Dropzone for file uploads, File-Saver for downloads
- **Theme Switching**: Next-themes for dark/light mode
- **Development**: TypeScript, ESLint, Prettier

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ragab0/format-topia.git

# Navigate to the project directory
cd format-topia

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm run dev
```

## 🔧 Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check for code quality issues

## 📁 Project Structure

```
format-topia/
├── app/                  # Next.js App Router files
├── components/           # Reusable UI components
├── hooks/                # Custom React hooks
│   └── useText.ts        # Hook for text state management
├── lib/                  # Utility functions and shared logic
├── pages/                # Page components
│   └── home/             # Home page components
│       ├── components/   # Home-specific components
│       │   ├── actions.tsx    # Text formatting actions
│       │   ├── homeClient.tsx # Client-side home interface
│       │   ├── options.tsx    # Additional options
│       │   └── upload.tsx     # File upload component
│       └── homePage.tsx  # Main home page
├── providers/            # Context providers
│   └── textContext.tsx   # Text state context provider
├── public/               # Static assets
├── types/                # TypeScript type definitions
├── .vscode/              # VS Code configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔮 Coming Soon

- **Zustand for State Management**: Moving from Context API to Zustand for more efficient state management
- **Unit Tests**: Comprehensive test coverage with Jest and React Testing Library
- **Text History**: Track and restore previous versions of your text
- **Local Storage**: Save your work automatically between sessions
- **Keyboard Shortcuts**: Improve workflow efficiency with keyboard shortcuts

---

© 2025 Format-Topia. Made with ❤️ by <ins>**[Ragab Eid](https://ragab.vercel.app/)**</ins>
