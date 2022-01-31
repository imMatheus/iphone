import React from 'react'

interface AppGridProps {}

const AppGrid: React.FC<AppGridProps> = ({ children }) => {
    return (
        <div className='grid grid-cols-4 gap-x-2 gap-y-3 w-full py-6 px-1'>
            {children}
        </div>
    )
}

export default AppGrid
