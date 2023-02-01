import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe( 'Pruebas en <GifExpertApp />', () => {

    test( 'Debe de hacer match con el snapshot', () => {

        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();
        
    });
    
    test( 'Debe de mostrar inicialmente una sola categoría', () => {
        
        render( <GifExpertApp /> );
        expect( screen.getAllByRole( 'heading', { level: 3 } ).length ).toBe( 1 );

    });

    test( 'Debe de añadir una nueva categoría si es distinta de las anteriores', () => {
        
        const inputValue = 'ABC123';        
        
        render( <GifExpertApp /> );

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        const categoriasAntes = screen.getAllByRole( 'heading', { level: 3 } ).length;

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        const categoriasDespues = screen.getAllByRole( 'heading', { level: 3 } ).length;

        expect( categoriasDespues ).toBe( categoriasAntes + 1 );
        expect( screen.getByRole('heading', { level: 3, name: inputValue } ) );

    });

    test( 'No debe de añadir una nueva categoría si ya existe', () => {

        const inputValue = 'ABC123';        
        
        render( <GifExpertApp /> );

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        const categoriasAntes = screen.getAllByRole( 'heading', { level: 3 } ).length;
        
        fireEvent.submit( form );
        const categoriasDespues = screen.getAllByRole( 'heading', { level: 3 } ).length;

        expect( categoriasDespues ).toBe( categoriasAntes );

    });

    

});