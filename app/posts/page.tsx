import useFetch from "@/app/components/customHooks/useFetch";
import PostCard from "@/app/components/PostCard";
import Link from "next/link";
import Button from "@/app/components/Button";

export default async function Post() {
  let posts = await useFetch("https://jsonplaceholder.typicode.com/posts");
  
  interface Post {
    userId: string;
    id: string;
    title: string;
    body: string;
  }
  
  return (
    <div>
        <Button />
        <div className="flex flex-wrap justify-between">
                {
                    posts.map((post : Post, index : number) =>(
                        <PostCard 
                          key = {index}
                          index = {index}
                          post = {post}
                          userId=''
                          id=''
                          body={post.body}
                          title={post.title}
                        />
                    ))
                }
        </div>
    </div>
  );
}
