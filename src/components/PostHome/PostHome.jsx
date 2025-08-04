import "./posthome.scss";
export function PostHome({ input, setInput, handleAdd }) {
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
