import { describe, test, expect } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'


describe('Pruebas en <GifExpertApp/>', () => {
    test('debe de agregar una nueva categoria', () => {
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input,{target:{value:'Dragon Ball'}})
        fireEvent.submit(form)

        const titles = screen.getAllByLabelText('category-title')
        expect(titles.length).toBeGreaterThan(1)
        // screen.debug()

    })

    test('no debe de agregar una categoría ya existente', () => {
      const newCategory = 'DragonBall'
      render(<GifExpertApp/>)

      const input = screen.getByRole('textbox')
      const form = screen.getByRole('form')

      fireEvent.input(input,{target:{value:newCategory}})
      fireEvent.submit(form)
      fireEvent.input(input,{target:{value:newCategory}})
      fireEvent.submit(form)

      expect(screen.getAllByText(newCategory).length).toBe(1)
      
    })
    

})
