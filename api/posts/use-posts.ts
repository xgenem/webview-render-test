import { useQuery } from "@tanstack/react-query";
import type { Post } from "@/types/post";

export const usePostsQuery = () =>
  useQuery<Post[]>({
    initialData: [] as any,
    queryKey: ["posts"],
    queryFn: () => fetch("/data/posts").then((res) => res.json()),
  });
