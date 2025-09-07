import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
