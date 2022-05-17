import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoToTop: React.FC = () => {
  const routerPath = useLocation();

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTop();
  }, [routerPath]);

  return null;
};

export default GoToTop;
