import React from 'react';
import styled from 'styled-components';

const SubNavContainer = styled.div`
    width: 100%;
    height: 92px;
    padding: 12px 0;
    background-color: #F6F6F6;
    figure{
        background-image: url(https://www.apple.com/v/mac/home/ae/images/familybrowser/macbook__fjd32xo0xwmm_large.svg);
        width: 46px;
        height: 54px;
        background-size: 46px 54px;
        background-repeat: no-repeat;
    }
`;

const products = {
    mac: [
        {
            name: 'MacBook',
            icon: 'iconURL',
            subName: ''
        },
        {
            name: 'MacBook Air',
            icon: 'iconURL',
            subName: 'New'
        },
        {
            name: 'MacBook Pro',
            icon: 'iconURL',
            subName: ''
        },
        {
            name: 'iMac',
            icon: 'iconURL',
            subName: ''
        },
        {
            name: 'iMac Pro',
            icon: 'iconURL',
            subName: ''
        },
        {
            name: 'Mac Pro',
            icon: 'iconURL',
            subName: ''
        },
        {
            name: 'Mac mini',
            icon: 'iconURL',
            subName: 'New'
        },
        {
            name: 'Accessories',
            icon: 'iconURL',
            subName: ''
        },
        {
            name: 'Mojave',
            icon: 'iconURL',
            subName: ''
        },
        {
            name: 'Compare',
            icon: 'iconURL',
            subName: ''
        }
    ]
},

const SubNav = props => {
    return(
        <SubNavContainer>
        <h1>{props.match.params.productLine}</h1>
        <figure></figure>
        </SubNavContainer>
    )
}

export default SubNav;