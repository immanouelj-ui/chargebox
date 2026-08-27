import { Star, CheckCircle, UserCheck } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface ReviewItem {
  id: string;
  authorName: string;
  rating: number;
  title: string | null;
  comment: string;
  createdAt: Date | string;
}

interface ProductReviewsProps {
  reviews: ReviewItem[];
  productName: string;
}

export function ProductReviews({ reviews, productName }: ProductReviewsProps) {
  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
      : "5.0";

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Avis Clients ({reviews.length})
          </h3>
          <p className="text-xs text-slate-500">
            Retours d'expérience vérifiés sur {productName}
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl">
          <span className="text-2xl font-black text-slate-900">{averageRating}</span>
          <div>
            <div className="flex text-amber-400 text-sm">{"★".repeat(5)}</div>
            <span className="text-[10px] text-slate-500 font-semibold">100% clients satisfaits</span>
          </div>
        </div>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-8 text-xs text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
          Soyez le premier à donner votre avis sur cette borne.
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2 shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-brand-100 text-brand-800 font-bold text-xs flex items-center justify-center">
                    {rev.authorName.slice(0, 1)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900">{rev.authorName}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded ml-2">
                      <UserCheck className="w-3 h-3" /> Achat Vérifié
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400">{formatDate(rev.createdAt)}</span>
              </div>

              <div className="flex text-amber-400 text-xs">
                {"★".repeat(rev.rating)}
              </div>

              {rev.title && (
                <h5 className="text-xs font-bold text-slate-900">{rev.title}</h5>
              )}

              <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
