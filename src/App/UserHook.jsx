import { useEffect } from "react";
import { useUserContext } from "./UserProvider";
import { setAuth } from "./api/api";

const UserHook = () => {
  const [user, setUser] = useUserContext();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setAuth(user.email, user.password);
    } else {
      const userAux = JSON.parse(localStorage.getItem("user"));
      if (userAux) {
        setAuth(userAux.email, userAux.password);
        setUser(userAux);
      }
    }
  }, [user]);

  return { user };
};

export default UserHook;
