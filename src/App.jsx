import { useState } from "react";
import { PostHome } from "./components/PostHome/PostHome";
import PostList from "./components/PostList/PostList";

export default function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  function handleAdd(e) {
    e.preventDefault();
    if (input.length > 4) {
      setPosts([...posts, { id: Date.now(), title: input }]);
      setInput("");
    } else {
      alert("Enter a name for a post");
    }
  }

  function handleDelete(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div className="app">
      <h1>Instagram</h1>
      <PostHome input={input} setInput={setInput} handleAdd={handleAdd} />
      {posts.length > 0 ? (
        <PostList posts={posts} handleDelete={handleDelete} />
      ) : (
        <h1>No posts...</h1>
      )}
    </div>
  );
}
