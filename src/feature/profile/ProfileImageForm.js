import { useRef, useState } from 'react';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../context/authContext';
import { useLoading } from '../../context/LoadingContext';
import { toast } from 'react-toastify';

function ProfileImageForm({ onSuccess }) {
  const {
    user: { profileImage },
    updateUser
  } = useAuth();

  const { startLoading, stopLoading } = useLoading();

  const inputEl = useRef();

  const [file, setFile] = useState(null);

  const handleClickSave = async () => {
    try {
      startLoading();
      const formData = new FormData();
      formData.append('profileImage', file);
      await updateUser(formData);
      toast.success('success upload');
      setFile(null);
      onSuccess();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Profile Picture</h5>
        <input
          type="file"
          className="d-none"
          ref={inputEl}
          onChange={e => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div>
          {file && (
            <>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={handleClickSave}
              >
                Save
              </button>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = null;
                }}
              >
                Cancel
              </button>
            </>
          )}
          <button
            className="btn btn-link text-decoration-none hover-bg-gray-100"
            onClick={() => inputEl.current.click()}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="text-center mt-3" onClick={() => inputEl.current.click()}>
        <Avatar
          src={file ? URL.createObjectURL(file) : profileImage}
          size="168"
        />
      </div>
    </>
  );
}

export default ProfileImageForm;
