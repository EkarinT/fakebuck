import { useRef, useState } from 'react';
import AddPhotoButton from './AddPhotoButton';
import { toast } from 'react-toastify';
import { useLoading } from '../../context/LoadingContext';
import { useAuth } from '../../context/authContext';

function PostForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const fileEl = useRef();

  const {
    user: { firstName }
  } = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (!title && !image) {
        return toast.error('title or image is required.');
      }

      if (title) {
        formData.append('title', title);
      }

      if (image) {
        formData.append('image', image);
      }
      startLoading();
      await onSubmit(formData);
      setTitle('');
      setImage(null);
      toast.success('post created');
    } catch (err) {
      console.log(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="form-control border-0 shadow-none resize-none"
        placeholder={`What's on your mind, ${firstName}?`}
        rows="5"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div
        className="position-relative"
        role="button"
        onClick={() => fileEl.current.click()}
      >
        {image ? (
          <>
            <button
              type="button"
              className="btn-close position-absolute"
              style={{ top: 6, right: 6 }}
              onClick={e => {
                e.stopPropagation();
                setImage(null);
                fileEl.current.value = '';
              }}
            />
            <img
              src={URL.createObjectURL(image)}
              className="img-fluid"
              alt="post"
            />
          </>
        ) : (
          <AddPhotoButton />
        )}
      </div>
      <input
        type="file"
        className="d-none"
        ref={fileEl}
        onChange={e => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
      />
      <div className="pt-3">
        <button className="btn btn-primary w-100 fw-bold text-3.5 h-9">
          Post
        </button>
      </div>
    </form>
  );
}

export default PostForm;
