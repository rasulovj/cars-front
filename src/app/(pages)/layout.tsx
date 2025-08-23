// import { HydrationProvider } from "react-hydration-provider";
"use client";
import Navbar from "@/shared/navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <div>
          {pathname == "/login" && "/register" ? null : <Navbar />}
          {/* <Navbar /> */}
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
