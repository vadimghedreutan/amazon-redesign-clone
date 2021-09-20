import styles from './Product.module.scss'
import Product from './Product'

function ProductFeed({ products }) {
  return (
    <>
      <h4 className={styles.title}>Fake Api Store</h4>
      <div className={styles.products}>
        {products.slice(0, 4).map((item) => {
          return <Product {...item} key={item.id} />
        })}

        <div className={styles.advertis}>
          <img src="/images/ad.jpg" alt="" />
        </div>

        <div className={styles.single}>
          {products.slice(4, 5).map((item) => {
            return <Product {...item} key={item.id} />
          })}
        </div>

        {products.slice(5, products.length).map((item) => {
          return <Product {...item} key={item.id} />
        })}
      </div>
    </>
  )
}

export default ProductFeed
