import { Check, Star } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { PLANS } from '../data/content.js';
import '../styles/pricing.css';

// Each plan button is a link to the #contact form; clicking it also stores the
// chosen plan in App state so the form opens with that plan pre-selected.
export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="section pricing" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHeader
          id="pricing-title"
          eyebrow="Pricing"
          title="Simple pricing that grows with you"
          text="Start free and upgrade when your team is ready. No hidden fees, cancel anytime."
        />

        <div className="pricing__grid">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`plan reveal ${plan.recommended ? 'plan--featured' : ''}`}
              aria-labelledby={`plan-${plan.id}`}
            >
              {plan.recommended && (
                <span className="plan__badge">
                  <Star size={14} aria-hidden="true" /> Recommended
                </span>
              )}

              <h3 id={`plan-${plan.id}`}>{plan.name}</h3>
              <p className="plan__description">{plan.description}</p>

              <p className="plan__price">
                <strong>{plan.price}</strong>
                <span>/ {plan.period}</span>
              </p>

              <a
                href="#contact"
                className={`btn btn--block ${plan.recommended ? 'btn--accent' : 'btn--secondary'}`}
                onClick={() => onSelectPlan(plan.id)}
              >
                {plan.cta}
              </a>

              <ul className="plan__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
