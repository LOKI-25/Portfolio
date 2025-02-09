// queries/getProjects.ts
import datoCMSClient from './datoCMSClient';

const GET_PROJECTS = `
  query {
    project{
    allprojects
  }
  }
`;

export async function getProjects() {
  const data = await datoCMSClient.request(GET_PROJECTS);
  return data.project.allprojects;
}
