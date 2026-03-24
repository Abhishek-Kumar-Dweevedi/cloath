import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CategoryCards from '@/components/CategoryCards';
import ProductGrid from '@/components/ProductGrid';
import { getBestSellers } from '@/data/products';

const Home = () => {
  const bestSellers = getBestSellers();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CategoryCards />

        {/* Best Sellers */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <h2 className="section-heading text-center mb-4">Best Sellers</h2>
          <p className="text-center text-sm text-muted-foreground mb-12 tracking-wide">
            Our most loved pieces, chosen by you
          </p>
          <ProductGrid products={bestSellers} />
        </section>

      </main>
      <Footer />
    </div>);

};

export default Home;