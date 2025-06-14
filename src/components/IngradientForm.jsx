import './IngradientForm.css';
import { use, useState } from 'react';

function handleHover() {
    console.log('Adding Ingradient..');
}

export default function IngradientForm() {

    console.log('IngradientForm component starting...');

    const [showRecipe, setShowRecipe] = useState(false);

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

    function handleGetRecipe() {
        console.log('Getting recipe based on ingradients...');
        setShowRecipe(true);
    }

    function getIngradientsView() {
        return (
            <section className='view-ingradients-container'>
                <section className='view-ingradients'>
                    <h2>Ingredients on hand:</h2>
                    <ul>
                        {ingradientsLiList}
                    </ul>
                </section>
            </section>
        );
    }

    function getRecipeActionView() {
        return (
            <section className='go-for-recipe-container'>
                <section className='go-for-recipe'>
                    <div>
                        <h1>Ready for recipe?</h1>
                        <p>Generate a receipe from your list of ingradients.</p>
                    </div>
                    <button onClick={handleGetRecipe}>Get a recipe</button>
                </section>
            </section>
        )
    }

    function getShowRecipeView() {
        return (
            <section className='recipe-container'>
                <section className='recipe'>
                    <h2>Suggested recipe:</h2>
                    <p>Based on your available ingradients, i would suggest making a Nestle Maggie</p>
                </section>
            </section>
            )

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

            {ingradients.length > 0 ? getIngradientsView() : null}

            {ingradients.length > 2 ? getRecipeActionView() : null}

            {showRecipe ? getShowRecipeView() : null}
        </>
    )
}