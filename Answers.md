1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1) Concat, returns a new array that represents two supplied arrays combined
2) Map, returns a new array that is the result of performing a function on each value in the original array, and viewing each function's value in a new array
3) filter, returns a new array that is a result of taking only values from the original array that pass a given condition.
Object.assign() and be used to make a new object using another object's properties



1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are data objects that are used to update the redux store's state. they contain a "type" property that ids the purpose of the data, and the data itself in a "payload" property"
reducers are functions that take in a variety of types of actions, and update redux store accordingly based on instructions within their structure.
redux store is a shared state for all components in an app. there is no variation in store available for one component or another, so it is the "single source" of reliable data.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is data that is shared amongst several component trees, while component state is only used for that component and its children. for example, state containing the values for a component's input field would be component state as it is only used for that component. A data array that is used to both fill fields on a form and display in view on a main page would be application state because it is used in two seperate trees.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk allows us to make action creators work asyncronously by running dispatch several times instead of just once. this allows us to do async operations such as ajax calls in our action creators.