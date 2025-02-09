// queries/getContactMe.ts
import datoCMSClient from './datoCMSClient';

const GET_CONTACT_ME = `
  query {
    contactme {
      details
    }
  }
`;

export async function getContactMe() {
  const data = await datoCMSClient.request(GET_CONTACT_ME);
  return data.contactme.details;
}
