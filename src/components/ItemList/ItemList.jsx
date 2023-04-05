import { Typography } from "@mui/material"
import styles from "./ItemList.module.css"

const ItemList = ( { greeting } ) => {

  return (
    <div className={ styles.containerItemList }>
        <Typography variant="h2">{ greeting }</Typography>
    </div>
  )
}

export default ItemList