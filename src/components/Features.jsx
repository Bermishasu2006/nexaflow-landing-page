import SectionHeader from './SectionHeader.jsx';
import FeatureCard from './FeatureCard.jsx';
import { FEATURES } from '../data/content.js';
import '../styles/features.css';

export default function Features() {
  return (
    <section id="features" className="section features" aria-labelledby="features-title">
      <div className="container">
        <SectionHeader
          id="features-title"
          eyebrow="Features"
          title="Everything your team needs to stay in flow"
          text="From the first task to the final delivery, NexaFlow keeps work organised, visible and moving forward."
        />

        <div className="features__grid">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
