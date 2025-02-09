// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  // Check if hostname is 'localhost' or ends with 'vercel.app'
  if (hostname === 'localhost' || hostname.endsWith('.vercel.app')) {
    return '36f5d415afdc52c14c3f229f8e660c';
  }

  // If the hostname doesn't match, throw an error
  throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
};
