import propTypes from 'prop-types';
import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {    

    const [ inputValue, setInputValue ] = useState( '' );

    const onInputChange = ( { target: { value } } ) => {
        setInputValue( value );
    }

    const onSubmit = ( event ) => {        
        event.preventDefault();
        
        if( inputValue.trim().length <= 0 ) return;
        onNewCategory( inputValue.trim() );        
        setInputValue( '' );
    }

    return (
        <form onSubmit = { onSubmit } aria-label="form">
            <input type="text"
                   placeholder="Buscar gifs"
                   value={ inputValue }
                   onChange={ onInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: propTypes.func.isRequired
}

