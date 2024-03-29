import coverImage from '../../assets/images/bg2.jpg';

function CoverImage({ src }) {
  return (
    <img
      src={src || coverImage}
      alt="cover"
      className="img-fluid position-absolute top-50 start-50 translate-middle"
    />
  );
}

export default CoverImage;
