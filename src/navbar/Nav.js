import './Nav.css'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'


function Nav (){

    return (
        <nav>
            <div className='nav-container'>
                <input placeholder='Enter your search shoes.' type='text' className='search-input'></input>
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