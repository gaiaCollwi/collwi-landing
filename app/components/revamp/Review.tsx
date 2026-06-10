"use client";

import { UserReviewSimple } from "@/types/models";
import { motion } from "framer-motion";

const ReviewComponent = ({
  review,
  hasFocus,
}: {
  review: UserReviewSimple;
  hasFocus: boolean;
}) => {
  const userType = review.userProfile?.role === "coach" ? "Coach" : "Member";
  const initials = userType === "Coach" ? "C" : "M";

  return (
    <motion.div
      className={`relative h-[320px] w-[300px] p-7 mx-2.5 rounded-[1.75rem] transition-all duration-500 flex flex-col justify-between ${
        hasFocus
          ? 'bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.15)] scale-[1.03]'
          : 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]'
      }`}
      layout
    >
      {/* Glow effect for focused */}
      {hasFocus && (
        <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-secondary/30 via-transparent to-tertiary/20 -z-10 blur-sm" />
      )}

      {/* Quote mark */}
      <div className={`font-display text-6xl leading-none -mt-1 mb-1 ${
        hasFocus ? 'text-secondary' : 'text-slate-100'
      }`}>
        &ldquo;
      </div>

      {/* Content */}
      <p className={`text-[0.85rem] leading-[1.7] flex-1 ${
        hasFocus ? 'text-slate-300' : 'text-slate-400'
      }`}>
        {review.content.length > 180 ? review.content.substring(0, 180) + '...' : review.content}
      </p>

      {/* Author */}
      <div className={`mt-5 pt-5 ${hasFocus ? 'border-t border-white/10' : 'border-t border-slate-50'}`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-colors ${
            hasFocus
              ? 'bg-gradient-to-br from-secondary to-teal-500 text-white'
              : 'bg-slate-50 text-slate-400'
          }`}>
            {initials}
          </div>
          <div>
            <div className={`text-xs font-semibold ${hasFocus ? 'text-white' : 'text-slate-600'}`}>
              {userType}
            </div>
            <div className={`text-xs ${hasFocus ? 'text-slate-400' : 'text-slate-300'}`}>
              {review.userProfile?.country || "Global"}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewComponent;
