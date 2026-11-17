import Kartu from "@/components/Kartu";
import SkillCard from "@/components/SkillCard";

export const metadata = {
    title: "Tentang",
    description: "Cerita, hobi, cita-cita, dan jadwal belajar Radita Putri.",
};

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwalBelajar = [
  { hari: "Rabu", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Sabtu", waktu: "16.00 - 21.00", kegiatan: "Mengerjakan tugas praktikum" },
  { hari: "Minggu", waktu: "19.30 - 20.30", kegiatan: "Menonton video dan menulis laporan" },
];

export default function Tentang() {
    return (
        <main className="mx-auto max-w-5xl space-y-8 px-4 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">Tentang Saya</h1>

            <Kartu judul="Perkenalan">
                <p className="leading-relaxed text-gray-700">
                    Saya adalah siswi kelas XI-PPLG yang memiliki rasa ingin tahu yang tinggi dan senang mengeksplorasi hal-hal baru, khususnya di bidang teknologi.
                    Selain mempelajari pengembangan web, saya aktif dalam kegiatan public speaking untuk melatih kemampuan berkomunikasi.
                </p>
            </Kartu>

            <div className="grid gap-6 md:grid-cols-2">
                <Kartu judul="Hobi">
                    <ul className="list-disc space-y-1 pl-5 text-gray-700">
                        <li>Memasak</li>
                        <li>Eksplor alam</li>
                        <li>Mendengarkan musik</li>
                        <li>Travelling</li>
                        <li>Berlatih public speaking dan berdiskusi</li>
                        <li>Menonton film</li>
                        <li>Mencoba teknologi dan aplikasi baru</li>
                    </ul>
                </Kartu>

                <Kartu judul="Cita-cita">
                    <p className="mb-3 text-gray-700">
                        Menjadi Hakim sekaligus pemilik Software House sendiri. Langkah yang saya rencanakan:
                    </p>
                    <ol className="list-decimal space-y-1 pl-5 text-gray-700">
                        <li>Menyelesaikan pendidikan SMK, lalu melanjutkan kuliah di Fakultas Hukum</li>
                        <li>Mengasah kemampuan pemrograman melalui proyek dan magang di bidang teknologi</li>
                        <li>Merintis software house sendiri sambil menempuh jalur karier sebagai hakim</li>
                    </ol>
                </Kartu>
            </div>

            <Kartu judul="Keahlian">
                <div className="grid gap-4 md:grid-cols-3">
                    {skills.map((skill) => (
                        <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
                    ))}
                </div>
            </Kartu>

            <Kartu judul="Jadwal Belajar">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm text-gray-700">
                        <thead>
                            <tr className="bg-utama text-white">
                                <th className="p-3">Hari</th>
                                <th className="p-3">Waktu</th>
                                <th className="p-3">Kegiatan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jadwalBelajar.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="p-3 font-medium">{item.hari}</td>
                                    <td className="p-3">{item.waktu}</td>
                                    <td className="p-3">{item.kegiatan}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Kartu>
        </main>
    );
}