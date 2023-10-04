# Basic Store
This is a Sample react native application made for a basic store app template

# Setup

## Requrements
- Node - latest of v16+
- Yarn 2

## How To

1 - Install Node JS. Use NVM or [Node JS Official Website](https://nodejs.org/en). Node v16 is recommended.

(Optional) You can also set up the android and ios development enviroments if you are planning to run the application on simulators. Follow [Getting Started Guide](https://reactnative.dev/docs/environment-setup?guide=native&package-manager=yarn)
Make sure to install XCode and Android Studio respectively for iOS simulator and Android simulator.

2 - Enable yarn 2 if it isn't already - Node v16.9+ Required

Node 16 comes with yarn 2 integrated. Enable yarn by 

```sh
corepack enable
```
3 - Clone the repository

```sh
git clone https://github.com/unimicro/UniEconomyReact.git
```

4 - Change the working dir to BasicStore.

5 - Install npm dependencies

```sh
yarn install
```

6 - Run the project using following commands

   **iOS**

```sh
yarn ios
```
   **Android**

```sh
yarn android
```
  **On your own device**

```sh
yarn start
```
  wait for server to start and Scan the QR code from the device
  
  ## Features

  ### Basic Functionality

  App has 5 Screens. 
  - Splash Screen\
      Shows until first batch of products load to the app. Here all the pre-initialization has to be done
  - Home Screen\
      Displays all available products in a Grid view. Initially loads 15 products. and loads as required when scrolling down
  - Product Details Screen\
      When clicked from the Home Screen displays the specific product in details. From this page all extra information is loaded. The loaded extra data is not persited.\
      User can add the product to the cart by clicking on "Add to Cart" button. Added Item cannot be duplicated in Cart List. Only increments in quantity
  - Cart Screen\
      User can view the items in cart and add, reduce quantity or remove the item from card. Finally can proceed to check out
  - Checkout Screen /Confirmation Screen\
      This can be thought as the payment implementation required screen. Currently this screen only shows the total and upon "Pay" Click cart will clear and return to Cart Screen

  ### Demonstrated Best Practices
  - Code kept clean and consice for better clairty.\
    Each component has on Single Responsibility. Screens have the navigation and event handling. Buisness logic is implemented in reducers. Each UI that can be categorized is broken down to components. 
  - Type Checks.\
    All APIs data are validated to be in the desired format. Reducers types provided for all actions and reducers. Navigation Screens and Params are type checks as well.
  - Avoid unnessary data loading and persisting.\
    Initial Product List Page loads only limted items at one time and rest loads as the user scrolls through. Each products extra data and other images only loads when that product is viewed in details page.\
    Currently not persisting extra data assuming one products is rarely more than once.
  - Usage with Slices in Redux.\
    Development is with less boilerplate code using slices to manage data loaded states. I'm not using React Query because I wanted to manually manage Error handling as well. but it could be a future improvement
  - Implementation of Husky.\
    to force using quality code husky is configred with a pre-commit hook which make sure all code are accoring to defined lint rules. 
      
  ### Improvements Planned
  - Introduce Variations to Products and only duplicate one product in cart if variations are different
  - Introduce and error boundary to handle errors 
  - Introduce automated testing
  - Implement a product search
  - Implement Catogorization to Products


  
   
