import { Link } from 'react-router-dom';
import Avatar from './Avatar';

function AvatarGroup({
  data = [],
  size = 16,
  borderSize,
  borderColor,
  maxAvatar = 8
}) {
  return (
    <div>
      {data.slice(0, maxAvatar).map((item, index) => {
        return (
          <Link key={item.id} to={`/profile/${item.id}`}>
            <span className={index ? '-ms-2' : ''}>
              <Avatar
                src={item.profileImage}
                size={size}
                borderSize={borderSize}
                borderColor={borderColor}
              />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default AvatarGroup;
