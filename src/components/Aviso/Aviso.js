import React from 'react'
import { AvisoStyle } from './AvisoStyle'
import {IoThumbsDownSharp, IoClose} from 'react-icons/io5'

const Aviso = ({alert, setAlert}) => {
   
    return (
        <AvisoStyle alert={alert}>
            <IoClose onClick={() => setAlert(false)} size={30}/>
            <IoThumbsDownSharp size={40}/>
            <p>Operação indisponível no momento!</p>
        </AvisoStyle>
    )
}
export default Aviso