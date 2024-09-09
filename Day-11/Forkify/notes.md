# User Stories

`Common format`: As a **[type of user]**, I want **[an action]** so that **[a benefit]**

# Recipe Application User Stories & Features

## USER STORIES

1. **Search for recipes**  
   As a user, I want to be able to search for recipes based on ingredients or keywords.

2. **Update the number of servings**  
   As a user, I want to adjust the number of servings for a recipe, and have the ingredient amounts update accordingly.

3. **Bookmark recipes**  
   As a user, I want to bookmark my favorite recipes so that I can quickly find them later.

4. **Create my own recipes**  
   As a user, I want to be able to upload and store my own recipes.

5. **See my bookmarks and own recipes when I leave the app and come back later**  
   As a user, I want my bookmarks and own recipes to be saved and available when I reopen the app.

---

## FEATURES

- **Search functionality**

  - An input field where the user can type keywords to search for recipes.
  - The app sends a request to an API with the search keywords.

- **Display search results with pagination**

  - Display the results in a paginated view so users can browse through multiple recipes easily.

- **Display detailed recipe**

  - Show the recipe details including cooking time, servings, and ingredients.

- **Change servings functionality**

  - Provide the ability to adjust the number of servings, which will dynamically update the ingredient amounts.

- **Bookmarking functionality**

  - Users can bookmark recipes and view a list of all bookmarked recipes.

- **User recipe uploads**

  - Allow users to upload and save their own custom recipes.

- **Automatic bookmarking of user recipes**

  - Recipes uploaded by users will automatically be bookmarked.

- **Private user recipes**

  - Users can only see their own uploaded recipes, and not those from other users.

- **Bookmark data persistence with local storage**

  - Store bookmarked recipes in the browser using local storage.

- **Load bookmarks on page load**
  - When the app is loaded, saved bookmarks are retrieved from local storage and displayed.
