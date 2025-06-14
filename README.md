# React + Vite

This is an interactive web project. Chef app, recipes, api call to AI, etc

## Notes

My project notes.

1. Props
The 'props' refers to the properties that are passed into a component in order 
for it to render correctly. This is similar to how a function receives parameters. 
Note - A component receving props is not allowed to modify them. In other words, props are "immutable" 

2. Fiedlset & legend
The recomended way to group form items.

3. Try Bootstrap
Styling the radio, checkboxes are challenging. Bootstrap works easily, but it impacts other elements.
If imported globally it tries to style every other component. (probably selecting by element types)
ToDo: Figure out a way to locally import Bootstrap in a component level.

Next steps: Try to read inputs from Signup form, continue the course.

4. useState in React
Its a React hook for managin states within funcational components. 
This helps components manage their own data and automatically re-render the components when state changes.
- Use the set function only to set a new value. Not modify the old ref and pass it in.

5. Conditional rendering
Examples:
(a) this is also possible, not preffered.
```
{isLoggedIn && <p>These are the secret details!</p>}
```
(b) a ternaery or a function is preffered way.
```
{isLoggedIn ? <p>These are the secret details!</p> : null}
```

6. Pass a state argument into a separate component.
Side track, counter project.
