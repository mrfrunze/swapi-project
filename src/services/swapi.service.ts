import { http } from "./http";
import type { PaginatedResponse } from "../types/api";
import type { ListQuery } from "../types/query";
import type { ResourceType } from "../types/resources";


type ApiListResponse<T> = {
  current_page: number;
  data: T[];
  last_page: number;
  per_page: number;
  total: number;
  next_page_url: string | null;
  prev_page_url: string | null;
};

export async function getList<T>(
  resource: ResourceType,
  params: ListQuery
): Promise<PaginatedResponse<T>> {
  const { data } = await http.get<ApiListResponse<T>>(`/${resource}/`, {
    params,
  });

  return {
    count: data.total,
    next: data.next_page_url,
    previous: data.prev_page_url,
    results: data.data,
  };
}

export async function getById<T>(
  resource: ResourceType,
  id: string
): Promise<T> {
  const { data } = await http.get<T>(`/${resource}/${id}/`);
  return data;
}