import React, { useState } from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'

export const ThemeContext = React.createContext()

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  return <RecipeList recipes={sampleRecipes}/>
}

function handleRecipeAdd() {
  const newRecipe = {
  }
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat the chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat the pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;