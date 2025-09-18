
import useFetch from "@/app/components/customHooks/useFetch";
import PostCard from "@/app/components/PostCard";

export default async function SinglePostDetails({params} : {params: { id: string }}) {
  let dynamicId = await params;
  let id = dynamicId.id;
  let posts = await useFetch('https://jsonplaceholder.typicode.com/posts');
  
  let currentPost = posts.filter((post : {id : string})=>{
      return post.id == id;
  })

  return (
       <div className="">
           <PostCard 
              userId={currentPost[0].userId}
              id={currentPost[0].id}
              body={currentPost[0].body}
              title={currentPost[0].title}
            />
      </div>
   
  );
}