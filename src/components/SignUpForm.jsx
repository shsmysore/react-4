import './SignUpForm.css';


export default function SignUpForm() {

    function handleSignUp(formData) {
        const email = formData.get('email');
        const password = formData.get('password');
        const description = formData.get('description');
        const employmentStatus = formData.get('employmentStatus');
        const skills = formData.getAll('skills'); // Use getAll to get all selected checkboxes
        const favColor = formData.get('favColor');

        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`Description: ${description}`);
        console.log(`Employment Status: ${employmentStatus}`);
        console.log(`Skills: ${skills.join(', ')}`); // Join array to display as string
        console.log(`Favorite Color: ${favColor}`);

        // Alternatively, for data maybe read into an object directly:
        const allData = Object.fromEntries(formData.entries());
        console.log('All form data (Checkbox items missing):', allData);
        const checkBoxSkills = formData.getAll('skills');
        const formItems = {
            ...allData,
            skills: checkBoxSkills
        }
        console.log('All form data (Checkbox items included):', formItems);
    }

    return (
        <div className="sign-up-form-container">
            <section className="sign-up-section">
                <h1>Sign up form</h1>
                <form action={handleSignUp} className="sign-up-form">
                    <label htmlFor="email">Email id: </label>
                    <input id="email" name="email" type="email" placeholder='abc@example.com' />

                    <label htmlFor="password">Password: </label>
                    <input id="password" name="password" type="password" />

                    <label htmlFor="description">Description: </label>
                    <textarea id="description" name="description" rows={7}
                        placeholder='Write something about yourself...' />

                    {/* Didn't use Bootstrap for radio button. Manually styling it. */}
                    <fieldset className='employment-status-fieldset'>
                        <legend>Employment Status</legend>

                        <div className='radio-option'>
                            <input type='radio' name='employmentStatus' value='Unemployed' id='unemployed'/>
                            <label htmlFor='unemployed' className='radio-label'>Unemployed</label>
                        </div>
                        
                        <div className='radio-option'>
                            <input type='radio' name='employmentStatus' value='Part-time' id='part-time'/>
                            <label htmlFor='part-time' className='radio-label'>Part-time</label>
                        </div>

                        <div className='radio-option'>
                            <input type='radio' name='employmentStatus' value='Full-time' id='full-time'/>
                            <label htmlFor='full-time' className='radio-label'>Full-time</label>
                        </div>
                    </fieldset>

                    {/* Styling isn't yet done properly for checkbox. It has Bootstrap classes, but dependnecy ins't present. */}
                    <fieldset className='skills-checklist-fieldset'>
                        <legend>Select skills</legend>

                        <div className='form-check checkbox-option'>
                            <input type='checkbox' className='form-check-input' name='skills' value='HTML' id='html'/>
                            <label htmlFor='html' className='form-check-label checkbox-label'>HTML</label>
                        </div>

                        <div className='form-check checkbox-option'>
                            <input type='checkbox' className='form-check-input' name='skills' value='excel' id='excel'/>
                            <label htmlFor='excel' className='form-check-label checkbox-label'>Microsoft Excel</label>
                        </div>

                        <div className='form-check checkbox-option'>
                            <input type='checkbox' className='form-check-input' name='skills' value='Java' id='java'/>
                            <label htmlFor='java' className='form-check-label checkbox-label'>Java</label>
                        </div>
                        
                    </fieldset>

                    <label htmlFor='favColor' className='form-label'>Select your favorite color: </label>
                    <select name='favColor' id='favColor' className='color-select'>
                        <option value=''>--Select Color--</option>
                        <option value='red'>Red</option>
                        <option value='green'>Green</option>
                        <option value='blue'>Blue</option>
                        <option value='yellow'>Yellow</option>
                    </select>

                    <button type='submit' className='sign-up-submit'>Sign Up</button>
                </form>
            </section>
        </div>
    )
}