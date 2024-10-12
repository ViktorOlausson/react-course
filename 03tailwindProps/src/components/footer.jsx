import React from 'react'

function Footer({text = "dis is A footer"}) {
  return (
    <div className='bg-orange-500 h-32 flex items-center justify-center my-6'>
        <h1>
            {text}
        </h1>
    </div>
  )
}

export default Footer