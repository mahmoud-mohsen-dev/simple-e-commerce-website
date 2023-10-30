import './Nav.css'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import Input from '../componants/Input'

function Nav ({theFunc, initialData}){

    return (
        <nav>
            <div className='nav-container'>
                <Input theFunc={theFunc} initialData={initialData}/>
            </div>
            <div className='profile-container'>
                <a href='#'><AiOutlineHeart className='nav-icons'/></a>
                <a href='#'><AiOutlineShoppingCart className='nav-icons'/></a>
                <a href='#'><AiOutlineUserAdd className='nav-icons'/></a>
            </div>
        </nav>
    )
}

export default Nav;