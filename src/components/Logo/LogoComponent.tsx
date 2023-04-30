import React from 'react'
import deveryLogo from 'assets/logo-final.png'
import './LogoComponent.styles.scss'

type Props = {}

function Logo({ }: Props) {
    return (
        <div className='logo-container'>
            <img className='logo-image' src={deveryLogo} />
        </div>
    )
}

export default Logo