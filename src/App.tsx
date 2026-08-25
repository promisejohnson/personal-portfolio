import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
