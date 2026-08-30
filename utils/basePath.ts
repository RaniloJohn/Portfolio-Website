export const getImagePath = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const basePath = '/Portfolio-Website';
  if (path.startsWith(basePath)) return path;
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
};
