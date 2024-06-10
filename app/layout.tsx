import "./globals.css";
import Providers from "./providers/Providers";
import { Header } from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </Providers>
  );
}
