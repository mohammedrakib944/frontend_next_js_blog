import apiURL from "@/api/baseURL";

export const fetchPosts = async () => {
  const res = await fetch(`${apiURL}/post`, { next: { revalidate: 600 } });

  if (!res.ok) {
    return null;
  }
  return res.json();
};
