export function formatDate(value) {
  const day = value.split('/')[0];
  const monty = value.split('/')[1];
  const year = value.split('/')[2];

  return `${year}-${monty}-${day}`;
}
