import Link from "next/link";

export const metadata = {
    title: "Halaman tidak ditemukan",
};

export default function NotFound() {
    return (
        <main className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center">
            <p className="text-6xl font-bold text-red-600">404</p>
            <h1 className="mt-4 text-2xl font-bold text-utama">Halaman tidak ditemukan</h1>
            <p className="mt-2 text-gray-700">
                Alamat yang kamu buka tidak ada atau sudah dipindahkan.
            </p>
            <Link
                href="/"
                className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white"
            >
                Kembali ke Beranda
            </Link>
        </main>
    );
}