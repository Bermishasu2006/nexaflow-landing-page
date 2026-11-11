// Reusable heading block used at the top of each content section.
export default function SectionHeader({ eyebrow, title, text, id }) {
  return (
    <div className="section-header reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {text && <p className="section-header__text">{text}</p>}
    </div>
  );
}
