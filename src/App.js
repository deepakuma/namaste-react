
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
// const HeaderComponent = function () {
//     return (<h1>Namaste React fumctional Component</h1>);
// };


// const RestaurantCard = () => {
//     return (
//         <div className="card">
//             <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uabfkbl67biq9wmtvwlk"/>
//             <h2>Burger singh</h2>
//             <h4>American Fast food</h4>
//             <h4>4.2 stars</h4>
//         </div>
//     )
// }

// const styleObj = {
//     backgroundColor: "red",
// }
//inline styling in react
// const Jsx = () =>(
//     <div style={styleObj}>
//         <h1>JSX</h1>
//     </div>
// )
// const Jsx = () =>(
//     <div style={{
//         backgroundColor: "red",
//     }}>
//         <h1>JSX</h1>
//     </div>
// )


 /**
         * Header
         *   - Logo
         *   - Nav Items
         *   - Cart
         * Body
         *   - Search Bar
         *   - RestaurantList
         *   - RestaurantCard
         *     - Image
         *     - Name
         *     - Rating
         *     - Cusines
         * Footer
         *   - links
         *   - Copyright
         */


import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import Footer from "./components/Footer";

//props - properties

const AppLayout  = () =>{
    return (
        <>
       <Header />
       <Body />
       <Footer /> 
       </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);