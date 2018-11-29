import React, { Component } from "react";
import { ThemeContext, themes } from "../contexts/theme-context";
import ThemedButton from "./Themed-button";
import ThemeTogglerButton from "./Theme-toggler-button";

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>
    );
}

class App extends Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }));
        };

        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <Content />
                </ThemeContext.Provider>
            </div>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}

export default App;
