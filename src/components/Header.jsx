import React from 'react'
import Image from './ui/Image'
import { GiHamburgerMenu } from "react-icons/gi";
import Youtube_Logo from "../assets/youtube_logo.svg"
import SearchComponent from './SearchComponent';

const Header = () => {
  return (
    <div className='flex justify-between px-5'>
        <div className='flex items-center gap-5'>
            <span>
                <GiHamburgerMenu size={25} />
            </span>

            <div className='relative max-w-28'>
                <Image src={Youtube_Logo}/>
            </div>
        </div>

        <div>
            <SearchComponent />
        </div>

        <div>
            Profile Icons
        </div>
    </div>
  )
}

export default Header