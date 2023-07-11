import { useEffect, useState } from "react"
import { PiSunBold } from 'react-icons/pi'
import { FaRegMoon } from 'react-icons/fa'
import { BsInstagram, BsTiktok, BsWhatsapp } from 'react-icons/bs'
import { BiLogoFacebook } from 'react-icons/bi'

export const NavBar = () => {

  const darkTheme = 'dracula'
  const ligthTheme = 'winter'

  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme)
  }

  useEffect(() => {
    if (theme === true) {
      document.querySelector('html').setAttribute('data-theme', darkTheme);
    } else {
      document.querySelector('html').setAttribute('data-theme', ligthTheme);
    }
  }, [theme])


  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">

        <div className="grid grid-rows-1 grid-flow-col gap-4 mx-5">
          <button className="btn btn-outline btn-info"><BiLogoFacebook className='w-5 h-5' /> </button>
          <button className="btn btn-outline btn-primary"><BsInstagram className='w-5 h-5' /></button>
          <button className="btn btn-outline btn-secondary"><BsTiktok className='w-5 h-5' /></button>
          <button className="btn btn-outline btn-success"><BsWhatsapp className='w-5 h-5' /></button>
        </div>

        <label className="hidden swap swap-rotate mx-2">
          <input type="checkbox" onChange={changeTheme} checked={theme} />
          <PiSunBold className="swap-on fill-current w-5 h-5" />
          <FaRegMoon className="swap-off fill-current w-5 h-5" />
        </label>
      </div>
    </div>
  )
}