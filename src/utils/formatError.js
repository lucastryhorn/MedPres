export default function formatError(error, status) {
  if (!status) {
    return 'Servidor com problemas!';
  }

  if (status === 504) {
    return 'Timeout.';
  }

  if (status >= 500) {
    return 'Servidor com problemas!';
  }

  if (status === 404) {
    return 'Não encontramos o que você procura.';
  }

  return error.response?.message || 'Error';
}
