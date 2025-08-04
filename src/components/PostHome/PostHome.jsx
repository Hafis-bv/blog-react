import "./style.scss";
export function PostHome({ input, setInput, handleAdd }) {
  return (
    <form onSubmit={handleAdd} className="form">
      <input
        placeholder="Enter your post"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
