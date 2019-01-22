import React from 'react';
import styled from 'styled-components';

const SubNavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 92px;
    padding: 12px 0;
    background-color: #F6F6F6;
`; 

const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -9px;
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
            subName: ''
        },
        {
            name: 'MacBook Air',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbookair__by1vem70tkc2_large.svg',
            subName: 'New'
        },
        {
            name: 'MacBook Pro',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbookpro__e0wcugzmt26a_large.svg',
            subName: ''
        },
        {
            name: 'iMac',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/imac__dlz2ciyr6hm6_large.svg',
            subName: ''
        },
        {
            name: 'iMac Pro',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/imac_pro__el8kcar06qky_large.svg',
            subName: ''
        },
        {
            name: 'Mac Pro',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macpro__dt69qr0ywncm_large.svg',
            subName: ''
        },
        {
            name: 'Mac mini',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macmini__rzlk7b0xsmqq_large.svg',
            subName: 'New'
        },
        {
            name: 'Accessories',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_acc__fia3ihqup4ae_large.svg',
            subName: ''
        },
        {
            name: 'Mojave',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_osx__dq0x03ehapyu_large.svg',
            subName: ''
        },
        {
            name: 'Compare',
            icon: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_comp__by57zw2zt32a_large.svg',
            subName: ''
        }
    ]
}

const SubNav = props => {
    const productLine = props.match.params.productLine;
    return(
        <SubNavContainer>
            {products[productLine].map(product => {
                return(
                    <Product icon={product.icon}>
                        <figure></figure>
                        <h2>{product.name}</h2>
                        <p>{product.subName}</p>
                    </Product>
                )
            })}
        </SubNavContainer>
    )
}

export default SubNav;