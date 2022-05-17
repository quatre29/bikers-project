import React, { useEffect } from "react";
import UserProfileContent from "../UserProfileContent";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useGetUserByIdQuery } from "../../services/userApi";
import LoadingSpinner from "../../components/LoadingSpinner";

const UserProfile: React.FC = () => {
  const { user_id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data, isLoading: isGetUserLoading } = useGetUserByIdQuery(user_id!);

  const userProfile = data?.data.user;

  useEffect(() => {
    if (user_id === user?.user_id) {
      navigate("/my-profile", { replace: true });
    }
  }, [user_id, user]);

  useEffect(() => {
    if (data === undefined && !isGetUserLoading) {
      navigate("/404", { replace: true });
    }
  }, [data, isGetUserLoading]);

  return (
    <>
      {data && !isGetUserLoading ? (
        <UserProfileContent user={userProfile!} />
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default UserProfile;
