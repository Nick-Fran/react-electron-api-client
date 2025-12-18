// src/api/api.ts
export async function fetchApi(url: string): Promise<any> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch url ' + url);
  }

  return response.json();
}
