import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Navbar = () => {
  return (
    <nav>
        <div className='nav_box'>
            <span>
                Er-Cart
            </span>
            <div className='cart'>
                <i className='fas fa-cart-plus'></i>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
