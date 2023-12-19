/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import Iconf from './flama.png'
const Icons = (props: any) => {





    return (
        <div>
            {
                props === undefined ? "" :
                    <Image
                        {...props}
                    />
            }

        </div>


    )
}

export default Icons
