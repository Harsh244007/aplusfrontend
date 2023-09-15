import React, { useEffect, useState } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

const CustomSwitch = ({ children }) => {
  const [progress, setProgress] = useState(true);
  const location = useLocation();
  let firstTimeDelay = true;
  function progressOff(delay = 4000) {
    return Promise.resolve(setTimeout(() => setProgress(false), delay));
  }
  useEffect(() => {
    setProgress(e => (e !== true ? !e : e));
    progressOff(firstTimeDelay === true ? 4000 : 2000);
    if (firstTimeDelay === true) firstTimeDelay = false;
  }, [location.pathname]);

  return (
    <>
      {progress === true && <TopBarProgress />}
      <Routes>{children}</Routes>
    </>
  );
};
export default CustomSwitch;
