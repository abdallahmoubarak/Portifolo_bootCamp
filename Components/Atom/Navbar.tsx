import React from 'react'

const Navbar = () => {
  return (
    <>
          <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row items-end justify-between p-10">
          <div className="font-bold text-amber-400">
            <a href="#home"> HusseinMbarak </a>
          </div>
          <nav className="flex flex-row items-end justify-between gap-10">
            <a href="#aboutus" className="hover:text-amber-400">
              AboutUs
            </a>
            <a href="#projects" className="hover:text-amber-400">
              Projects
            </a>
            <a href="#Contact" className="hover:text-amber-400">
              ContactUs
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar