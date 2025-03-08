import { getGifs } from "../../src/helpers/getGifs"
import { describe, test, expect } from '@jest/globals'

describe('Pruebas en getGifs()', () => {
    test('debe de devolver un arreglo de gifs', async () => {

        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

    })

})
