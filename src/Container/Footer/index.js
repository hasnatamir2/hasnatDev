import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <p>Made with <FontAwesomeIcon style={{'color':'red'}} icon={['fas', 'heart']}/> by Hasnat Amir </p>
        </div>
    )
}

export default Footer;