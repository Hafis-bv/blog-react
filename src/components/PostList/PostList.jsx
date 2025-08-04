import "./style.scss";
import { IoCloseSharp } from "react-icons/io5";

const PostList = ({ posts, handleDelete }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <button onClick={() => handleDelete(post.id)}>
            <IoCloseSharp color="white" size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
