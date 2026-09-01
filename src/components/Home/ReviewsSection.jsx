import { Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      quote: "Quality food and well ambience and affordable price. The floral wall mural is absolutely breathtaking!",
      author: "Verified Google Reviewer",
      stars: 5,
      source: "Google Reviews",
    },
    {
      quote: "Excellent service, delicious food along with a great ambiance. Loved the peri-peri wraps and coolers!",
      author: "Local Explorer",
      stars: 5,
      source: "Google Reviews",
    },
    {
      quote: "The staff were super polite and served everything quickly. Best hangout spot near Sum Ultimate Medicare.",
      author: "Foodie Bhubaneswar",
      stars: 5,
      source: "Google Reviews",
    },
    {
      quote: "Both indoor AC seating and outdoor nature setup are great. 4.7 rating is truly well-deserved!",
      author: "Justdial Patron",
      stars: 5,
      source: "Justdial (143 votes)",
    },
  ];

  return (
    <section className="section-padding py-20 lg:py-28 bg-[#1f120c] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.7 Google Rating (169+ Reviews)
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Loved by Guests in Bhubaneswar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#281710] border border-white/10 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(r.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic mb-6">"{r.quote}"</p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-bold text-white">{r.author}</span>
                <span className="text-[11px] text-[#e29b5a] font-medium">{r.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
