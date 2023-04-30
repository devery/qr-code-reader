import Logo from 'components/Logo';
import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import loading from 'assets/loading.gif'
import notFound from 'assets/not_found.png'

import './styles.scss'
import MenuButton from 'components/MenuButton';
import Cargo from 'assets/cargo.svg'
import { AppContext, ProductStatus, loadProductByAddress } from 'state/App/Index';


const navigateToHome = () => {
    window.location.href = '/'
}

const isLoading = (status: ProductStatus) => {
    return status === ProductStatus.LOADING
}

const isNotFound = (status: ProductStatus) => {
    return status == ProductStatus.ERROR || status == ProductStatus.NOT_FOUND
}

const isLoaded = (status: ProductStatus) => {
    return status === ProductStatus.LOADED
}


const SearchResultPage = () => {

    const { state, dispatch } = useContext(AppContext)
    const params = useParams<{ productId: string }>();

    useEffect(() => {
        if (state.productStatus !== ProductStatus.LOADED) {
            loadProductByAddress(params.productId || '', state.networkId)(dispatch)
        }
    }, [dispatch, state.networkId, params.productId])



    return (
        <div className='main-container-wrapper'>
            <Logo />

            {isLoading(state.productStatus) ? <img className='not-found-image' src={loading} /> : null}

            {isNotFound(state.productStatus) ? (<>
                <img className='not-found-image' src={notFound} />
                <span className='not-found-text'>Product not found</span>
                <div className='bottom-button'>
                    <MenuButton action={navigateToHome} text='try again' />
                </div>
            </>) : null}

            {isLoaded(state.productStatus) ? (<>
                <span className='found-text'>Product Found</span>
                <img className='found-image' src={Cargo} />
                <span className='found-text'>{`description: ${state.product?.description}`}</span>
                <span className='found-text'>{`details: ${state.product?.details}`}</span>
                <span className='found-text'>{`origin: ${state.product?.origin.split('#')[0]}`}</span>
                <div className='bottom-button'>
                    <MenuButton action={navigateToHome} text='Check another product' />
                </div>
            </>) : null}
        </div>
    )
}

export default SearchResultPage