import { getSortedPosts } from "@/utils/content-utils";
import { CachePosts } from "@/store";

export async function getCachePosts() {
    CachePosts.set(await getSortedPosts());
    return CachePosts;
}