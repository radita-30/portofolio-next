import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const hobi = ["Memasak", "Mendengarkan musik", "Eksplor alam"];

const langkahCita = [
  "Menuntaskan Kelas Industri UBIG sampai Semester 4",
  "Magang di perusahaan teknologi",
  "Bekerja sebagai Web Developer",
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Jumat", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
];

export default function Home() {
  return (
  <main className="mx-auto max-w-5xl px-4 py-10">
  <Hero
    nama="Radita Oktavia Eka Putri"
    tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
  />

  <section className="mt-10 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 className="mb-2 text-2xl font-bold text-utama">Tentang Saya</h2>
    <p className="text-gray-700">
      Saya senang mencoba hal baru di dunia teknologi. Saya ingin bisa
      membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
    </p>
  </section>

  <div className="mt-4 grid gap-4 md:grid-cols-2">
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold text-utama">Hobi</h2>
      <ul className="list-disc space-y-1 pl-5 text-gray-700">
        {hobi.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>

    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold text-utama">Cita-cita</h2>
      <p className="text-gray-700">
        Menjadi <strong>Full Stack Web Developer</strong>. Langkah yang saya
        rencanakan:
      </p>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-gray-700">
        {langkahCita.map((langkah) => (
          <li key={langkah}>{langkah}</li>
        ))}
      </ol>
    </section>
  </div>

  <section className="mt-10">
    <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
    <div className="grid gap-4 md:grid-cols-3">
{skills.map((skill) => (
<SkillCard key={skill.nama} nama={skill.nama}
level={skill.level} />
    ))}
      </div>
  </section>

  <section className="mt-10 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 className="mb-4 text-2xl font-bold text-utama">Jadwal Belajar</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="bg-utama text-white">
          <tr>
            <th className="px-3 py-2 font-semibold">Hari</th>
            <th className="px-3 py-2 font-semibold">Waktu</th>
            <th className="px-3 py-2 font-semibold">Kegiatan</th>
          </tr>
        </thead>
        <tbody>
          {jadwal.map((item) => (
            <tr key={item.hari} className="border-b border-gray-200">
              <td className="px-3 py-2">{item.hari}</td>
              <td className="px-3 py-2">{item.waktu}</td>
              <td className="px-3 py-2">{item.kegiatan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
</main>
);
}