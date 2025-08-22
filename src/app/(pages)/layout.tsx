// import { HydrationProvider } from "react-hydration-provider";

import Navbar from "@/shared/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
