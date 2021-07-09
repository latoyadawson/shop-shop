//is used by ProductList 
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
//take the list of categories retrieved from server and store in global state 
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

// connecting piece of data for the previous two actions we created, 
// in that we want to be able to select a category from the state 
// created by the UPDATE_CATEGORIES action and display products for 
// that category from the list we create from the UPDATE_PRODUCTS action.
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

