import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = products.filter((p) =>
  p.name.toLowerCase().includes(query.toLowerCase()) ||
  p.category.toLowerCase().includes(query.toLowerCase()) ||
  p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen">
            <Navbar />
            <main className="container mx-auto px-4 lg:px-8 py-20 min-h-[60vh]">
                <h1 className="section-heading mb-4">Search Results</h1>
                <p className="text-sm text-muted-foreground mb-12">
                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{query}"
                </p>

                {searchResults.length > 0 ?
        <ProductGrid products={searchResults} /> :

        <div className="text-center py-20">
                        <p className="text-lg text-muted-foreground">No products found matching your search.</p>
                    </div>
        }
            </main>
            <Footer />
        </div>);

};

export default Search;