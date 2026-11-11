import { ArrowUp } from 'lucide-react';
import Logo from './Logo.jsx';
import { NAV_LINKS } from '../data/content.js';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo light />
          <p>Workflow and project management for teams that want to work smarter.</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="footer__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#home" className="footer__top">
          <ArrowUp size={16} aria-hidden="true" />
          Back to top
        </a>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} NexaFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}
