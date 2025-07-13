import styles from './ProductCard.module.css'
function ProductCard({name, price, isInStock}){
   return(
    <div className={styles.cardItem}>
        <img src="https://placehold.co/300x200" className={styles.cardImg}/>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardPrice}>${price}</p>
        {isInStock ? <p className={styles.inStock}> In Stock</p> : <p className={styles.outStock}> Out of Stock</p>}
    </div>
   );
}

export default ProductCard;