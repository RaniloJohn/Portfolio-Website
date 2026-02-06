import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import ResumeSection from '@/components/ResumeSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <ProfessionalSummary />
      <ResumeSection />
      <ProjectsGrid />
      <Certifications />
      <Footer />
    </main>
  );
}
