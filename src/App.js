import Spinner from './components/ui/Spinner';
import { useLoading } from './context/LoadingContext';
import Router from './route/Router';
import { ToastContainer } from 'react-toastify';

function App() {
  const { loading } = useLoading();

  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer autoClose="2500" theme="colored" />
    </>
  );
}

export default App;
