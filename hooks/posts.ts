import { usePostsQuery } from "@/api/posts/use-posts";
import { useMemo } from "react";

export const usePosts = (id?: string) => {
  const { data: posts, isLoading } = usePostsQuery();

  const post = useMemo(
    () => (id ? posts?.find((post) => post.id === id) || null : null),
    [id, posts]
  );

  return {
    posts,
    post,
    isLoading,
  };
};
