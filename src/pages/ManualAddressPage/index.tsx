import React, { useState } from 'react'
import Logo from 'components/Logo'
import MenuButton from 'components/MenuButton';
import { useNavigate } from "react-router-dom";
import './ManualAddressPage.styles.scss'


const resolveClass = (hasError: boolean) => hasError ? 'search-bar has-error' : 'search-bar'


const validateAddress = (address: string, onValid: (address: string) => void, onInvalid: () => void) => {
    if (address.length > 0) {
        onValid(address)
    }
    else {
        onInvalid();
    }
}

const resolvePlaceholder = (hasError: boolean) => hasError ? 'You need to fill the product address here' : 'product address'


const TextInputView = () => {

    const [productAddress, setProductAddress] = useState('')
    const [hasError, setHasError] = useState(false)
    const navigate = useNavigate();
    const handleSearch = () => {
        validateAddress(productAddress,
            (address) => {
                navigate(`/search/${address}`)
            },
            () => {
                setHasError(true)
            })
    }
    return (
        <div className='main-container-wrapper'>
            <Logo />
            <span className='found-text'>Enter your product address</span>

            <div className={resolveClass(hasError)}>
                <input type='text' onChange={(e) => {
                    setProductAddress(e.target.value)
                    setHasError(false)
                }} className='search' value={productAddress} placeholder={resolvePlaceholder(hasError)} />


            </div>
            <div className='bottom-button'>
                <MenuButton action={handleSearch} text='Check for product' />
            </div>
        </div>
    )
}

export default TextInputView