// Brand mark + wordmark. `light` switches the text colour for dark backgrounds.
export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#0f1b3d" />
        <path
          d="M9 22V10l14 12V10"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="23" cy="10" r="2.6" fill="#8b7cf6" />
      </svg>
      <span className="logo__text">
        Nexa<span>Flow</span>
      </span>
    </span>
  );
}
