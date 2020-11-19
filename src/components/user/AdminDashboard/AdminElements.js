import styled from 'styled-components';

export const OrderChartWrapper = styled.div`
    margin-top: 1em;
    height: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: #17212d;
    border-radius: 5px;
    padding-top: 2em;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`;

export const ChartWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 65%;
    border-right: 1px solid #aaa;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const ChartTitle = styled.h2`
    position: absolute;
    top: -5%;
    left: 5%;
    font-size: 1.2rem;
    font-weight: 500;
    color: #ddd;
`;

export const CardsWrapper = styled.div`
    height: 100%;
    width: 35%;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;