 export function getYear(date) {
  if (!date) {
    return 'no data';
  }
  const dateRelease = new Date(date);
  return dateRelease.getFullYear();
}
