import React from "react";
import LanguageContext from "../contexts/LanguageContext";

// Sets the default language to english
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
    static contextType = LanguageContext;
    
    state = { language: "english "};

    onLanguageChange = ( language ) => {
        this.setState ({ language });
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }} >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;