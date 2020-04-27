export function formatCPF(value) {
  return value?.getRawValue();
}

export function maskCPF(value) {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}
