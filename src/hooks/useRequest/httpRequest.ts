import { HttpMethod } from "../../types/http";

// src/api/api.ts
export async function httpRequest<T>(
  method: HttpMethod,
  url: string,
  body?: any
): Promise<T> {
  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: method === 'GET' ? undefined : JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
