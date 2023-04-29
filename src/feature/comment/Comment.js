import { Link } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';
import { timeSince } from '../../utils/dateFormat';

function Comment({
  comments: {
    User: { id, firstName, lastName, profileImage },
    title,
    createdAt
  }
}) {
  return (
    <div className="pt-2 d-flex flex-column gap-1">
      <div className="d-flex gap-2">
        <Link to={`/profile/${id}`}>
          <Avatar src={profileImage} size="32" />
        </Link>

        <div className="d-flex flex-column">
          <div className="d-flex align-items-center gap-1">
            <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
              <Link
                to={`/profile/${id}`}
                className="text-dark fw-bold no-underline hover-underline text-3"
              >
                {firstName} {lastName}
              </Link>
              <small>{title}</small>
            </div>

            <div className="dropdown">
              <button className="btn rounded-circle position-relative h-8 w-8 hover-bg-gray-200">
                <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
              </button>
            </div>
          </div>

          <span className="text-muted ms-2 text-3">{timeSince(createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
