import React, { MouseEvent } from "react";

interface ThemeContextInteface {
    isOpen: boolean;
    toggle?: (e: MouseEvent) => void;
    toggleFavorites?: (e: MouseEvent, details: any) => void;
    favorites: any;
    isFavorite: (id: number) => boolean;
    deleteFavorites?: (e: MouseEvent) => void;
}

export const ThemeContext = React.createContext<ThemeContextInteface>({
    isOpen: false,
    favorites: null,
    isFavorite: () => false
});
