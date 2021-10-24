import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
    width : ${props => props.isSidebarOpen ? '18%' : '5%'};
    max-width: 288px;
    min-width : 80px;
    background :yellow;
    
    background-image: linear-gradient(315deg, 
    rgba(252,82,150,0.8) 0%, 
    rgba(246,112,96,0.8) 74%),
    url(${props=>props.backgroundImage} );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color:white;
    position:relative;
    transition: 0.2s ease-in all;
`
export const Header = styled.div`
    display:flex;
    justify-content: center;
    padding:20px 0 ;
    padding-bottom: 20px;
    font-size:24px;
    letter-spacing: 6px;
`
export const menuItemContainer = styled.div`
    
`
export const Item = styled.div`
    
    padding: 6px 20px;
    font-weight : 600;
    color: ${props => props.selected ? 'rgb(255,255,255)' :'rgb(19,15,64)' };
    &:hover{
        color: rgba(255,255,255);
        transition: 0.1s ease-in all;
    }
    &:after{
        content:'';
        border: 1px solid ${props => props.selected ? 'rgb(255,255,255)' :'rgb(19,15,64)' };
        margin: 8px 0 4px 2px;
        display:block;
       
    }

    ${props=> !props.selected && `
        &:hover{
            &:after{
                border : 1px solid rgba(255,255,255,0.2);
            }
            transition: 0.1s ease-in all; 
        }
    `}
`

export const Icon = styled.img`
    padding-right:20px;
    ${props=> !props.isSidebarOpen && `padding-left: 20px`}
    ${props=> !props.isSidebarOpen && `margin-right: 20px`}
    height:16px;
    width:${props=> props.isSidebarOpen ? '16px' : '16px'};
    color:white;
    transition: 0.2s ease-in all; 
`

export const Text = styled.p`
    display: ${props=> props.isSidebarOpen ? 'inline' : 'none'};
    transition: 5s ease-in all; 
`


export const ToggleContainer = styled.div`
    position: absolute;
    width: 30%;
    margin : 0 auto;
    left: 0;
    right : 0;
    bottom: 10%;
`
export const Toggle = styled.div`
    height: 40px;
    cursor: pointer;
    position:relative;
    &:after {
        content:'';
        position:absolute;
        left:0;
        top:0.25em;
        width:100%;
        height:0.1em;
        background:white;
        box-shadow: 0 0.75em 0 0 white, 0 1.5em 0 0 white
    }
`