import { use } from "react" ;
import PostSingle  from "./PostSingle";

export default function Post({postPromise}){

    const post = use(postPromise) ;
    console.log(post)

    return (
        <div className="card">
            <h2>All post are here: {post.length}</h2>
            {
                post.map(postSingle => <PostSingle postSingle={postSingle}></PostSingle> )
            }
        </div>
    )
}