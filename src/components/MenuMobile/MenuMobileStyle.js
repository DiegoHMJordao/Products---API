import styled, {css} from 'styled-components'

export const MenuMobileStyle = styled.section`
    position:absolute;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    top:0;
    left:0;
    bottom:0;
    right:0;
    max-width:100%;
    width:100%;
    max-height:100%;
    height:100%;
    background: rgb(152,152,152);
    background: linear-gradient(0deg, rgba(152,152,152,0.5270483193277311) 0%, rgba(49,49,50,1) 100%);
    backdrop-filter: blur(3px);
    padding:1.25rem;
    z-index:5;
    transform:translateX(-100%);
    transition: 500ms ease;

    >svg {
        position:absolute;
        top:1rem;;
        left:1rem;
        cursor: pointer;
        color:white;
    }

    ul {
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        text-align:left;
        max-width:100%;
        width:70%;
    }

    li {        
        color: rgba(255,255,255,1);
        cursor:pointer;
        font-size: 1rem;
        margin: 1rem 0;
    }

    ${
        ({menuMobile}) => menuMobile && css`
        transform:translateX(0);

        >svg {
            transform:rotate(0deg)
        }

        nav {
            display:flex;                
        }
        ` 
    }
    
`