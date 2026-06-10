import { Space_Grotesk, Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'

export const dynamic = 'force-dynamic'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Alex Nazin — Freelance Learning Designer',
  description: 'I design and build creative learning experiences that actually work. Your universal partner for end-to-end instructional design.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Alex Nazin — Freelance Learning Designer',
    description: 'I design and build creative learning experiences that actually work.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
        {/* Direct Google Font loading to prevent Next.js bundle-shifting built-in CSS @import errors */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght=300;400;500;600&family=JetBrains+Mono:wght=400;500&family=Space+Grotesk:wght=300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}