import styles from "./CartWidget.module.css"
import cartImage from "../../assets/images/cart-image.png"

const CartWidget = () => {
  return (
    <div className={ styles.containerCart }>
        <img className={ styles.cartImage } src={cartImage} alt="Carrito" />
        <span className={ styles.cartQuantity }>0</span>
    </div>
  )
}

export default CartWidget