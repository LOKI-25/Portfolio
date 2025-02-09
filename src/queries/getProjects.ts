// queries/getProjects.ts
import datoCMSClient from './datoCMSClient';
import { Project } from '../types';

const GET_PROJECTS = `
  query {
    project{
    allprojects
  }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
  return data.project.allprojects;
}
