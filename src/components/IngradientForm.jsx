import './IngradientForm.css';
import { use, useState } from 'react';

function handleHover() {
    console.log('Adding Ingradient..');
}

export default function IngradientForm() {

    console.log('IngradientForm component starting...');

    const [ingradients, setIngradients] = useState([]);

    const ingradientsLiList = ingradients.map(i => <li key={i}>{i}</li>);

    function handleAddIngradient(formData) {
        const ingradient = formData.get('ingradient');

        if (ingradients.includes(ingradient)) {
            console.log(`Ingradient "${ingradient}" already exists.`);
            return; // Exit if the ingradient already exists
        }

        console.log(`Submitting ingradient: ${ingradient}`);
        setIngradients(prevIngradients => [...prevIngradients, ingradient]);
    }

    return (
        <>
            <form className='ingradient-form' action={handleAddIngradient}>
                {/* <label for="ingradient">Ingradient</label>  Generally label should be used. But UX doesn't have it, hence use 'aria-label'*/}
                <input id="ingradient"
                    name="ingradient"
                    aria-label='Ingradient'
                    type="text"
                    placeholder="e.g. oreganto"
                    onMouseEnter={handleHover} />
                <button type="submit">Add ingradient</button>
            </form>

            <section className='view-ingradients'>
                <h2>Ingraditents on hand:</h2>
                <ul>
                    {ingradientsLiList}
                </ul>
            </section>
        </>
    )
}