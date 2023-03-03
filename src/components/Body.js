import { useState } from "react";
import {restaurantList} from "../constant";
import RestaurantCard from "./RestaurantCard"; 

function filterData(searchText, restaurants){

    return restaurantList.filter((restaurant)=>restaurant.data.name.includes(searchText));
}

const Body = () => {
    //const searchTxt = "KFC";
    // SearchText is a local state variable
    const [searchText, setSearchText] = useState("");// To create state variable.
    const [restaurants, setRestaurants] = useState(restaurantList);
    // const [searchClicked, setSearchClicked] = useState("false");
    return (
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange= {(e)=>{
                //e.target.value => whatever you write in input
                setSearchText(e.target.value);
            }}/>
            <button className="search-btn" onClick={()=>{
               // need to filter the data
               const data = filterData(searchText, restaurants);
               if(!data){
                setRestaurants(restaurantList);
               }
               setRestaurants(data);
            }}>Search</button>
        </div>
        <div className="restaurant-list">
            {/* {RestaurantCard(restaurantList[0])} */
             restaurants.map((restaurant)=>{
                return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>
             })
            }
        </div>
        </>
    )
}

export default Body;