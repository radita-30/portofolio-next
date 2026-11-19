"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TombolTema from "@/components/TombolTema";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-utama text-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold">
          Radita Oktavia Eka Putri
        </Link>

        <ul className="flex gap-6 text-sm">
          {menu.map((item) => {
            // Kode 6.5: menu aktif termasuk halaman detail
            let aktif = pathname.startsWith(item.href);
            if (item.href === "/") {
              aktif = pathname === "/";
            }

            let kelas = "text-gray-200 hover:text-white";
            if (aktif) {
              kelas = "font-bold text-white underline underline-offset-8";
            }

            return (
              <li key={item.href}>
                <Link href={item.href} className={kelas}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <TombolTema />
      </nav>
    </header>
  );
}