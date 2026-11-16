import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EvidenceForge — Ecommerce Thesis Audit',
  description: 'Pressure-test an ecommerce venture before you build the catalogue.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
