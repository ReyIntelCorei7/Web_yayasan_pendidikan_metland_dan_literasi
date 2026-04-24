import { motion } from 'framer-motion';
import { BookOpen, Library, FileText, Users, ExternalLink } from 'lucide-react';
import WordReveal from '../components/animations/WordReveal';
import ScrollReveal from '../components/animations/ScrollReveal';

const koleksi = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Buku Teks & Referensi',
    desc: 'Koleksi buku teks pelajaran dan referensi akademik untuk semua jenjang pendidikan.',
    count: '1.200+ Judul',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Jurnal & Majalah',
    desc: 'Jurnal ilmiah, majalah pendidikan, dan publikasi berkala nasional maupun internasional.',
    count: '450+ Edisi',
  },
  {
    icon: <Library className="w-6 h-6" />,
    title: 'E-Library',
    desc: 'Akses perpustakaan digital 24 jam dengan ribuan buku elektronik dan sumber daring.',
    count: '5.000+ E-Book',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Ruang Belajar Bersama',
    desc: 'Fasilitas ruang diskusi dan belajar kelompok yang nyaman dan kondusif.',
    count: '12 Ruang',
  },
];

const programs = [
  { title: 'Pojok Baca', desc: 'Program membaca buku gratis setiap hari Jumat untuk semua jenjang.' },
  { title: 'Klub Literasi', desc: 'Diskusi buku rutin bulanan dipandu mentor berpengalaman.' },
  { title: 'Lomba Menulis', desc: 'Kompetisi karya tulis ilmiah dan fiksi tahunan antar sekolah.' },
  { title: 'Bedah Buku', desc: 'Acara interaktif mengupas isi dan makna buku pilihan.' },
  { title: 'Story Telling', desc: 'Pengembangan kemampuan bercerita dan presentasi publik.' },
  { title: 'Kunjungan Perpustakaan', desc: 'Kunjungan edukatif ke perpustakaan nasional dan daerah.' },
];

export default function Literasi() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center bg-charcoal overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/60" />
        <div className="relative z-10 text-center px-6">
          <p className="text-lime text-sm tracking-widest uppercase mb-4">Program Unggulan</p>
          <WordReveal text="Literasi" tag="h1" className="text-4xl lg:text-6xl font-light text-white justify-center" delay={0.2} />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg"
          >
            Membangun budaya membaca dan kecintaan terhadap ilmu pengetahuan di lingkungan Yayasan Pendidikan Metland.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="w-12 h-[3px] bg-lime mb-6" />
            <h2 className="text-4xl font-light text-charcoal mb-6">Mengapa Literasi Penting?</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Literasi bukan sekadar kemampuan membaca dan menulis. Di era digital ini, literasi mencakup kemampuan
              berpikir kritis, memahami informasi secara mendalam, dan mengkomunikasikan ide secara efektif.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Yayasan Pendidikan Metland berkomitmen menjadikan literasi sebagai fondasi seluruh proses pembelajaran,
              memastikan setiap siswa dan mahasiswa tumbuh menjadi individu yang cerdas, kritis, dan berpengetahuan luas.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="relative aspect-square max-w-md ml-auto rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
                alt="Literasi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <p className="text-white text-sm font-medium">Program literasi aktif di</p>
                  <p className="text-lime text-2xl font-extralight">5 Unit Sekolah</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Koleksi Perpustakaan */}
      <section className="bg-offwhite py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <WordReveal text="Fasilitas Perpustakaan" tag="h2" className="text-4xl font-light text-charcoal mb-4" />
            <p className="text-gray-400 mb-12 max-w-2xl">Fasilitas perpustakaan modern yang mendukung budaya literasi di setiap unit sekolah kami.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {koleksi.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-lime/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-lime/10 rounded-xl flex items-center justify-center text-lime mb-5">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-extralight text-lime mb-3">{item.count}</div>
                  <h3 className="font-semibold text-charcoal text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Program Literasi */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <WordReveal text="Program Literasi" tag="h2" className="text-4xl font-light text-charcoal mb-12" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <ScrollReveal key={prog.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-gray-100 hover:border-lime/30 hover:shadow-md transition-all duration-300 flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-lime mt-2 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm mb-2">{prog.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{prog.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <WordReveal text="Bergabung dalam Gerakan Literasi" tag="h2" className="text-4xl font-light text-white justify-center mb-4" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mb-10"
          >
            Daftarkan diri Anda atau anak Anda ke program literasi kami dan bangun kebiasaan membaca sejak dini.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/contact">
              <motion.span
                className="inline-flex items-center gap-2 bg-lime text-charcoal px-8 py-4 rounded text-sm font-medium cursor-pointer"
                whileHover={{ scale: 1.04, backgroundColor: '#94BC28' }}
                whileTap={{ scale: 0.97 }}
              >
                Daftar Sekarang <ExternalLink className="w-4 h-4" />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
