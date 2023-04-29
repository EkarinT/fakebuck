import Post from './Post';

function PostList({ posts, toggleLike }) {
  return (
    <div className="d-flex flex-column gap-3">
      {posts.map(item => (
        <Post key={item.id} posts={item} toggleLike={toggleLike} />
      ))}
    </div>
  );
}

export default PostList;
