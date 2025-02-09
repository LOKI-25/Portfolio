// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';

const GET_SKILLS = `

  {
  allskill{
    skills
}
    
  
  

}
`;

export async function getSkills() {
  const data = await datoCMSClient.request(GET_SKILLS);
  return data.allskill.skills.skills;
}
