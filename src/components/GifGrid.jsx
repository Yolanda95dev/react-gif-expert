import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category='undefined' }) => {

    const { images, isLoading } = useFetchGifs(category)

    console.log({isLoading})

    return (
        <>
            <h3 aria-label='category-title'>{category}</h3>
            {
                // isLoading
                // ?(<h2>Cargando...</h2>)
                // :null
                isLoading && (<h2>Cargando...</h2>) //AND lógico
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image} //Esparce las propiedades de image como props
                        />
                    ))
                }
            </div>
        </>
    )
}

