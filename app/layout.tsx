import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KSG CORPS",
  description: "Corporate Services",
  icons: {
    // ✅ UPDATED LOGIC:
    // 1. b-40       -> सबसे पहले लोगो की Brightness 40% बढ़ाई (ताकि वह चमके)।
    // 2. bg-000000  -> फिर काला बैकग्राउंड लगाया।
    // 3. r-30       -> काले बैकग्राउंड बॉक्स के कोनों को गोल (Rounded) किया।
    // 4. (बाकी सेटिंग्स w-550, h-400, pad-80 सेम हैं)
    // 5. &v=100     -> कैश बस्टर अपडेट किया (ताकि बदलाव तुरंत दिखे)।
    icon: "https://ik.imagekit.io/travechela/K__5_-removebg-preview.png?tr=b-40,bg-000000,w-750,h-500,pad-80,r-30&v=100",
    apple: "https://ik.imagekit.io/travechela/K__5_-removebg-preview.png?tr=b-40,bg-000000,w-750,h-500,pad-80,r-30&v=100",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#020617] text-gray-900 dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}