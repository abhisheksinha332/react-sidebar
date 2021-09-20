import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
    width : 18%;
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
        margin: 8px 0 4px 8px;
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
    height:16px;
    width:16px;
    color:white;
`

export const Text = styled.p`
    display: inline;
`