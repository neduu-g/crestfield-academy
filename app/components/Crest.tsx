type CrestProps = {
  className?: string;
};

// Shield with an open book. Original artwork for the Crestfield concept.
export default function Crest({ className = "h-12 w-12" }: CrestProps) {
  return (
    <svg viewBox="0 0 64 72" className={className} aria-hidden="true" focusable="false">
      <path d="M32 2 6 11v22c0 17 11 30 26 37 15-7 26-20 26-37V11L32 2Z" fill="#c9a24a" />
      <path d="M32 6.5 10 14v19c0 14.8 9.3 26.2 22 32.6C44.7 59.2 54 47.8 54 33V14L32 6.5Z" fill="#13294b" />
      <path d="M32 11 14 17v4h36v-4l-18-6Z" fill="#c9a24a" opacity="0.9" />
      <path
        d="M32 30c-4.5-3-10-4-15-3.4v19c5-.6 10.5.4 15 3.4 4.5-3 10-4 15-3.4v-19c-5-.6-10.5.4-15 3.4Z"
        fill="#fbf9f4"
      />
      <path d="M32 30v19" stroke="#c9a24a" strokeWidth="1.6" />
      <path
        d="M20.5 32c3 0 6 .7 8.5 2M20.5 36c3 0 6 .7 8.5 2M20.5 40c3 0 6 .7 8.5 2M43.5 32c-3 0-6 .7-8.5 2M43.5 36c-3 0-6 .7-8.5 2M43.5 40c-3 0-6 .7-8.5 2"
        stroke="#2b4269"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
      <path d="m32 54.5 1.4 2.9 3.2.5-2.3 2.2.5 3.2-2.8-1.5-2.8 1.5.5-3.2-2.3-2.2 3.2-.5L32 54.5Z" fill="#c9a24a" />
    </svg>
  );
}

export function Wordmark({ light = false, size = "md" }: { light?: boolean; size?: "md" | "lg" }) {
  return (
    <span className="flex items-center gap-3">
      <Crest className={size === "lg" ? "h-16 w-14 shrink-0" : "h-12 w-11 shrink-0"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-[0.14em] ${size === "lg" ? "text-2xl" : "text-xl"} ${light ? "text-white" : "text-navy"}`}
        >
          CRESTFIELD
        </span>
        <span
          className={`mt-1 text-[0.7rem] font-semibold tracking-[0.42em] ${light ? "text-gold" : "text-gold-deep"}`}
        >
          ACADEMY
        </span>
      </span>
    </span>
  );
}
