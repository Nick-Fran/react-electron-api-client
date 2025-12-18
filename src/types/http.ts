export const METHODS = ['GET', 'POST', 'PUT', 'DELETE'] as const;
export type HttpMethod = (typeof METHODS)[number];