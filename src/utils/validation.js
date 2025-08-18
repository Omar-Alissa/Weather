export function isValidCity(value) {
  return /^[A-Za-zÅÄÖåäö\s-]+$/.test(value.trim());
}