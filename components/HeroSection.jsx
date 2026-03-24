import { Link } from 'react-router-dom';
import heroImg from '@/assets/hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <img
        src={heroImg}
        alt="Atelier Vogue collection - model wearing cream blazer"
        className="absolute inset-0 w-full h-full object-cover" />
      
      <div className="absolute inset-0 bg-foreground/20" />
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="animate-fade-up">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground tracking-wide mb-6">
            Elevate Your Style
          </h1>
          <p className="font-heading text-lg md:text-xl text-primary-foreground/90 font-light mb-2">
            Discover Our Latest Collection
          </p>
          <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/70 mb-10">
            Consciously Made. Effortlessly Stylish.
          </p>
          <Link to="/women" className="btn-primary inline-block bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
            Shop New Arrivals
          </Link>
        </div>
      </div>
    </section>);

};

export default HeroSection;