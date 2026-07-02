import IntroScreen from '@/components/site/IntroScreen';
import ScrollProgress from '@/components/site/ScrollProgress';
import NetworkCanvas from '@/components/site/NetworkCanvas';
import AuroraLayer from '@/components/site/AuroraLayer';
import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import About from '@/components/site/About';
import Stack from '@/components/site/Stack';
import Projects from '@/components/site/Projects';
import Education from '@/components/site/Education';
import Contact from '@/components/site/Contact';
import Footer from '@/components/site/Footer';
import { getProyek } from '@/lib/db';

// Membaca `searchParams` (untuk pesan sukses/error dari form kontak)
// otomatis membuat halaman ini dynamic — tidak perlu `force-dynamic` manual.
export default async function HomePage({ searchParams }) {
  const params = await searchParams;
  const proyek = await getProyek();

  return (
    <>
      <IntroScreen />
      <ScrollProgress />
      <div className="bg-grid"></div>
      <NetworkCanvas />
      <AuroraLayer variant="a1" depth={0.12} />
      <AuroraLayer variant="a2" depth={0.22} />
      <Header />
      <Hero />
      <About />
      <Stack />
      <Projects proyek={proyek} />
      <Education />
      <Contact sukses={params?.sukses !== undefined} gagal={params?.error !== undefined} />
      <Footer />
    </>
  );
}
