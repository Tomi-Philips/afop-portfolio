import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MouseParticles from '../components/MouseParticles';



export default function Home() {
  return (
    <>
      <MouseParticles/>
      <Header />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
