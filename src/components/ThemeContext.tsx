import React, { MouseEvent } from "react";

export const ThemeContext = React.createContext({
    isOpen: false,
    toggle: (e: MouseEvent) => { }
});
