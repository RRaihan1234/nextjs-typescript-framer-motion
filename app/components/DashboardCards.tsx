import useFetch from "@/app/components/customHooks/useFetch";
import SingleDashboardCard from "@/app/components/SingleDashboardCard";

export default async function DashboardCard() {
  let posts = await useFetch("https://jsonplaceholder.typicode.com/posts");
  let users = await useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="flex justify-center">
           <SingleDashboardCard posts={posts}/>
           <SingleDashboardCard users={users}/>
    </div>
  );
}
