import React, { useContext } from 'react'
import MenuButton from 'components/MenuButton'
import ethereumImage from 'assets/ethereum.png'
import qrcodeImage from 'assets/qrcode.png'
import { Link } from 'react-router-dom'


import { getNetworkNames, toggleNetwork } from 'service/deveryService'
import Logo from 'components/Logo'
import './styles.scss'
import { AppActionTypes, AppContext } from 'state/App/Index'
function MainMenu() {

    const { state, dispatch } = useContext(AppContext)

    const handleNetworkSwap = () => {
        dispatch({ type: AppActionTypes.CHANGE_NETWORK, payload: toggleNetwork(state.networkId) })
    }

    return (
        <div className='main-container-wrapper'>
            <div style={{ marginTop: '200px' }}>
                <Link to="qr-code" style={{ textDecoration: 'none' }}>
                    <MenuButton image={qrcodeImage} text="Scan QR Code" />
                </Link>

                <MenuButton action={handleNetworkSwap}
                    text={`You are on ${getNetworkNames(state.networkId)} network. 
                    Tap to change to ${getNetworkNames(toggleNetwork(state.networkId))} `}
                />
            </div>
        </div>
    )
}

export default MainMenu