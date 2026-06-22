import "./globals.css";

export const metadata = {
  title: "Rohit Verma | Global Network Operations",
  description:
    "Enterprise network operations leader focused on internet edge, backbone, optical networks, routing strategy, and resilient global infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
