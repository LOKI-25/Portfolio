// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    case 'localhost':
      return '36f5d415afdc52c14c3f229f8e660c';
    case 'portfolio-five-henna-63.vercel.app':
      return '36f5d415afdc52c14c3f229f8e660c';

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
