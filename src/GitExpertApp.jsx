import { useState } from 'react'
import { AddCategory, GridGif } from './components'

export const GitExpertApp = () => {

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
            <h1>GitExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GridGif
                        key={category}
                        category={category}
                    />
                ))
            }

            {/* Gif Item */}
        </>
    )
}


