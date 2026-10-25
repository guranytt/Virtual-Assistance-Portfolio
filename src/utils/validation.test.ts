import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm } from './validation';

test('validateContactForm rejects invalid submissions', () => {
  const emptyRes = validateContactForm({
    name: '',
    email: 'not-an-email',
    service: '',
    message: 'hi',
  });
  assert.equal(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.name);
  assert.ok(emptyRes.errors.email);
  assert.ok(emptyRes.errors.service);
  assert.ok(emptyRes.errors.message);
});

test('validateContactForm blocks bot honeypots', () => {
  const botRes = validateContactForm({
    name: 'Bot User',
    email: 'bot@example.com',
    service: 'Data entry',
    message: 'I am a human offering services',
    honeypot: 'spam-bot-value',
  });
  assert.equal(botRes.isValid, false);
  assert.ok(botRes.errors.honeypot);
});

test('validateContactForm accepts clean client submission', () => {
  const goodRes = validateContactForm({
    name: 'Sarah Jenkins',
    email: 'sarah@startup.co',
    service: 'Inbox and calendar',
    message: 'Need help managing founder email and calendar starting next Monday.',
  });
  assert.equal(goodRes.isValid, true);
  assert.equal(Object.keys(goodRes.errors).length, 0);
});
