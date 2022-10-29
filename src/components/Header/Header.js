import React, { useState } from 'react'
import {IoListSharp} from 'react-icons/io5'
import {HeaderStyle} from './HeadeStyle'
import MenuMobile from '../MenuMobile/MenuMobile'

const Header = () => {

    const headerList = [
        "Apple", "Samsung", "Lenovo", "Oppo", "Huawei", "Infinix", "HP"
    ]

    const [menuMobile,setMenuMobile] = useState(false)

    return(
        <HeaderStyle>
            <MenuMobile  
                menuMobile={menuMobile}
                setMenuMobile={setMenuMobile}
            />
            <IoListSharp size={45} onClick={() => setMenuMobile(!menuMobile)}/>
            <nav>
                <ul>
                    {
                        headerList.map((item,index) => 
                            <li key={index}>{item}</li>
                            
                        )
                    }
                </ul>
            </nav>
        </HeaderStyle>
    )
}

export default Header