import ProductCard from './ProductCard';







const ProductGrid = ({ products, showRating = false }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
      {products.map((product) =>
      <ProductCard key={product.id} product={product} showRating={showRating} />
      )}
    </div>);

};

export default ProductGrid;