import { Children, cloneElement } from 'react';
import { AlertCircle } from 'lucide-react';

// Wraps one input/select/textarea with its label, optional hint and error
// message, and wires up the accessibility attributes (id, aria-invalid,
// aria-describedby) so screen readers announce the error with the field.
export default function FormField({ label, name, required = false, hint, error, children }) {
  const inputId = `field-${name}`;
  const errorId = `${inputId}-error`;

  const control = cloneElement(Children.only(children), {
    id: inputId,
    name,
    required,
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': error ? errorId : undefined,
  });

  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label htmlFor={inputId}>
        {label}
        {required && (
          <span className="field__required" aria-hidden="true">
            {' '}
            *
          </span>
        )}
        {hint && <span className="field__hint"> ({hint})</span>}
      </label>
      {control}
      {error && (
        <p id={errorId} className="field__error" role="alert">
          <AlertCircle size={15} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
