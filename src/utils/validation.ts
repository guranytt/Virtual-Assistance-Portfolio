/**
 * Form validation helper for Great Iniobong portfolio contact form
 */

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
  honeypot?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Check honeypot first
  if (data.honeypot && data.honeypot.trim() !== '') {
    errors.honeypot = 'Spam detected';
    return { isValid: false, errors };
  }

  // Name check
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  // Email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  // Service check
  const allowedServices = [
    'Inbox and calendar',
    'Data entry',
    'Customer support',
    'Research',
    'Something else',
  ];
  if (!data.service || !allowedServices.includes(data.service)) {
    errors.service = 'Please choose a service from the list.';
  }

  // Message check
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please share a few details about what you need (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
