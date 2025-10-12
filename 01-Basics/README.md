 # In this file we also used scss and scss compiler for styling the component

React js :-

In this Module We have Learned Following Important Topics:-

# What is React Js:-

React JS is a JavaScript library developed by Meta in 2013. It is used to build complex UI structures and makes web applications faster by using functionalities such as the Virtual DOM. React follows a component-based architecture. We can say that we manipulate the data/content on a webpage using JS or JSX.

# Manipulation using js:-

This means that we don't write HTML code directly into the index.html file. Instead, we use JS or JSX to add content into index.html. We select the root element using JS and add the content in it using JS. JSX converts the code into a tree format, such as creating elements, adding text, etc.

# What is import and Export:-

React follows a component-based architecture, so the User Interface (UI) is divided into multiple components. To combine multiple components into a complete application, we use import and export.

# Types of Exports:

1. Named Export - When we export a component using a named export, we must import it using curly braces and the exact same name.

for ex:
export function App(){}
import {App} from ".App.jsx"

2. Default Export - When we export a component using a default export, we don’t need curly braces, and we can use any name of our choice to import it.

for ex:
export default App;
import com1 from "./App.jsx"

# What is Real DOM VS Virtual DOM

React uses the Virtual DOM to update or render the web page. React creates a copy of the Real DOM, and every time there is a change in any component, React only updates that component instead of repainting the whole page. This makes React faster compared to normal web pages. The process is commonly executed using diffing and reconciliation.

# what is JSX:-

JSX is a syntax extension for JavaScript that allows us to write HTML-like code within JS. It makes it easier to define structure and content. Later, JSX is transformed into regular JavaScript for execution.

# Fragments:-

Every component is a function that returns JSX. A component must return only one parent element. To solve this, we use fragments. Fragments are empty tags <></> used to wrap content. This allows us to return multiple elements without adding an extra parent <div>.

# eslingt.config.js :-

eESLint is used to find bugs early before running the application. We can also create custom rules to follow when building the project.

# .gitignore:-

used to filter out files that should not be pushed to GitHub, mainly to exclude environment files and other sensitive files.

IMPORTANT:-
1. Calling Component - a component can be called like a normal function or using jsx syntax by creating a tag for it
   for ex:-
   App()
   <App/>
