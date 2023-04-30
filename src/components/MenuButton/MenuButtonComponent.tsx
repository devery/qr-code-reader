import React from 'react'
import './MenuButtonComponent.styles.scss'


type Props = {
    extraClassName?: string
    action?: () => void
    text?: string
    image?: string
}

function MenuButton({ image, text, extraClassName, action }: Props) {
    return (
        <div onClick={action} className={`menu-button-container ${extraClassName}`}>
            <div className='menu-button-content'>
                {image ? <img className='menu-button-image' src={image} /> : null}
                <span>{text}</span>
            </div>
            <div className='menu-button-side'><span>{">"}</span></div>
        </div>

    )
}

export default MenuButton