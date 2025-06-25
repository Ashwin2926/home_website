// src/app/page.tsx
// Removed Header and Footer imports as they are now handled by app/layout.tsx
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Services from '../components/Services';
import CoreValues from '../components/CoreValues';
 import Solutions from '../components/Solutions'; 
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 font-sans antialiased">
      {/* The Header and Footer components are now globally handled by app/layout.tsx */}
      <Hero />
       <CoreValues />
      
      <Services />

      <Solutions />
   
      <Testimonials />
      <Partners />
      <Contact />
      <FinalCTA />
    </div>
  );
}

export default Home;