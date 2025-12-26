import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageDecor from '@/components/PageDecor';
import SkillsOrbit from '@/components/SkillsOrbit';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content" className="relative overflow-hidden">
        <PageDecor />
        <Hero />
        <SkillsOrbit />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
