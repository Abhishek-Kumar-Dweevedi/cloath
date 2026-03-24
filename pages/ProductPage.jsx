import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reviews from '@/components/Reviews';
import SizeGuideModal from '@/components/SizeGuideModal';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id || '');
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="section-heading">Product not found</h1>
        </div>
        <Footer />
      </div>);

  }

  const handleAddToBag = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: product.colorNames[selectedColor]
    });
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) =>
              <div key={i} className="aspect-square bg-muted overflow-hidden border border-border cursor-pointer hover:border-foreground transition-colors duration-200">
                  <img src={product.image} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="lg:pt-8">
            <h1 className="font-heading text-3xl lg:text-4xl font-light tracking-wide uppercase mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) =>
                <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'} />
                )}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl font-heading font-light mb-8">Rs. {product.price}</p>

            <p className="text-sm leading-relaxed text-muted-foreground mb-8">{product.description}</p>

            {/* Color */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] uppercase font-medium mb-3">
                Color: {product.colorNames[selectedColor]}
              </p>
              <div className="flex gap-3">
                {product.colors.map((color, i) =>
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                  selectedColor === i ? 'border-foreground scale-110' : 'border-border'}`
                  }
                  style={{ backgroundColor: color }}
                  title={product.colorNames[i]} />

                )}
              </div>
            </div>

            {/* Size */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs tracking-[0.15em] uppercase font-medium">Size</p>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="text-xs underline text-muted-foreground hover:text-foreground transition-colors duration-200">
                  
                  Size Guide
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) =>
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[48px] px-4 py-3 text-xs tracking-wider border transition-all duration-200 ${
                  selectedSize === size ?
                  'bg-primary text-primary-foreground border-primary' :
                  'border-border hover:border-foreground'}`
                  }>
                  
                    {size}
                  </button>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mb-8">
              <button onClick={handleAddToBag} className="btn-primary flex-1 flex items-center justify-center gap-2">
                <ShoppingBag size={16} />
                Add to Bag
              </button>
              <button className="btn-outline px-4 flex items-center justify-center" aria-label="Add to Wishlist">
                <Heart size={18} />
              </button>
            </div>

            {/* Material */}
            <div className="border-t border-border pt-8">
              <h3 className="text-xs tracking-[0.15em] uppercase font-medium mb-4">Material & Care</h3>
              <ul className="space-y-2">
                {product.material.map((m, i) =>
                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    {m}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <Reviews />
      </main>
      <Footer />
      <SizeGuideModal isOpen={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </div>);

};

export default ProductPage;