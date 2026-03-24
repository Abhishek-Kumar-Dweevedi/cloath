import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import { getProductsByCategory } from '@/data/products';
import womenImg from '@/assets/categories/women.jpg';
import { Link } from 'react-router-dom';

const Women = () => {
  const products = getProductsByCategory('women');
  const essentials = getProductsByCategory('essentials');
  const allProducts = [...products, ...essentials];

  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (section, newSelection) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [section]: newSelection
    }));
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // If no filters selected for any section, show all
      if (Object.values(selectedFilters).every((arr) => !arr || arr.length === 0)) {
        return true;
      }

      // Filter by Category
      if (selectedFilters.Category?.length > 0) {
        // Mock filter logic
      }

      // Filter by Size
      if (selectedFilters.Size?.length > 0) {
        const hasSize = selectedFilters.Size.some(size => product.sizes.includes(size));
        if (!hasSize) return false;
      }

      // Filter by Color
      if (selectedFilters.Color?.length > 0) {
        const hasColor = selectedFilters.Color.some(color => product.colorNames.includes(color));
        if (!hasColor) return false;
      }

      // Filter by Price
      if (selectedFilters.Price?.length > 0) {
        const matchPrice = selectedFilters.Price.some(priceRange => {
          if (priceRange === 'Under Rs. 50') return product.price < 50;
          if (priceRange === 'Rs. 50 - Rs. 100') return product.price >= 50 && product.price <= 100;
          if (priceRange === 'Rs. 100 - Rs. 150') return product.price >= 100 && product.price <= 150;
          if (priceRange === 'Over Rs. 150') return product.price > 150;
          return false;
        });
        if (!matchPrice) return false;
      }

      return true;
    });
  }, [allProducts, selectedFilters]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={womenImg} alt="Women's collection" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/30" />
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="animate-fade-up">
              <h1 className="font-heading text-4xl md:text-6xl font-light text-primary-foreground tracking-wide mb-4">
                Women's Collection
              </h1>
              <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/80 mb-8">
                Consciously Crafted. Timeless Style.
              </p>
              <Link to="/women" className="btn-primary inline-block bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                Shop New Arrivals
              </Link>
            </div>
          </div>
        </section>

        {/* Products with filters */}
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <FilterSidebar selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">{filteredProducts.length} products</p>
                <select className="text-sm bg-transparent border border-border px-4 py-2 focus:outline-none">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
              <ProductGrid products={filteredProducts} showRating />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default Women;