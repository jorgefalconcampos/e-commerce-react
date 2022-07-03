import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import LoadingScreen from "../General/LoadingScreen/LoadingScreen"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false); // si hay error durante la carga

    // simulamos llamada a una API con delay de 2 seg. Lo ponemos dentro de
    // useEffect con un array de dependencias vacío para que se ejecute solo 1 vez
    useEffect(() => {
        getFetch
        .then(resp => setProducts(resp))
        .catch(err => console.log(err)
        )
        .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {
                loading ? 
                <LoadingScreen/> 
                : 
                <ul>
                    {products.map(prod => 
                        <li key={prod.id}>
                            {prod.nombre}
                        </li>
                   )}
                </ul>
            }
        </div>
    )
}

export default ItemListContainer;