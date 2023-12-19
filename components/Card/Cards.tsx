import * as React from 'react';




const Cards = (props: any) => {
  return (

    <div {...props}>
      {props.children}
    </div>
  )
}

export default Cards
