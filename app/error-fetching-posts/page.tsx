import useFetch from "@/app/components/customHooks/useFetch";
import PostCard from "@/app/components/PostCard";
import Link from "next/link";

export default async function Post() {
  await useFetch("https://jsonplaceholder.typicode.com/invalid-posts");
  
  return (
    <div>
        <div>
           <Link href="/error-fetching-posts">Observe the Fetch Error</Link>
        </div>
    </div>
  );
}
