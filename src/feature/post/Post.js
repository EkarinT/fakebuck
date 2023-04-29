import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

function Post({ posts, toggleLike }) {
  return (
    <div className="border bg-white shadow-sm px-3 rounded-lg tw-pt-3">
      <PostHeader posts={posts} />
      <PostContent posts={posts} />
      <PostFooter posts={posts} toggleLike={toggleLike} />
    </div>
  );
}

export default Post;
