import CommentForm from './CommentForm';
import CommentList from './CommentList';

function CommentContainer({ posts }) {
  return (
    <div className="pb-2">
      <hr className="my-0 hr-sm" />
      <CommentList posts={posts} />
      <CommentForm />
    </div>
  );
}

export default CommentContainer;
