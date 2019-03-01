import React from 'react';
import {ToastContainer} from "react-toastify";
import MobileNav from '../containers/layouts/navs/MobileNav';
import NetworkDictator from '../hoc/networkDictator'
const App = ({children}) => {

  return (
    <div>
    <MobileNav />
    <ToastContainer />
        {children}
    </div>
  )
}

export default App