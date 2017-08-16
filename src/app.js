import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import "./main.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import dungeonGame from "./reducers";

import Root from "./components/Root";

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById("root")
    );
};

render(Root);

if (module.hot) {
    module.hot.accept("./components/Root", () => {
        render(Root);
    });
}
