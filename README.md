# Application State with Redux

Author: Ryan Emmans

## Summary of Problem Domain

### Virtual Store

Phase 1: For this assignment, you will be starting the process of creating an e-Commerce storefront using React with Redux, coupled with your live API server.

### **Phase 1 Requirements**

Setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
- As a user, I want to choose a category and see a list of all available products matching that category.
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

## Links to application deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/ef975501-c26f-4689-a99a-6da66f0aca2d/deploy-status)](https://ryanemmans-storefront.netlify.app/)  
[GitHub Actions](https://github.com/ryanemmans/storefront/actions)  
[Pull Requests](https://github.com/ryanemmans/storefront/pulls?q=is%3Apr+is%3Aclosed)

## UML

![Virtual Store UML](./img/virtual-store.png)

## Technical Requirements / Notes

- Create a visually appealing site using Material UI
- Use a Redux Store to manage the state of categories and items in the store
- Display a list of categories from state
- When the user selects (clicks on) a category …
  - Identify that category as selected (change of class/display)
  - Show a list of products associated with the category

### Application Architecture

- Begin with creating your application using create-react-app
- Install Material UI as a dependency
- Write an App component that serves as the container for all sub-components of this application
  - A `<Header>` component which shows the name of your virtual store
  - A `<Footer>` component which shows your copyright and contact information
  - A `<Categories>` component
    - Shows a list of all categories
    - Dispatches an action when one is clicked to “activate” it
  - A `<Products>` component
    - Displays a list of products associated with the selected category

### Constructing Redux Store

- Categories
  - State should contain a list of categories as well as the active category
    - Each category should have a normalized name, display name, and a description
  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this action is dispatched
- Products
  - State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count
  - Create an action that will trigger when the active category is changed
    - HINT: Multiple reducers can respond to the same actions
  - Create a reducer that will filter the products list based on the active category
- Active Category
  - State should store active category
    - Other components (products, etc) might need to reference this
