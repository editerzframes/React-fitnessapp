import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
