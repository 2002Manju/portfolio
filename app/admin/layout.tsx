import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal — Resume Management",
  description: "Private administrative portal for managing portfolio resume assets.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[#06070c] text-white">{children}</div>;
}
