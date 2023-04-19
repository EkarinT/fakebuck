import Avatar from '../../components/ui/Avatar';
import AvatarGroup from '../../components/ui/AvatarGroup';
import ProfileEdit from './ProfileEdit';

function ProfileInfo({
  isMe,
  user: { profileImage, firstName, lastName },
  friends,
  isFriend,
  isAnnonymous,
  isRequester,
  isAccepter
}) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch mx-auto px-3 space-x-4 max-w-266">
      <div className="-mt-20 -mt-md-10 z-10">
        <Avatar
          src={profileImage}
          size="168"
          borderSize="4"
          borderColor="white"
        />
      </div>

      <div className="my-3 flex-grow-1 d-flex flex-column align-items-center d-md-block">
        <h2 className="fw-bold mb-0">
          {firstName} {lastName}
        </h2>
        <span className="d-inline-block text-muted py-1">
          {friends.length} Friends
        </span>
        <AvatarGroup
          data={friends}
          size="32"
          borderSize="2"
          borderColor="white"
          maxAvatar="5"
        />
      </div>

      <div className="mb-3 align-self-md-end">
        {isMe && <ProfileEdit />}
        {isFriend && (
          <button className="btn btn-gray-200">
            <i className="fa-solid fa-user-xmark" /> Unfriend
          </button>
        )}
        {isAnnonymous && (
          <button className="btn btn-gray-200">
            <i className="fa-solid fa-user-plus" /> Add Friend
          </button>
        )}
        {isRequester && (
          <button className="btn btn-gray-200">
            <i className="fa-solid fa-user-xmark" /> Cancel Request
          </button>
        )}
        {isAccepter && (
          <>
            <button className="btn btn-gray-200">
              <i className="fa-solid fa-user-check" /> Accept
            </button>
            <button className="btn btn-gray-200 ms-3">
              <i className="fa-solid fa-user-xmark" /> Reject
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileInfo;