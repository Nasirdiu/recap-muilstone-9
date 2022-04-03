import { useEffect, useState } from "react"

const useMeals=(value)=>{
    const [meals,setMeals]=useState([]);
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals)
    )},[value])
    return [meals,setMeals];
}

export default useMeals;