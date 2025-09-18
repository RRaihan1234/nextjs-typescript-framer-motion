export interface User {
    name: string;
    email: string;
    company: {
        name:string;
    },
    id?:number;
    username?:string;
    website?:string;
    phone?:string;
    address:{
        city:string;
        street:string;
    }
}