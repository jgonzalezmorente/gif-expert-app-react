import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe( 'Pruebas en el <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test( 'Debe hacer match con el snapshot', () => {

        const { container } = render( <GifItem title = { title } url = { url } /> );
        expect( container ).toMatchSnapshot();
        
    });

    test( 'Debe de mostar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem title = { title } url = { url } />);
        // screen.debug();

        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test( 'Debe de mostrar el título en el componente', () => {
        
        render( <GifItem title = { title } url = { url } />);
        expect( screen.getByText( title ) ).toBeTruthy();
    
    });

});