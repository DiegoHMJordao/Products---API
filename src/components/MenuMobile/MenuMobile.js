import React from 'react'
import {IoClose} from 'react-icons/io5'
import { MenuMobileStyle } from './MenuMobileStyle'

const MenuMobile = ({menuMobile,setMenuMobile}) => {

    const headerList = [
        "Apple", "Samsung", "Lenovo", "Oppo", "Huawei", "Infinix", "HP"
    ]


    return (          
        <MenuMobileStyle menuMobile={menuMobile} >
            <IoClose size={45} onClick={() => setMenuMobile(false)}/>
            <nav>
                <ul>
                    {
                        headerList.map((item,index) => 
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
            </nav>
        </MenuMobileStyle>
    )
}

export default MenuMobile