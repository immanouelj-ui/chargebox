import React, { type ReactNode } from "react";

export function StepTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-6">
      <div className="text-[11px] uppercase tracking-[0.2em] text-brand-400 font-bold">{kicker}</div>
      <h3 className="mt-2 text-xl sm:text-2xl font-black text-white tracking-tight">{title}</h3>
      {sub && <p className="mt-1.5 text-xs sm:text-sm text-slate-400">{sub}</p>}
    </div>
  );
}

export function OptionCard({
  active,
  onClick,
  title,
  desc,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  desc?: string;
  icon?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full text-left rounded-2xl border p-4 sm:p-5 transition-all ${
        active
          ? "border-brand-500 bg-brand-500/15 ring-2 ring-brand-500/30 text-white shadow-md shadow-brand-500/10"
          : "border-slate-800 bg-slate-900/80 hover:border-slate-700 hover:bg-slate-800/80 text-slate-200"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${
              active ? "bg-brand-500 text-slate-950 font-bold" : "bg-slate-800 text-brand-400"
            }`}
          >
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm text-white tracking-tight">{title}</div>
          {desc && <div className="text-xs text-slate-400 mt-0.5 leading-snug">{desc}</div>}
        </div>
      </div>
    </button>
  );
}

export function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
        active
          ? "border-brand-500 bg-brand-500 text-slate-950 shadow-md shadow-brand-500/20"
          : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700 hover:bg-slate-800"
      }`}
    >
      {children}
    </button>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">{label}</div>
      {children}
      {hint && <div className="text-xs text-slate-500 mt-1.5">{hint}</div>}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return (
    <input
      {...rest}
      className={`w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white
        outline-none transition-all placeholder:text-slate-500
        focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 ${className}`}
    />
  );
}