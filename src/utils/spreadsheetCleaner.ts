/**
 * Pure data transformation and validation utilities for Great Iniobong VA Portfolio
 */

/**
 * Standardize text to Title Case (handles Nigerian compound names and standard words)
 */
export function toTitleCase(str: string): string {
  if (!str) return '';
  return str
    .trim()
    .toLowerCase()
    .split(/[\s-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Standardize Nigerian phone numbers to standard format "+234 XXX XXX XXXX"
 * Handles formats like:
 * - "08031234567"
 * - "+2348031234567"
 * - "234-803-123-4567"
 * - "0803 123 4567"
 */
export function normalizeNigerianPhone(phone: string): string {
  if (!phone) return 'Missing Phone';
  // Strip all non-digit characters except leading plus
  const digitsOnly = phone.replace(/\D/g, '');

  let nationalNumber = digitsOnly;
  if (digitsOnly.startsWith('234') && digitsOnly.length === 13) {
    nationalNumber = '0' + digitsOnly.slice(3);
  } else if (digitsOnly.length === 10 && !digitsOnly.startsWith('0')) {
    nationalNumber = '0' + digitsOnly;
  }

  if (nationalNumber.length !== 11 || !nationalNumber.startsWith('0')) {
    return phone.trim(); // Return original if invalid length for manual review
  }

  // Format: +234 803 123 4567
  const prefix = nationalNumber.slice(1, 4);
  const part1 = nationalNumber.slice(4, 7);
  const part2 = nationalNumber.slice(7);

  return `+234 ${prefix} ${part1} ${part2}`;
}

export interface RawContact {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  category: string;
}

export interface CleanedContact extends RawContact {
  isDuplicate?: boolean;
  notes?: string;
}

/**
 * Audit and deduplicate contact records
 */
export function auditAndCleanContacts(rawList: RawContact[]): {
  cleaned: CleanedContact[];
  duplicateCount: number;
  normalizedCount: number;
  fixedNameCount: number;
} {
  const seenEmails = new Set<string>();
  const cleaned: CleanedContact[] = [];
  let duplicateCount = 0;
  let normalizedCount = 0;
  let fixedNameCount = 0;

  for (const contact of rawList) {
    const rawEmail = contact.email.trim().toLowerCase();
    const formattedName = toTitleCase(contact.fullName);
    const normalizedPhone = normalizeNigerianPhone(contact.phone);

    if (formattedName !== contact.fullName) {
      fixedNameCount++;
    }
    if (normalizedPhone !== contact.phone) {
      normalizedCount++;
    }

    if (rawEmail && seenEmails.has(rawEmail)) {
      duplicateCount++;
      // Skip duplicate from final verified cleaned list
      continue;
    }

    if (rawEmail) {
      seenEmails.add(rawEmail);
    }

    cleaned.push({
      ...contact,
      fullName: formattedName,
      email: rawEmail,
      phone: normalizedPhone,
      city: toTitleCase(contact.city),
      category: contact.category.trim(),
    });
  }

  return {
    cleaned,
    duplicateCount,
    normalizedCount,
    fixedNameCount,
  };
}
