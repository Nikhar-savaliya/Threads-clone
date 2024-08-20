"use client";

import Post from "@/components/posts/Post";
import { PostData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

export default function ForYouFeed() {
  const query = useQuery<PostData[]>({
    queryKey: ["post-feed", "for-you"],
    queryFn: async () => {
      const res = await fetch("/api/posts/for-you");
      if (!res.ok) {
        throw Error(`Request failed with status code ${res.status}`);
      }
      return res.json();
    },
  });

  if (query.status == "pending") {
    return <Loader className="mx-auto animate-spin" />;
  }

  if (query.status == "error") {
    return (
      <p className="text-center text-muted-foreground">
        Oops! Try again later.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {query.data.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
