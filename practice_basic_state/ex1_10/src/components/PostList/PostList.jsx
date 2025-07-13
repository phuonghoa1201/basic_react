import PostItem from "../PostItem/PostItem.jsx";
import './PostList.css'

function PostList({posts}){
    return(
        <div className="postList">
        {posts.map(post => (
            <PostItem key={post.id}
                title={post.title}
                thumbnail={post.thumbnail}
                content={post.content}
                author={post.author}
             /> 
        ))}
        </div>
    );
}
export default PostList;
