export const searchFn = (data, state, target) => {
  const newQuery = state.replace(/[^a-zA-Z0-9]\s/g, '');
  if (target.hasOwnProperty('presentation')) {
    return data.filter(
      (item) => item[target.presentation].search(newQuery) >= 0,
    );
  }
};
