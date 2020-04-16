import React from 'react';
// import product from './products';
import ProductCard from "./ProductCard";
import AppContext from './context'
import Calculator from './calculator';

function Home(props) {
   const context = React.useContext(AppContext)

   return (
      <div>
         <Calculator />
      </div>
   )
}

export default Home