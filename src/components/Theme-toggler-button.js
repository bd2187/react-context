import React from "react";
import { ThemeContext } from "../contexts/theme-context";

function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {function({ theme, toggleTheme }) {
                return (
                    <button
                        onClick={toggleTheme}
                        style={{
                            backgroundColor: theme.background,
                            color: theme.foreground
                        }}
                    >
                        ToggleTheme
                    </button>
                );
            }}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;
