import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SubNavContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 92px;
    padding: 12px 0;
    background-color: #F6F6F6;
    div{
        display: flex;
        margin-top: 1px;
        a{
            text-decoration: none;
            color: black;
            &:hover{
            color: #0070c9;
            }
        }
    }
    .sub-active{
        color: #0070c9;
    }
`; 

const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: -9px 20px 0 20px;
    h2{
        margin-top: 2px;
        font-size: 11px;
        font-weight: 500;
    }
    figure{
        background-image: url(${props=>props.icon});
        width: 46px;
        height: 54px;
        background-size: 46px 54px;
        background-repeat: no-repeat;
        margin: 0 auto;
    }
    p{
        height: 15px;
        font-size: 9px;
        margin: unset;
        margin-top: -9px;
        color: #ef5602;
    }
`;   

const products = {
    mac: [
        {
            name: 'MacBook',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbook__fjd32xo0xwmm_large.svg',
            subName: '',
            path: 'macbook'
        },
        {
            name: 'MacBook Air',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbookair__by1vem70tkc2_large.svg',
            subName: 'New',
            path: 'macbook-air'
        },
        {
            name: 'MacBook Pro',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbookpro__e0wcugzmt26a_large.svg',
            subName: '',
            path: 'macbook-pro'
        },
        {
            name: 'iMac',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/imac__dlz2ciyr6hm6_large.svg',
            subName: '',
            path: 'imac'
        },
        {
            name: 'iMac Pro',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/imac_pro__el8kcar06qky_large.svg',
            subName: '',
            path: 'imac-pro'
        },
        {
            name: 'Mac Pro',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macpro__dt69qr0ywncm_large.svg',
            subName: '',
            path: 'mac-pro'
        },
        {
            name: 'Mac mini',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macmini__rzlk7b0xsmqq_large.svg',
            subName: 'New',
            path: 'mac-mini'
        },
        {
            name: 'Accessories',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_acc__fia3ihqup4ae_large.svg',
            subName: '',
            path: 'accessories'
        },
        {
            name: 'Mojave',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_osx__dq0x03ehapyu_large.svg',
            subName: '',
            path: 'mojave'
        },
        {
            name: 'Compare',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_comp__by57zw2zt32a_large.svg',
            subName: '',
            path: 'compare'
        }
    ]
}

const SubNav = props => {
    const productLine = props.match.params.productLine;
    return(
        <SubNavContainer>
            <div>
            {products[productLine].map(product => {
                return(
                    <NavLink to={`/${productLine}/${product.path}`} activeClassName='sub-active'>
                        <Product icon={product.icon}>
                            <figure></figure>
                            <h2>{product.name}</h2>
                            <p>{product.subName}</p>
                        </Product>
                    </NavLink>
                )
            })} 
            </div>
        </SubNavContainer>
    )
}

export default SubNav;