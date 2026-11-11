import { CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { STEPS, STATS } from '../data/content.js';
import '../styles/how-it-works.css';

const BENEFITS = [
  'One shared home for tasks, files and conversations',
  'Real-time visibility into who is doing what, and when',
  'Reports that show progress without status meetings',
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how" aria-labelledby="how-title">
      <div className="container">
        <div className="how__about">
          <div className="how__about-text reveal">
            <p className="eyebrow">About NexaFlow</p>
            <h2 id="how-title">One workspace for planning, doing and delivering</h2>
            <p>
              NexaFlow is a workflow and project management platform for modern teams. It replaces
              scattered spreadsheets, chats and to-do apps with a single place where work is
              planned, assigned and tracked from start to finish.
            </p>
            <ul className="how__benefits">
              {BENEFITS.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <dl className="how__stats reveal">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <SectionHeader
          eyebrow="How It Works"
          title="Get your team moving in three simple steps"
        />

        <ol className="steps">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="step reveal" style={{ '--delay': `${index * 120}ms` }}>
              <span className="step__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="step__icon">
                <Icon size={26} aria-hidden="true" />
              </span>
              <h3>
                <span className="visually-hidden">Step {index + 1}: </span>
                {title}
              </h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
