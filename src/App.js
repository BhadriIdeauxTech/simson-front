import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Routers from './Routes';

import GlobalStyle from './Theme/GlobalStyle';
import { useSelector } from 'react-redux';



const App = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // const token = useSelector((state)=>state?.admin?.admin)
  const token = useSelector((state)=>state?.admin?.admin);

  console.log(token,'kkkkkkkkkk')

  return (
    <Fragment>
      <GlobalStyle />
      <Routers token={token} />
      <ToastContainer />
    </Fragment>
  )
}

export default App;