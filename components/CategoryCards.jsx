import { Link } from 'react-router-dom';
import womenImg from '@/assets/categories/women.jpg';
import menImg from '@/assets/categories/men.jpg';
import essentialsImg from '@/assets/categories/essentials.jpg';
import saleImg from '@/assets/categories/sale.jpg';

const categories = [
{ name: 'Women', image: womenImg, to: '/women' },
{ name: 'Men', image: menImg, to: '/men' },
{ name: 'Essentials', image: essentialsImg, to: '/women' },
{ name: 'Sale', image: saleImg, to: '/women' }];


const CategoryCards = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-20">
      <h2 className="section-heading text-center mb-12">Featured Categories</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {categories.map((cat) =>
        <Link
          key={cat.name}
          to={cat.to}
          className="group relative aspect-[3/4] overflow-hidden">
          
            <img
            src={cat.image}
            alt={cat.name}
            className="absolute inset-0 w-full h-full object-cover image-zoom"
            loading="lazy" />
          
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-end p-6">
              <h3 className="font-heading text-2xl lg:text-3xl text-primary-foreground font-light tracking-wide">
                {cat.name}
              </h3>
            </div>
          </Link>
        )}
      </div>
    </section>);

};

export default CategoryCards;