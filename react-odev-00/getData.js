//import axios library
import axios from "axios"

//function to fetch data
export async function fetchData(user_id) {
    // fetch user data
    const user = await axios('https://jsonplaceholder.typicode.com/users/' + user_id).then(res => res.data)
    // fetch user's posts
    const posts = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + user_id).then(res => res.data)
    // add the posts to the user object
    user.posts = posts;
    return user;
}
//export the function as the default export
export default fetchData;   