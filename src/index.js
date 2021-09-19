import React from "react";
import ReactDOM from "react-dom";
import Body from "./component/Body/Body";
import Sidebar from "./component/Sidebar/Sidebar";

import './Global.scss';
import  * as s from './App.styles';

const App = () => {
    return(
        <s.App>
            {/* <s.Header>Hello world</s.Header> */}
            <Sidebar />
            <Body />
        </s.App>
    )
}
export default App

ReactDOM.render(<App />, document.getElementById('root'))
