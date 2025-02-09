// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';

const GET_TIMELINE = `
{
    timeline{
    alltimelines
  }
}
`;

export async function getTimeline() {
  const data = await datoCMSClient.request(GET_TIMELINE);
  return data.timeline.alltimelines;
}
