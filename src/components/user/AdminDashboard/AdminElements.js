import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';

export const AdminWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    margin: 1em auto;

    & .col-left{
        flex: 0.3;
        background-color: '#021C3C';
    }

    & .col-right{
        flex: 0.7;
    }

    @media screen and (max-width: 768px){
        & .col-left{
            flex: 0.4;
            background-color: '#021C3C';
        }

        & .col-right{
            flex: 0.6;
        }
    }
`;

export const AdminLeftPanel = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
    height: 100%;
    padding: 1.5rem;
    background-color: #021C3C;

    & li{
        width: 100%;
        list-style: none;
        border-bottom: 1px solid rgba(0,0,0, .5);
    }
`;

export const AdminPanelLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
    color: #EEFCCE;
    text-transform: capitalize;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    transition: color 200ms ease-in-out;

    &:hover{
        color: #ffba08;
    }
`;

export const AdminRightPanel = styled.div`
    width: 100%;
    min-height: 100%;
    background: ${lighten(0.7, '#021C3C')}
`;