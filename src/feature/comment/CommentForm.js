import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import Avatar from '../../components/ui/Avatar';
import { useEffect, useRef } from 'react';

function CommentForm() {
  const inputEl = useRef();

  const {
    user: { id, profileImage }
  } = useAuth();

  useEffect(() => {
    inputEl.current.focus();
  }, []);
  
  return (
    <div className="d-flex pt-1 gap-2">
      <Link to={`/profile/${id}`}>
        <Avatar src={profileImage} size="32" />
      </Link>
      <input
        ref={inputEl}
        className="form-control rounded-pill shadow-none border-0 h-9 text-3.5 bg-gray-200 focus-bg-gray-200"
        placeholder="Write a comment..."
      />
    </div>
  );
}

export default CommentForm;
