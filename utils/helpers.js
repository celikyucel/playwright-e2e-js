/**
 * Very simple helper that masks a password (for logging purposes).
 * @param {string} password
 * @returns {string}
 */
export function maskPassword(password) {
  if (!password) return '';
  const visiblePart = password.slice(0, 2);
  const masked = '*'.repeat(Math.max(password.length - 2, 0));
  return visiblePart + masked;
}

/**
 * Convert a string to Title Case.
 * @param {string} text
 * @returns {string}
 */
export function toTitleCase(text) {
  return text
    .split(' ')
    .filter(Boolean)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
