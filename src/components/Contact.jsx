import { useEffect, useRef, useState } from 'react';
import { CalendarCheck, CheckCircle2, Clock, Info, Loader2, Send, UserRound } from 'lucide-react';
import FormField from './FormField.jsx';
import { PLAN_OPTIONS } from '../data/content.js';
import '../styles/contact.css';

const EMPTY_FORM = { name: '', email: '', company: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const PERKS = [
  { icon: CalendarCheck, text: '30-minute walkthrough tailored to your workflow' },
  { icon: UserRound, text: 'A dedicated onboarding specialist for your team' },
  { icon: Clock, text: 'We reply within one business day' },
];

// Returns an object of error messages. An empty object means the form is valid.
function validate(values) {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = 'Please enter your full name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address, e.g. name@company.com.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us a little about your team.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

export default function Contact({ selectedPlan, onPlanChange }) {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [submittedName, setSubmittedName] = useState('');
  const successRef = useRef(null);

  // After a successful submit, move focus to the confirmation so keyboard and
  // screen-reader users know what happened.
  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    // Re-check a field live once the user has already left it once.
    if (touched[name]) setErrors(validate(nextValues));
  };

  const handleBlur = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
    setErrors(validate(values));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the browser from reloading the page
    const formErrors = validate(values);
    setErrors(formErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(formErrors).length > 0) {
      // Move keyboard focus to the first field that needs fixing.
      const firstInvalid = Object.keys(formErrors)[0];
      document.getElementById(`field-${firstInvalid}`)?.focus();
      return;
    }

    // No backend: simulate a short network request, then show the success state.
    setStatus('submitting');
    setTimeout(() => {
      setSubmittedName(values.name.trim().split(' ')[0]);
      setStatus('success');
      setValues(EMPTY_FORM);
      setTouched({});
      onPlanChange('');
    }, 900);
  };

  // Only show an error after the field was touched (or the form was submitted).
  const errorFor = (field) => (touched[field] ? errors[field] : undefined);

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro reveal">
          <p className="eyebrow">Request a Demo</p>
          <h2 id="contact-title">See NexaFlow in action</h2>
          <p>
            Book a personal demo and learn how NexaFlow can organise your projects, align your team
            and give you clear insight into your work.
          </p>
          <ul className="contact__perks">
            {PERKS.map(({ icon: Icon, text }) => (
              <li key={text}>
                <span>
                  <Icon size={20} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact__card reveal">
          {status === 'success' ? (
            <div className="contact__success" role="status" tabIndex={-1} ref={successRef}>
              <CheckCircle2 size={56} aria-hidden="true" />
              <h3>Thanks, {submittedName}! Your demo request is complete.</h3>
              <p>
                Your details passed validation and the request was completed successfully.
              </p>
              <p className="contact__demo-note">
                <Info size={18} aria-hidden="true" />
                <span>
                  This is a frontend demonstration. No data was sent to a server or stored
                  anywhere.
                </span>
              </p>
              <button type="button" className="btn btn--secondary" onClick={() => setStatus('idle')}>
                Send another request
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <p className="contact__required-note">
                Fields marked <span aria-hidden="true">*</span>
                <span className="visually-hidden">with an asterisk</span> are required.
              </p>

              <div className="contact__row">
                <FormField label="Full name" name="name" required error={errorFor('name')}>
                  <input
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Cooper"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormField>

                <FormField label="Email address" name="email" required error={errorFor('email')}>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormField>
              </div>

              <div className="contact__row">
                <FormField label="Company name" name="company" hint="Optional">
                  <input
                    type="text"
                    autoComplete="organization"
                    placeholder="Acme Inc."
                    value={values.company}
                    onChange={handleChange}
                  />
                </FormField>

                <FormField label="Plan of interest" name="plan" hint="Optional">
                  <select value={selectedPlan} onChange={(e) => onPlanChange(e.target.value)}>
                    {PLAN_OPTIONS.map(({ value, label }) => (
                      <option key={label} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <FormField label="Message" name="message" required error={errorFor('message')}>
                <textarea
                  rows="5"
                  placeholder="Tell us about your team and what you'd like to see in the demo."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormField>

              <button
                type="submit"
                className="btn btn--primary btn--lg btn--block"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="spin" aria-hidden="true" /> Sending request…
                  </>
                ) : (
                  <>
                    Request a Demo <Send size={18} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
