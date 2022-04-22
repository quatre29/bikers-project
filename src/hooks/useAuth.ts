import { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setAuthUser } from "../store/auth/authSlice";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import { useLazyGetMeQuery } from "../services/authApi";
import { User } from "../models/user.model";

export const useAuth = () => {
  const dispatch = useDispatch();
  const user: User | null = useSelector(selectCurrentUser);
  const [trigger, result] = useLazyGetMeQuery();

  console.log(result, "*******");
  useEffect(() => {
    if (!user) {
      trigger().then((res) => {
        console.log(result, "===========");
        dispatch(setAuthUser(res.data?.data.user!));

        // setUser(res.data?.data.user!);
      });
    }
  }, [dispatch, trigger, user]);

  return useMemo(
    () => ({
      // user: data?.data.user,
      // isLoading,
      result,
      user,
    }),
    [user, result]
  );
};
