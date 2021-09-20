import React,{useState} from 'react'
import * as s from './Sidebar.styles'

const Sidebar = ({backgroundImage, sidebarHeader, menuItem}) => {

    const [selected, setSelected] = useState(menuItem[0].name )

    const clickHandler =(name) => {
        setSelected(name)
    }
    
    const item = menuItem.map((item,index)=>{
        const isItemSelected = selected === item.name;
        // console.log(`${item.name} selected? ${isItemSelected}`)
        return(
            <s.Item key={index} selected={isItemSelected} onClick={()=>clickHandler(item.name)}>
                <s.Icon src={item.icon} />
                <s.Text>{item.name}</s.Text>
            </s.Item>
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
