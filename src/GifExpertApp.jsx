import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return
        // console.log(newCategory)
        //categories.push('Valorant') Trata de no mutar el estado
        setCategories([newCategory, ...categories]) //usando el spreed
        // setCategories(cat => [...cat,'Valorant'])
    }

    return (
        <>
            {/* Tñitulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

            {/* Gif Item */}
        </>
    )
}


