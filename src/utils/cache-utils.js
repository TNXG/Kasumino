import { getSortedPosts, getSortedPages } from "@/utils/content-utils";
import { CachePosts, CachePages } from "@/store";

export async function getCachePosts() {
    CachePosts.set(await getSortedPosts());
    return CachePosts;
}

export async function getCachePages() {
    CachePages.set(await getSortedPages());
    return CachePages;
}