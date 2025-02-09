// queries/getCertifications.ts
import datoCMSClient from './datoCMSClient';
import { Certification } from '../types';

const GET_CERTIFICATIONS = `
{
 
    certification{
    allcertifications
    
  }
}
  
`;

export async function getCertifications(): Promise<Certification[]> {
  const data = await datoCMSClient.request<{ allCertifications: Certification[] }>(GET_CERTIFICATIONS);
  return data.certification.allcertifications;
}
