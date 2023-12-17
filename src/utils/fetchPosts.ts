import apiURL from "@/api/baseURL";

export const fetchPosts = async () => {
  try {
    const res = await fetch(`${apiURL}/post`, { next: { revalidate: 600 } });
    return res.json();
  } catch (error) {
    console.error("An error occurs: ", error);
    return null;
  }
};
