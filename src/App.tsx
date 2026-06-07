import { RootLayout } from './components/layout';
import {
  HeroSection,
  AboutSection,
  ImpactMetricsSection,
  ExperienceTimelineSection,
  EducationSection,
  SignatureWorkSection,
  TechnicalStackSection,
  ContactSection,
} from './components/sections';
import './index.css';

function App() {
  return (
    <RootLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceTimelineSection />
      <ImpactMetricsSection />
      <SignatureWorkSection />
      <TechnicalStackSection />
      <EducationSection />
      <ContactSection />
    </RootLayout>
  );
}

export default App;

