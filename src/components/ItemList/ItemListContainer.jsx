import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {

  return (
    <div>
      <ItemList greeting={ greeting } />
    </div>
  );
};

export default ItemListContainer;
