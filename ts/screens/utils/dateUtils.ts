export const formatDate = (date: string) => {
  let dateString = date;
  if (!dateString.includes('T')) {
    dateString = date.replace(' ', 'T');
  }
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};
