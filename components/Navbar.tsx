import React from 'react'
import { Navigation, BarChart, Wifi, BatteryCharging } from 'react-feather'
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
        <div className='relative h-6 flex justify-between px-7 pt-2'>
            <div className='flex items-center gap-1'>
                <p className='text-sm text-white'>14:34</p>
                <Navigation className='text-white w-4 h-4' />
            </div>
            <div className='absolute left-1/2 top-0 -translate-x-1/2 bg-black h-6 w-36 rounded-b-3xl'></div>
            <div className='flex items-center gap-1'>
                <BarChart className='text-white w-4 h-4' />
                <Wifi className='text-white w-4 h-4' />
                <BatteryCharging className='text-white w-4 h-4' />
            </div>
        </div>
    )
}

export default Navbar
