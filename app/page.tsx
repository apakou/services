import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Booking from './components/Booking';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Booking />
    </main>
  );
}
