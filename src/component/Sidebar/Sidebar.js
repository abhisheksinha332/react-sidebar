import React,{useState, useEffect} from 'react'
import * as s from './Sidebar.styles'

const Sidebar = ({backgroundImage, sidebarHeader, menuItem}) => {

    const [selected, setSelected] = useState(menuItem[0].name )
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    useEffect(() => {
        
    }, [isSidebarOpen])

    const clickHandler =(name) => {
        setSelected(name)
    }
    
    const item = menuItem.map((item,index)=>{
        const isItemSelected = selected === item.name;
        // console.log(`${item.name} selected? ${isItemSelected}`)
        return(
            <s.Item key={index} selected={isItemSelected} onClick={()=>clickHandler(item.name) }  isSidebarOpen={isSidebarOpen}>
                <s.Icon src={item.icon} isSidebarOpen={isSidebarOpen}/>
                <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
            </s.Item>
        )
    })
    console.log(isSidebarOpen)
    return (
        <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}>
            <s.Header> {isSidebarOpen ? sidebarHeader.fullName : sidebarHeader.name} </s.Header>
            <s.menuItemContainer>
                {item}
            </s.menuItemContainer>
            <s.ToggleContainer onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
                <s.Toggle />
            </s.ToggleContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
