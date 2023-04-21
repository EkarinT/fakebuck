function PostHeader() {
  return (
    <div className="d-flex align-items-center gap-2">
      <a href="/#">
        <img
          src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
          className="rounded-circle"
          width="40"
          height="40"
          alt="user"
        />
      </a>
      <div className="d-flex flex-column flex-fill">
        <a
          href="/#"
          className="text-dark fw-bold no-underline hover-underline text-3.5"
        >
          Hsiao Li
        </a>
        <small className="text-muted text-3">2m</small>
      </div>
      <div className="dropdown">
        <button
          className="btn rounded-circle position-relative h-9 w-9 hover-bg-gray-200"
          data-bs-toggle="dropdown"
        >
          <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
        </button>
        <div className="dropdown-menu end-0 mt-1">
          <button className="dropdown-item">Edit</button>
          <button className="dropdown-item">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
