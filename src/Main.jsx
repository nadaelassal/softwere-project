import { Container } from "@mui/system";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function Main() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "2e9029ec";
  const YOUR_APP_KEY = "f6b617af6677e1f32ade37e4b2d03174";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <Container sx={{marginLeft:8 , marginTop:-28}}>
      <div className="app">
        <form className="app__searchForm" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter Ingredient"
            className="app__input"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
          <input className="app__submit" type="submit" value="Search" />
          <select className="app_healthLabels">
            <option onClick={() => sethealthLabels("Vegan")}>Vegan</option>
            <option onClick={() => sethealthLabels("Vegetarian")}>
              Vgrtarian
            </option>
            <option onClick={() => sethealthLabels("paleo")}>paleo</option>
            <option onClick={() => sethealthLabels("dairy-free")}>
              dairy-free
            </option>
            <option onClick={() => sethealthLabels("gluten-free")}>
              gluten-free
            </option>
            <option onClick={() => sethealthLabels("wheat-free")}>
              wheat-free
            </option>
            <option onClick={() => sethealthLabels("fat-free")}>
              fat-free
            </option>
            <option onClick={() => sethealthLabels("low-sugar")}>
              low-sugar
            </option>
            <option onClick={() => sethealthLabels("egg-free")}>
              egg-free
            </option>
            <option onClick={() => sethealthLabels("peanut-free")}>
              peanut-free
            </option>
            <option onClick={() => sethealthLabels("tree-nut-free")}>
              tree-nut-free
            </option>
            <option onClick={() => sethealthLabels("soy-free")}>
              soy-free
            </option>
            <option onClick={() => sethealthLabels("fish-free")}>
              fish-free
            </option>
            <option onClick={() => sethealthLabels("shellfish-free")}>
              shellfish-free
            </option>
          </select>
        </form>

        <div className="app_recipes">
          {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
        </div>
      </div>
    </Container>
  );
}

export default Main;
