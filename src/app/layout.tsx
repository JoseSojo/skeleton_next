import type { Metadata } from "next";
import { AuthProvider } from "@/_contexts/Auth";
import { NotificationProvider } from "@/_contexts/Notification";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skeleton Next By Jose Sojo",
  description: "skeleton con componentes y lógica adelantados para agilizar el desarrollo desde cero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <html lang="es">
          <body className='min-h-screen w-full bg-gray-50'>{children}</body>
        </html>
      </NotificationProvider>
    </AuthProvider>
  );
}
