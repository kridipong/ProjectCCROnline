import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogIn: (user, password) => {},
});
