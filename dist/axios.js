// now we will learn how to use axios in typescript
import axios from "axios";
async function getUserDetails(id) {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    return response.data;
}
const user = await getUserDetails(2);
console.log(user.phone);
//# sourceMappingURL=axios.js.map