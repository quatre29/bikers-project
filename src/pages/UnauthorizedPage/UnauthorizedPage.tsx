import React from "react";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <section>
      <div>401: UnauthorizedPage</div>
      <button onClick={goBack}>Back</button>
    </section>
  );
};

export default UnauthorizedPage;
