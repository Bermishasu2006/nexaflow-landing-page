import { ArrowRight, Check, Sparkles } from 'lucide-react';
import DashboardMockup from './DashboardMockup.jsx';
import '../styles/hero.css';

const HIGHLIGHTS = ['Free plan forever', 'No credit card required', 'Set up in 2 minutes'];
const TRUSTED_BY = ['Northwind', 'Lumenix', 'Vertexa', 'Orbitly', 'Kitecloud'];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__badge">
            <Sparkles size={16} aria-hidden="true" />
            New: Timeline view for every project
          </p>

          <h1 id="hero-title">
            Work Smarter. <span>Achieve More.</span>
          </h1>

          <p className="hero__text">
            NexaFlow brings your tasks, projects and team into one clear workspace. Plan work,
            track progress and collaborate in real time, so nothing slips through the cracks.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary btn--lg">
              Get Started
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#features" className="btn btn--secondary btn--lg">
              Explore Features
            </a>
          </div>

          <ul className="hero__highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <DashboardMockup />
      </div>

      <div className="container trusted">
        <p>Trusted by fast-moving teams at</p>
        <ul>
          {TRUSTED_BY.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
