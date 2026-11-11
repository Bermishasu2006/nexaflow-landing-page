// One feature tile. `icon` is a Lucide component passed in from content.js.
export default function FeatureCard({ icon: Icon, title, text, delay = 0 }) {
  return (
    <article className="feature-card reveal" style={{ '--delay': `${delay}ms` }}>
      <span className="feature-card__icon">
        <Icon size={24} aria-hidden="true" />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
