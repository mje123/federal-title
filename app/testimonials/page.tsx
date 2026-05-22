import { Star } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews | Federal Title & Escrow Company',
  description:
    'Read what thousands of satisfied clients say about Federal Title & Escrow Company. Real Google reviews from DC, Maryland & Virginia homebuyers and sellers.',
};

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface PlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
  url: string;
}

async function getGoogleReviews(): Promise<PlaceDetails | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,url&key=${apiKey}&reviews_sort=newest`,
      { next: { revalidate: 86400 } }
    );
    const data = await res.json();
    if (data.status !== 'OK') return null;
    return data.result;
  } catch {
    return null;
  }
}

function Stars({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const cls = size === 'lg' ? 'h-6 w-6' : 'h-4 w-4';
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${cls} ${
            i <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-[var(--color-neutral-300)]'
          }`}
        />
      ))}
    </div>
  );
}

export default async function TestimonialsPage() {
  const place = await getGoogleReviews();

  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            What Our Clients Say
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Thousands of satisfied clients across DC, Maryland & Virginia have trusted
            Federal Title with their most important financial transaction.
          </p>

          {place ? (
            <div className="inline-flex items-center gap-4 bg-white/10 rounded-2xl px-8 py-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-white">{place.rating.toFixed(1)}</p>
                <Stars rating={Math.round(place.rating)} size="lg" />
                <p className="text-white/60 text-sm mt-1">
                  {place.user_ratings_total.toLocaleString()} Google reviews
                </p>
              </div>
            </div>
          ) : (
            <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
              <Stars rating={5} size="lg" />
              <span className="font-semibold text-white">4.9 out of 5</span>
              <span className="text-white/60 text-sm">· 800+ reviews</span>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          {place?.reviews && place.reviews.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {place.reviews.map((review, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-7 flex flex-col"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      {review.profile_photo_url ? (
                        <img
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          className="h-10 w-10 rounded-full object-cover shrink-0"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center font-semibold text-sm shrink-0">
                          {review.author_name.charAt(0)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-semibold text-[var(--color-primary-900)] text-sm truncate">
                          {review.author_name}
                        </p>
                        <p className="text-xs text-[var(--color-neutral-400)]">
                          {review.relative_time_description}
                        </p>
                      </div>
                    </div>

                    <Stars rating={review.rating} />

                    <blockquote className="text-[var(--color-neutral-700)] leading-relaxed text-sm mt-3 flex-1">
                      {review.text}
                    </blockquote>

                    <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-[var(--color-neutral-100)]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-label="Google">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="text-xs text-[var(--color-neutral-400)]">Google review</span>
                    </div>
                  </div>
                ))}
              </div>

              {place.url && (
                <div className="text-center">
                  <a
                    href={place.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-700)] text-sm font-medium hover:border-[var(--color-primary-400)] hover:text-[var(--color-primary-700)] transition-colors"
                  >
                    See all {place.user_ratings_total.toLocaleString()} reviews on Google →
                  </a>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 text-[var(--color-neutral-500)]">
              <p className="mb-2">Reviews are loading. If this persists, please check back shortly.</p>
              <p className="text-sm">Google Places API key or Place ID may not be configured.</p>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Join thousands of satisfied clients"
        description="Get your guaranteed quote today. Save up to $750 when you order online."
        primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'Order Now & Save', href: '/order' }}
        background="gradient"
      />
    </>
  );
}
