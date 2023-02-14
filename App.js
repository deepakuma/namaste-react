
// const heading = React.createElement(
//     "h1",
//     {
//         id:"title",
//         key: "h1"
// },
//     "Heading 1 after parcel"
// // );
// console.log(heading);

//<h1 id="title">Heading 1</h1>
//document.createElement

// const heading = React.createElement(
//     "h1",
//     {
//         id: "title",
//         key: "h2"
//     },
//     "Namaste React"
// );

//const heading = (<h1 id="title" key="h2">Namaste React</h1>) ;

/* <div class="header">
<h1>Namaste React</h1>
<ul>
    <li>About us</li>
    <li>Support</li>
    <li>Home</li>
</ul>
</div> */

// It can create a mess using createElement like this
// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//     },
//     [ React.createElement(
//         "h1",
//         {
//             id:"title",
//             key: "h1"
//     },
//         "Heading 1 after parcel"
//     ),  React.createElement(
//         "ul",
//         {},
//         [ React.createElement(
//             "li",
//             {},
//             "About us"
//         ), React.createElement(
//             "li",
//             {},
//             "Support"
//         ), React.createElement(
//             "li",
//             {},
//             "Home"
//         )]
//     )]
// );

//React Component
//- Functional - NEW, I'll learn this
//= Class Based Component - OLD, We will learn too but not much(for interview)

//functinal component is a javascript function that return react element, component, jsx
import React from "react";
import  ReactDOM  from "react-dom/client";

// const HeaderComponent = function () {
//     return (<h1>Namaste React fumctional Component</h1>);
// };



const heading = (<h1 id="title" key="h2">Namaste React</h1>) ;
var xyz = 10;
const HeaderComponent2 = () => {
    return (
    <div>
        {heading}
        {xyz}
    <h1>Namaste React functional Component</h1>
    <h2>This is h2 tag</h2>
    </div>);
};
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

// root.render(heading);
root.render(<HeaderComponent2 />);