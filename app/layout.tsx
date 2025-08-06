import './globals.css';
import { ReactNode } from 'react';
import CursorBrush from './components/cursor';

export const metadata = {
  title: 'My Portfolio',
  description: 'Jerome Tayco Portfolio Site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/jp_logo.png" type="image/x-icon" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-white text-white relative overflow-hidden">
        <CursorBrush />
        {children}
      </body>
    </html>
  );
}
