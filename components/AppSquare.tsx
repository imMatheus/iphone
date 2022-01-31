import React from 'react'
import Image from 'next/image'

interface AppSquareProps {
    src: string
    name: string
}

const AppSquare: React.FC<AppSquareProps> = ({ src, name }) => {
    return (
        <div
            className='w-full aspect-square grid relative'
            style={{ gridTemplateRows: '1fr auto' }}
        >
            <div className='relative mx-auto aspect-square h-full overflow-hidden rounded-xl'>
                <Image
                    src={src}
                    className='rounded-xl'
                    alt='instagram'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <p className='flex-shrink-0 text-xs text-center mt-1.5'>{name}</p>
        </div>
    )
}

export default AppSquare
