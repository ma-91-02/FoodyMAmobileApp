import { createContext, useReducer } from "react";

export const qContext = createContext({
  setQ: (exp) => {},
});
