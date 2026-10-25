import test from 'node:test';
import assert from 'node:assert/strict';
import {
  toTitleCase,
  normalizeNigerianPhone,
  auditAndCleanContacts,
  RawContact
} from './spreadsheetCleaner';

test('toTitleCase formats lowercase, uppercase, and hyphenated names', () => {
  assert.equal(toTitleCase('GREAT INIOBONG'), 'Great Iniobong');
  assert.equal(toTitleCase('babatunde oluwole'), 'Babatunde Oluwole');
  assert.equal(toTitleCase('  ibrahim-musa '), 'Ibrahim Musa');
});

test('normalizeNigerianPhone converts various representations to standard +234 format', () => {
  // 11-digit local format
  assert.equal(normalizeNigerianPhone('08031234567'), '+234 803 123 4567');
  // With international code
  assert.equal(normalizeNigerianPhone('2348031234567'), '+234 803 123 4567');
  assert.equal(normalizeNigerianPhone('+234-803-123-4567'), '+234 803 123 4567');
  // Missing or short
  assert.equal(normalizeNigerianPhone(''), 'Missing Phone');
});

test('auditAndCleanContacts deduplicates emails and formats records', () => {
  const mockContacts: RawContact[] = [
    {
      id: 1,
      fullName: 'babatunde adeyemi',
      email: 'babatunde@example.com',
      phone: '08031234567',
      city: 'ibadan',
      category: 'VIP Client',
    },
    {
      id: 2,
      fullName: 'Babatunde Adeyemi Duplicate',
      email: 'BABATUNDE@EXAMPLE.COM',
      phone: '08031234567',
      city: 'Ibadan',
      category: 'VIP Client',
    },
    {
      id: 3,
      fullName: 'chioma okonkwo',
      email: 'chioma@example.com',
      phone: '+2348029876543',
      city: 'lagos',
      category: 'Standard',
    },
  ];

  const result = auditAndCleanContacts(mockContacts);
  assert.equal(result.duplicateCount, 1);
  assert.equal(result.cleaned.length, 2);
  assert.equal(result.cleaned[0].fullName, 'Babatunde Adeyemi');
  assert.equal(result.cleaned[0].city, 'Ibadan');
  assert.equal(result.cleaned[1].fullName, 'Chioma Okonkwo');
});
