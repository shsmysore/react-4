import './IngradientForm.css';

function handleHover() {
        console.log('Adding Ingradient..');
    }

export default function IngradientForm() {

    console.log('IngradientForm component starting...');

    return (
        <form className='ingradient-form'>
            {/* <label for="ingradient">Ingradient</label>  Generally label should be used. But UX doesn't have it, hence use 'aria-label'*/}
            <input id="ingradient" 
                aria-label='Ingradient' 
                type="text" 
                placeholder="e.g. oreganto"
                onMouseEnter={handleHover} />
            <button type="submit">Add ingradient</button>
        </form>
    )
}