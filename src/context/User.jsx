import { createContext, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let user = {
    name: "Maheen",
    email: "maheenzuhra@gmail.com",
    course: "web dev",
    role: "student",
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export default function UseUser() {
  return useContext(UserContext);
}
