// queries/getCertifications.ts
import datoCMSClient from './datoCMSClient';

const GET_CERTIFICATIONS = `
{
 
    certification{
    allcertifications
    
  }
}
  
`;

export async function getCertifications(){
  const data = await datoCMSClient.request(GET_CERTIFICATIONS);
  return data.certification.allcertifications;
}
