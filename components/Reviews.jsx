import { Star } from 'lucide-react';








const sampleReviews = [
{ name: 'A. Chen', rating: 5, text: 'Perfect fit, lovely fabric. A wardrobe staple.', date: '2 weeks ago' },
{ name: 'M. Rodriguez', rating: 4, text: 'A bit bigger than expected but great blazer. The quality is outstanding.', date: '1 month ago' },
{ name: 'S. Park', rating: 5, text: 'Absolutely love this piece. The fabric drapes beautifully.', date: '3 weeks ago' },
{ name: 'J. Williams', rating: 4, text: 'Great quality. Will definitely buy more from Atelier Vogue.', date: '2 months ago' }];


const ratingDistribution = [
{ stars: 5, percentage: 65 },
{ stars: 4, percentage: 25 },
{ stars: 3, percentage: 7 },
{ stars: 2, percentage: 2 },
{ stars: 1, percentage: 1 }];


const Reviews = () => {
  return (
    <section className="py-12 border-t border-border">
      <h3 className="section-heading mb-8">Customer Reviews</h3>

      {/* Rating bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="space-y-3">
          {ratingDistribution.map((r) =>
          <div key={r.stars} className="flex items-center gap-3">
              <span className="text-sm w-12">{r.stars} star</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gold rounded-full transition-all duration-500" style={{ width: `${r.percentage}%` }} />
              </div>
              <span className="text-xs text-muted-foreground w-10 text-right">{r.percentage}%</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center lg:justify-start">
          <div className="text-center lg:text-left">
            <div className="text-5xl font-heading font-light mb-2">4.5</div>
            <div className="flex items-center gap-1 mb-1 justify-center lg:justify-start">
              {[...Array(5)].map((_, i) =>
              <Star key={i} size={16} className={i < 4 ? 'fill-gold text-gold' : 'text-border'} />
              )}
            </div>
            <p className="text-sm text-muted-foreground">Based on 128 reviews</p>
          </div>
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-8">
        {sampleReviews.map((review, i) =>
        <div key={i} className="border-b border-border pb-8 last:border-0">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, j) =>
            <Star key={j} size={12} className={j < review.rating ? 'fill-gold text-gold' : 'text-border'} />
            )}
            </div>
            <p className="text-sm mb-3 leading-relaxed">{review.text}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{review.name}</span>
              <span>·</span>
              <span>{review.date}</span>
            </div>
          </div>
        )}
      </div>
    </section>);

};

export default Reviews;