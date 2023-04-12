import { useRef, useState } from 'react';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../context/authContext';

function ProfileImageForm() {
  const {
    user: { profileImage }
  } = useAuth();

  const inputEl = useRef();

  const [file, setFile] = useState(null);

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
              <button className="btn btn-link text-decoration-none hover-bg-gray-100">
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
      <div className="text-center mt-3">
        <Avatar
          src={file ? URL.createObjectURL(file) : profileImage}
          size="168"
        />
      </div>
    </>
  );
}

export default ProfileImageForm;
