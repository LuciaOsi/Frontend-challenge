/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
function Product(props) {
  const { product, vote } = props;

  //Adds a vote to the selected product
  function handlePlus(id) {
    vote(id, 1);
  }

  //Substracts a vote to the selected product
  function handleMinus(id) {
    vote(id, -1);
  }

  return (
    <li>
      <span>
        {product.name} - votes: {product.votes}
      </span>
      <Button
        onClick={() => handlePlus(product.id)}
        variant="success"
        size="sm"
      >
        +
      </Button>
      <Button
        onClick={() => handleMinus(product.id)}
        variant="danger"
        size="sm"
      >
        -
      </Button>
    </li>
  );
}

export function Grocery({ products }) {
  //To the given list of products we add a property "id" in order to identify them better
  products.forEach((product, index) => {
    product["id"] = index;
  });
  const [groceryProducts, setProducts] = useState(products);

  // Parameters: productId and vote.
  // The vote will be 1 if we want to add a vote or -1 if we want to substract a vote
  // The selected product is find by id
  // Updates the products state
  function Vote(productId, vote) {
    if (productId != null) {
      const groceryList = [...groceryProducts].map((product) => {
        if (product.id === productId) product.votes += vote;
        return product;
      });
      setProducts(groceryList);
    }
  }

  return (
    <ul>
      {groceryProducts.map((p) => (
        <Product product={p} vote={Vote}></Product>
      ))}
    </ul>
  );
}
