// src/app/page.tsx
// Removed Header and Footer imports as they are now handled by app/layout.tsx
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Services from '../components/Services';
import CoreValues from '../components/CoreValues';
// import Solutions from '../components/Solutions'; // Remove this line if Solutions component is not defined or provided
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 font-sans antialiased">
      {/* The Header and Footer components are now globally handled by app/layout.tsx */}
      <Hero />
       <CoreValues />
      <Partners />
      <Services />
     
      {/* If you have a Solutions component defined and want to include it, uncomment the line above and here:
      <Solutions />
      Otherwise, ensure it's removed to avoid errors. */}
      <Testimonials />
      <Contact />
      <FinalCTA />
    </div>
  );
}

export default Home;