import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const SearchComponent = () => {

  const [searchQuery, setSearchQuery] = useState()  
  const [isFocus, setIsFocus] = useState(false)

  const handleOnChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <form action="" className={`flex items-center h-10 rounded-full ${!isFocus && 'border border-stone-700'}`}>
        <div className={`flex items-center relative px-4 py-1 h-full rounded-l-full ${isFocus ? 'border border-blue-600' : ''}`}>
            {isFocus && <div><CiSearch size={20} /></div>}
            <div><input type="text" placeholder='Search' className='outline-none px-4 w-[515px]' onChange={handleOnChange} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} value={searchQuery}/></div>
            {searchQuery && <button type='button' className='absolute right-2' onClick={() => setSearchQuery("")}><RxCross1 size={20}/></button>}
        </div>
        <button type='sumbit' className='bg-stone-800 px-5 h-full rounded-r-full'>
            <CiSearch size={25} className='bg-stone-800'/>
        </button>
    </form>
  )
}

export default SearchComponent