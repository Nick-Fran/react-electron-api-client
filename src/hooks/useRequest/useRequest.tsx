import { useQuery, useMutation } from '@tanstack/react-query';
import { HttpMethod } from '../../types/http';
import { httpRequest } from './httpRequest';

interface UseRequestParams {
  method: HttpMethod;
  url: string;
  body?: unknown;
  enabled?: boolean;
}

export function useRequest<T>({
  method,
  url,
  body,
  enabled = false,
}: UseRequestParams) {
  const isGet = method === 'GET';

  const query = useQuery({
    queryKey: [method, url, body],
    queryFn: () => httpRequest<T>(method, url),
    enabled: isGet && enabled,
  });

  const mutation = useMutation({
    mutationFn: () => httpRequest<T>(method, url, body),
  });

  return {
    data: isGet ? query.data : mutation.data,
    error: isGet ? query.error : mutation.error,
    isLoading: isGet ? query.isLoading : mutation.isPending,
    isError: isGet ? query.isError : mutation.isError,
    execute: () => (isGet ? query.refetch() : mutation.mutate()),
  };
}
