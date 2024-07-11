import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5e9c4345fcb14579ae136897353ad620";

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    async function fetchFood(){
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query])

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
