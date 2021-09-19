import React from 'react'
import * as s from './Sidebar.styles'

const Sidebar = ({backgroundImage, sidebarHeader, menuItem}) => {

    
    
    const item = menuItem.map((item,index)=>{
        return(
            <s.Item key={index}>{item.name}</s.Item>
        )
    })
    return (
        <s.SidebarContainer backgroundImage={backgroundImage}>
            <s.Header>{sidebarHeader}</s.Header>
            <s.menuItemContainer>
                {item}
            </s.menuItemContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
