import styles from './OrderItems.module.scss'
import moment from 'moment'
import Currency from 'react-currency-formatter'
import Clamp from 'react-multiline-clamp'

function OrderItems({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <p className={styles.title}>Order Placed</p>
          <p className={styles.subtitle}>
            {moment.unix(timestamp).format('DD MMM YYYY')}
          </p>
        </div>

        <div>
          <p className={styles.title}>Total</p>
          <p className={styles.subtitle}>
            <Currency quantity={amount} currency="EUR" /> - Next Day Delivery{' '}
            <Currency quantity={amountShipping} currency="EUR" />
          </p>
        </div>

        <p className={styles.items}>{items.length} items</p>
        <p className={styles.order}>
          <Clamp>Order # {id}</Clamp>
        </p>
      </div>

      <div className={styles.body}>
        {images.map((image) => {
          return <img src={image} alt="" className={styles.image} key={image} />
        })}
      </div>
    </div>
  )
}

export default OrderItems
