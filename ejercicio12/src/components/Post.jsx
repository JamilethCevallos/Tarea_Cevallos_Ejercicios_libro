// src/components/Post.jsx
const Post = ({ postTitle, author, children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '8px' }}>
      <h2>{postTitle}</h2>
      <p><em>Por: {author}</em></p>
      <div>{children}</div>
    </div>
  );
};

export default Post;