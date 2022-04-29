import { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setAuthUser } from "../store/auth/authSlice";
import { useLazyGetMeQuery } from "../services/authApi";
import { User } from "../models/user.model";

export const useAuth = () => {
  const dispatch = useDispatch();
  const user: User | null = useSelector(selectCurrentUser);

  const [trigger] = useLazyGetMeQuery();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      trigger().then((res) => {
        dispatch(setAuthUser(res.data?.data.user!));
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [dispatch, trigger, user]);

  return useMemo(
    () => ({
      isLoading,
      user,
    }),
    [user, isLoading]
  );
};
