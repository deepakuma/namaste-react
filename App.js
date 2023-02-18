
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

const Title = () => (
    <a href="/">
    <img className="logo" alt="logo" src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"/>
    </a>
) ;
//var xyz = 10;
const Header = () => {
    return (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
    );
};

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

const restaurantList = [
    {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "673355",
      "name": "Macho Momo",
      "uuid": "535f0021-eea9-467a-84a8-514661ef4f0b",
      "city": "4",
      "area": "Rajouri Garden",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "125f824ce6bbd61c4587514be9391e5f",
      "cuisines": [
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 4.5,
      "slugs": {
        "restaurant": "macho-momo-by-saturn-the-food-planet-rajouri-garden-rajouri-garden",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "A 44 F/F Rajouri Garden , TATAR PUR, RAJOURI GARDEN, West , Delhi - 110027",
      "locality": "Tatar Pur",
      "parentId": 378120,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5971408~p=1~eid=00000186-647c-afa7-0c6b-828100c6011b",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "673355",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 4.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "5.0",
      "totalRatings": 20,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "12033",
      "name": "Aggarwal Sweets",
      "uuid": "c5ba78f5-def4-47ad-b3ba-681f1c14b932",
      "city": "4",
      "area": "Naraina",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "ylenksmzhrpnu0t2zex6",
      "cuisines": [
        "Snacks",
        "Indian",
        "Chaat"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 1.899999976158142,
      "slugs": {
        "restaurant": "agarwal-sweets-kirti-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Near PVR Cinema, Community Center, Naraina, New Delhi",
      "locality": "Near PVR Cinema",
      "parentId": 27719,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "12033",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "129211",
      "name": "Burger King",
      "uuid": "7df199c3-4338-4d02-ae3e-17202fb3e804",
      "city": "4",
      "area": "Shadipur",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "o46p9fzee1hazwvasrr8",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "burger-king-shadipur-metro-station-karol-bagh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Burger King India Pvt Ltd S-4G,SP-5G, Ground Floor, Shadipur Metro Station, New Delhi 110008",
      "locality": "Patel Rd",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Get every item under 139",
        "shortDescriptionList": [
          {
            "meta": "Get every item under 139",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Get every item under 139",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Get every item under 139",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "129211",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "201862",
      "name": "Subking",
      "uuid": "0b5d65e0-4fff-4021-aece-04373ede81ca",
      "city": "4",
      "area": "Rajinder Nagar",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "wk4ukgoluocm6t3pvkhu",
      "cuisines": [
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 4.5,
      "slugs": {
        "restaurant": "subking-karol-bagh-karol-bagh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "5/45, old rajinder nagar opposite grand bakery shankar road, new delhi",
      "locality": "Shankar Road",
      "parentId": 196161,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5925817~p=4~eid=00000186-647c-afa7-0c6b-828200c60420",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "201862",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 4.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "519249",
      "name": "Shama Chicken Biryan",
      "uuid": "a7992256-b320-4eb0-8533-7386456d8c72",
      "city": "4",
      "area": "Kirti Nagar",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "gqidspopca0smjzdiom3",
      "cuisines": [
        "Biryani",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 0.20000000298023224,
      "slugs": {
        "restaurant": "shama-chicken-biryan-kirti-nagar-kirti-nagar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Shop no -130 Ground floor JJ colony  Inderpuri New Delhi-110012, NARAiNA,  DELHI CANTONMENT, New Delhi, Delhi -  110012",
      "locality": "JJ colony",
      "parentId": 310147,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "519249",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 0.20000000298023224,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },]

const RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {

   // const {name, cuisines, cloudinaryImageId, lastMileTravelString} = restaurant?.data;
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

//props - properties
const Body = () => {
    return (
        <div className="restaurant-list">
            {/* {RestaurantCard(restaurantList[0])} */
             restaurantList.map((restaurant)=>{
                return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>
             })
            }
        <RestaurantCard {...restaurantList[0].data}/>
        <RestaurantCard {...restaurantList[1].data}/>
        <RestaurantCard {...restaurantList[2].data}/>
        <RestaurantCard {...restaurantList[3].data}/>
        <RestaurantCard {...restaurantList[4].data}/>
        </div>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const AppLayout  = () =>{
    return (
        <>
       <Header />
       <Body />
       <Footer /> 
       </>
    )
}

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
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

// root.render(heading);
root.render(<AppLayout/>);