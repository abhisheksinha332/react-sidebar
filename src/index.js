import React from "react";
import ReactDOM from "react-dom";
import Body from "./component/Body/Body";
import Sidebar from "./component/Sidebar/Sidebar";

import './Global.scss';
import  * as s from './App.styles';

const App = () => {

    const backgroundImage = 'images/image.jpg'
    const sidebarHeader = "Lets Travel";
    const menuItem =[
        {name:'Home', to:'/', icon:'icons/home.svg',subMenuItem:[]},
        {name:'About', to:'/about', icon:'icons/about.svg',subMenuItem:[]},
        {name:'Destinations', to:'/destinations', icon:'icons/destination.svg',subMenuItem:[
            {name:'Canada', to:'/canada'},
            {name:'Japan', to:'/japan'},
            {name:'Bhutan', to:'/bhutan'},
            {name:'Maxico', to:'/maxico'},
            {name:'Germany', to:'/germany'},
            {name:'India', to:'/india'},
        ]},
        {name:'Blog', to:'/blog', icon:'icons/blog.svg',subMenuItem:[]},
        {name:'Services', to:'/serices', icon:'icons/service.svg',subMenuItem:[]},
        {name:'Contacts', to:'/contacts', icon:'icons/contact.svg',subMenuItem:[]},
    ]
    ;
    return(
        <s.App>
            {/* <s.Header>Hello world</s.Header> */}
            <Sidebar backgroundImage={backgroundImage} sidebarHeader={sidebarHeader} menuItem={menuItem}  />
            <Body />
        </s.App>
    )
}
export default App

ReactDOM.render(<App />, document.getElementById('root'))
