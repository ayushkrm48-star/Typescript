// now we will learn how to use axios in typescript
import axios from "axios";
import type {AxiosResponse} from "axios"

interface User{
    id : number,
    firstName : string,
    lastName : string,
    age : number,
    gender : string,
    email : string,
    phone : string
    imageUrl : string
}

async function getUserDetails (id : number) : Promise<User> {
    const response : AxiosResponse<User> = await axios.get(`https://dummyjson.com/users/${id}`);
    return response.data;
}

const user = await getUserDetails(2);

console.log(user.phone);


