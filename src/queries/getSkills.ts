// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { Skill } from '../types';

const GET_SKILLS = `

  {
  allskill{
    skills
}
    
  
  

}
`;

export async function getSkills(): Promise<Skill[]> {
  const data = await datoCMSClient.request<{ allskill: Skill[] }>(GET_SKILLS);
  return data.allskill.skills.skills;
}
