import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

import { toast } from 'sonner';






const ProductCard = ({ product, showRating = false }) => {
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[2] || product.sizes[0],
      color: product.colorNames[0]
    });
    toast.success(`${product.name} added to bag`);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="product-card-hover">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover image-zoom"
            loading="lazy" />
          
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-4 right-4 btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center flex items-center justify-center gap-2">
            
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
          {showRating &&
          <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) =>
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'} />

            )}
              <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
            </div>
          }
          <p className="text-sm text-muted-foreground">Rs. {product.price}</p>

          {/* Color swatches */}
          <div className="flex items-center gap-2 pt-1">
            {product.colors.map((color, i) =>
            <span
              key={i}
              className="w-3 h-3 rounded-full border border-border"
              style={{ backgroundColor: color }}
              title={product.colorNames[i]} />

            )}
          </div>
        </div>
      </div>
    </Link>);

};

export default ProductCard;