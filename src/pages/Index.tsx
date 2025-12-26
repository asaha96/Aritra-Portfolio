import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageDecor from '@/components/PageDecor';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content" className="relative overflow-hidden">
        <PageDecor />
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
