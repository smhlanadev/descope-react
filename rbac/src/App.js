import './App.css';
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { React, useEffect, useState } from 'react';
import { roles } from './roles';

function App() {
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const { logout } = useDescope()

  const [recipes, setRecipe] = useState([]);

  const fetchRecipes = async () => {
    await fetch("https://dummyjson.com/recipes")
        .then((response) => response.json())
        .then((results) => {
          setRecipe(results.recipes);
        })
        .catch(error => console.error(error));
  }
  
  useEffect(() => {
    fetchRecipes();
  }, [isAuthenticated, user]);

  const handleLogout = () => {
    logout()
  };

  return <>
    {!isAuthenticated &&
      (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "400px" }}>
            <Descope
              flowId="sign-up-or-in"
              onSuccess={(e) => console.log(e.detail.user)}
              onError={(e) => console.log('Could not log in!')}
            />
          </div>
        </div>
      )
    }

    {
      (isSessionLoading || isUserLoading) && <p>Loading...</p>
    }

    {!isUserLoading && isAuthenticated &&
      (
        <div style={{padding:"0 0 3rem 3rem"}}>
          <p>Hello {user.name}</p>
          <button onClick={handleLogout}>Logout</button>
          {(user.roleNames.includes(roles.CHEF) || user.roleNames.includes(roles.USER)) && 
            <div>
              <div style={{padding:"1rem 0 0 0"}}>Here are some delicious recipes:</div>

              {recipes.length > 0 && 
                <>
                  {recipes.map((recipe) => {
                    return (
                      <div key={recipe.id}>
                        <h1>{recipe.name}</h1>

                        {
                          user.roleNames.includes(roles.CHEF) &&
                          <>
                            <p>Ingredients: {recipe.ingredients.join(', ')}.</p>
                            {recipe.instructions.map((instruction, index) => {
                              return (<p key={index}>{instruction}</p>)
                            })}
                          </>
                        }
                      </div>
                    )
                  })}
                </>
              }
            </div>
            }
        </div>
      )}
  </>;
}

export default App;
