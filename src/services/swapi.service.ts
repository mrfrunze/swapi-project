import { http } from "./http";
import type { PaginatedResponse } from "../types/api";
import type { ListQuery } from "../types/query";
import type { ResourceType } from "../types/resources";

export async function getList<T>(
  resource: ResourceType,
  params: ListQuery
): Promise<PaginatedResponse<T>> {
  const { data } = await http.get<PaginatedResponse<T>>(`/${resource}/`, {
    params,
  });
  return data;
}

export async function getById<T>(
  resource: ResourceType,
  id: string
): Promise<T> {
  const { data } = await http.get<T>(`/${resource}/${id}/`);
  return data;
}