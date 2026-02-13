"use client";

export default function AnnouncementBar() {
  return (
    <div className="bg-brand text-white text-xs tracking-[0.2em] uppercase overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap py-2.5">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="mx-8">
            Livraison offerte en France dès 100€ d&apos;achat
            <span className="mx-8">•</span>
            Collection Essential — Disponible maintenant
            <span className="mx-8">•</span>
            Confectionné au Portugal
            <span className="mx-8">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
