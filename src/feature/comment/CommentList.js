import Comment from './Comment';
function CommentList({ posts: { Comments: comments } }) {
  return (
    <>
      {/* <div className="pt-1">
        <small className="text-muted hover-underline" role="button">
          View 5 previous comments
        </small>
      </div> */}
      {comments.map(item => {
        <Comment key={item.id} comments={item} />;
      })}
    </>
  );
}

export default CommentList;
