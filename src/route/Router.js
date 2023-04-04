import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import { useAuth } from '../context/authContext';
import PostPage from '../pages/PostPage';

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<PostPage />} />
        </>
      ) : (
        <Route path="/" element={<LoginPage />} />
      )}
    </Routes>
  );
}

export default Router;
