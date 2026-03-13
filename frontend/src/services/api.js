const isDev = import.meta.env.DEV;
const API_URL = isDev ? 'http://localhost:5173/api' : '/api';

export async function fetchProjects() {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
}

export async function fetchProjectById(id) {
  const response = await fetch(`${API_URL}/projects/${id}`);
  if (!response.ok) throw new Error('Failed to fetch project');
  return response.json();
}
