import { useState } from 'react';
import CommentContainer from '../comment/CommentContainer';
import PostAction from './PostAction';
import PostReaction from './PostReaction';

function PostFooter({ posts, toggleLike }) {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  return (
    <>
      <PostReaction
        posts={posts}
        toggleComment={() => setIsCommentOpen(!isCommentOpen)}
      />
      <hr className="hr-sm my-0" />
      <PostAction
        posts={posts}
        toggleLike={toggleLike}
        toggleComment={() => setIsCommentOpen(prev => !prev)}
      />
      {isCommentOpen && <CommentContainer posts={posts} />}
    </>
  );
}

export default PostFooter;
