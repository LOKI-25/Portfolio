// queries/getProfileBanner.ts
import datoCMSClient from './datoCMSClient';

const GET_PROFILE_BANNER = `
 {
  profilebanner {
   
    headline
    resume {
      url
    }
    linkedinlink
    profilesummary
  }
}
`;

export async function getProfileBanner() {
  const data = await datoCMSClient.request(GET_PROFILE_BANNER);
  console.log("🚀 ~ getProfileBanner ~ data:", data)
  return data.profilebanner;
}
