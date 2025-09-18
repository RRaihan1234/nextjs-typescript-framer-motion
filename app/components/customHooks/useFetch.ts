

export default async function useFetch(url : string) {
       
        const result = await fetch(url);
    
        if (!result.ok) {
            throw new Error("Failed to load posts");
        }
    
        return result.json();
    }
    

