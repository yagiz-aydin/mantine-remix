import { createContext, useContext } from "react";
const StylesContext = createContext(null);
export const StylesProvider = StylesContext.Provider;
export const useStyles = () => useContext(StylesContext);
