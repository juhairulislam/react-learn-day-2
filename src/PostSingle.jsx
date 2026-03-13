export default function PostSingle({postSingle}){
    return(
        <div>
            <h5>{postSingle.title}</h5>
            <p>{postSingle.body}</p>
        </div>
    )
}