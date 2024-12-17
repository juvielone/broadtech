import "./globals.css";

export const metadata = {
  title: "Broadtech Business Solutions",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
