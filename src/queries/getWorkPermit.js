// queries/getWorkPermit.ts
import datoCMSClient from './datoCMSClient';

const GET_WORK_PERMIT = `
  query {
    workpermit {
      visastatus
      expirydate
      summary
      additionalinfo
    }
  }
`;

export async function getWorkPermit() {
  const data = await datoCMSClient.request(GET_WORK_PERMIT);
  return data.workpermit;
}
