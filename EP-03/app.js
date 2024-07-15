import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS Object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// console.log(heading);

// JSX - HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
//React Element
// const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;
// const jsxHeading = (
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX 🚀
//   </h1>
// );

//React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// React Component

// Class Based Component - OLD

// React Functional Component - NEW
// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste React Functional Component</h1>;
// };

//Component using arrow fn
const Title = () => (
  <div>
    <h1 className="head" tabIndex="5">
      Namaste React using JSX 🚀 - Title Component
    </h1>
    <h2>-Arrow Fn</h2>
  </div>
);

//React element
const elem = <span>========React Element========</span>;

// React Element
// const titleElement = (
//   <div>
//     {elem}
//     <h1 className="head" tabIndex="5">
//       Namaste React using JSX 🚀 - Title Component
//     </h1>
//     <h2>-React Element</h2>
//     <HeaderComponent/>
//   </div>
// );

//Normal JS Fn, without arrow fn
// const title = function () {
//   return (
//     <div>
//       <h1 className="head" tabIndex="5">
//         Namaste React using JSX 🚀 - Title Component - Normal Fn
//       </h1>
//       <h2>Normal JS Fn</h2>
//     </div>
//   );
// };

const number = 10000;

// Component Compositions
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title> // same code as above line
    {Title()} // same code as above line
    <h1 className="heading">
      Namaste React Functional Component - Heading Component
    </h1>
    <h2>{number + 100}</h2>
    <h2>{console.log("JS expression in JSX")}</h2>
    {/* {titleElement} //infinite loop if uncommented */}
  </div>
);

//React Element
const titleElement = (
  <div>
    {elem}
    <h1 className="head" tabIndex="5">
      Namaste React using JSX 🚀 - Title Component
    </h1>
    <h2>-React Element</h2>
    <HeadingComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//replace everything in id=root with contents of heading
// root.render(jsxHeading);

//Rendering a component - babel understands like this
// root.render(<HeadingComponent />);

// Rendering a element
root.render(titleElement);
