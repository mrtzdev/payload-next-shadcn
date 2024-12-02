import { fetchCms } from "./fetchCms";

export const fetchHeader = async () => {
  const url = `/api/globals/header`;
  const data = await fetchCms(url);
  const header = data;

  return header;
};

export const fetchFooter = async () => {
  const url = `/api/globals/footer`;
  const data = await fetchCms(url);
  const footer = data;

  return footer;
};
