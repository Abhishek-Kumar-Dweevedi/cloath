import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const filters = [
{ title: 'Category', options: ['Blazers', 'Dresses', 'Knitwear', 'Denim', 'Coats', 'Tops', 'Accessories'] },
{ title: 'Size', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
{ title: 'Color', options: ['Cream', 'Navy', 'Charcoal', 'Oatmeal', 'Sage', 'Camel'] },
{ title: 'Price', options: ['Under Rs. 50', 'Rs. 50 - Rs. 100', 'Rs. 100 - Rs. 150', 'Over Rs. 150'] }];


const FilterSidebar = ({ selectedFilters = {}, onFilterChange = () => {} }) => {
  const [openSections, setOpenSections] = useState(['Category', 'Size']);

  const toggleSection = (title) => {
    setOpenSections((prev) =>
    prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleCheckboxChange = (title, option) => {
    const currentSelected = selectedFilters[title] || [];
    const newSelected = currentSelected.includes(option)
      ? currentSelected.filter((item) => item !== option)
      : [...currentSelected, option];
    onFilterChange(title, newSelected);
  };

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-8">Filters</h3>
      <div className="space-y-6">
        {filters.map((section) =>
        <div key={section.title} className="border-b border-border pb-6">
            <button
            onClick={() => toggleSection(section.title)}
            className="flex items-center justify-between w-full text-sm font-medium mb-3">
            
              {section.title}
              <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${openSections.includes(section.title) ? 'rotate-180' : ''}`} />
            
            </button>
            {openSections.includes(section.title) &&
          <div className="space-y-2 animate-fade-in">
                {section.options.map((option) =>
            <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded-sm border-border accent-primary"
                      checked={selectedFilters[section.title]?.includes(option) || false}
                      onChange={() => handleCheckboxChange(section.title, option)}
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                      {option}
                    </span>
                  </label>
            )}
              </div>
          }
          </div>
        )}
      </div>
    </aside>);

};

export default FilterSidebar;