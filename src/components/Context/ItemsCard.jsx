import React from 'react'

const ItemsCard = ({ data }) => {
  return (
    <div>
        <p>{data.nombre}</p>
        <p>{data.medidas}</p>
    </div>
  )
}

export default ItemsCard