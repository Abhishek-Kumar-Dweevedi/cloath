import { X } from 'lucide-react';






const SizeGuideModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizes = [
  { size: 'XS', chest: '32"', waist: '24"', hip: '34"' },
  { size: 'S', chest: '34"', waist: '26"', hip: '36"' },
  { size: 'M', chest: '36"', waist: '28"', hip: '38"' },
  { size: 'L', chest: '38"', waist: '30"', hip: '40"' },
  { size: 'XL', chest: '40"', waist: '32"', hip: '42"' }];


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50" onClick={onClose} />
      <div className="relative bg-background p-8 max-w-md w-full animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:text-muted-foreground transition-colors duration-200" aria-label="Close">
          <X size={20} />
        </button>

        <h3 className="section-heading text-2xl mb-6">Size Guide</h3>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 text-xs tracking-[0.15em] uppercase font-medium">Size</th>
              <th className="text-left py-3 text-xs tracking-[0.15em] uppercase font-medium">Chest</th>
              <th className="text-left py-3 text-xs tracking-[0.15em] uppercase font-medium">Waist</th>
              <th className="text-left py-3 text-xs tracking-[0.15em] uppercase font-medium">Hip</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((s) =>
            <tr key={s.size} className="border-b border-border">
                <td className="py-3 font-medium">{s.size}</td>
                <td className="py-3 text-muted-foreground">{s.chest}</td>
                <td className="py-3 text-muted-foreground">{s.waist}</td>
                <td className="py-3 text-muted-foreground">{s.hip}</td>
              </tr>
            )}
          </tbody>
        </table>

        <p className="text-xs text-muted-foreground mt-6">
          Measurements are in inches. If you're between sizes, we recommend sizing up for a relaxed fit.
        </p>
      </div>
    </div>);

};

export default SizeGuideModal;