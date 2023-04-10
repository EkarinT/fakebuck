import { Outlet } from 'react-router-dom';
import Container from '../container/Container';
import Header from '../Header/Header';

function AuthLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default AuthLayout;
