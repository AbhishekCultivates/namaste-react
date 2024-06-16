// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );
// console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Creating nested div's using React

// <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h1>
//     </div>
//    <div id="child2">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h1>
//     </div>
// </div>

// React.createElement is an object which when rendered gives HTML which browser understands

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//This code is hard to write, so we use JSX
