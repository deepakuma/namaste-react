import { useState, useEffect } from "react";
import {restaurantList} from "../constant";
import RestaurantCard from "./RestaurantCard"; 
import Shimmer from "./Shimmer.js";

function filterData(searchText, restaurants){

    return restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
}

const Body = () => {
    //const searchTxt = "KFC";
    // SearchText is a local state variable
     const [searchText, setSearchText] = useState("");// To create state variable.
    // const [restaurants, setRestaurants] = useState(restaurantList);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    // const [searchClicked, setSearchClicked] = useState("false");

    useEffect(()=>{
        // console.log("call his when dependency is changed");
        getRestaurants();
    }, []);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6372163&lng=77.1449212&page_type=DESKTOP_WEB_LISTING");
        const json  = await data.json();
        console.log(json);
        setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
    }

    if(!allRestaurants) return null;

    if(filteredRestaurants?.length === 0) return<h1>No restaurant match your Filter!!</h1>
    return (allRestaurants.length === 0) ? <Shimmer/> : (
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange= {(e)=>{
                //e.target.value => whatever you write in input
                setSearchText(e.target.value);
            }}/>
            <button className="search-btn" onClick={()=>{
               // need to filter the data
               const data = filterData(searchText, allRestaurants);
            //    if(data.length==0){
            //     setFilteredRestaurants(restaurantList);
            //    }
               setFilteredRestaurants(data);
            }}>Search</button>
        </div>
        <div className="restaurant-list">
            {/* {RestaurantCard(restaurantList[0])} */
             filteredRestaurants.map((restaurant)=>{
                return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>
             })
            }
        </div>
        </>
    )
}

export default Body;