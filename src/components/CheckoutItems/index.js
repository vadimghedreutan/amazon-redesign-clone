import styles from './CheckItems.module.scss'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { Rating } from 'react-simple-star-rating'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../../slices/basketSlice'

function CheckoutItems({ id, title, price, image, rating, bestSeller }) {
  const dispatch = useDispatch()

  const removeItemFromBasket = () => {
    // Remove item from REDUX
    dispatch(removeFromBasket({ id }))
  }
  return (
    <div className={styles.items}>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <div className={styles.middleBox}>
        <h4>{title}</h4>
        {Array(rating).map((item, index) => {
          return (
            <div key={index}>
              <Rating ratingValue={item.rate} size={16} />
            </div>
          )
        })}
        <div className={styles.delete}>
          <p onClick={removeItemFromBasket}>Delete from basket</p>
        </div>
      </div>
      <div>
        <p className={styles.price}>
          <Currency currency="EUR" quantity={price} />
        </p>
      </div>
      {bestSeller && (
        <div className={styles.prime}>
          <p>Best Seller</p>
        </div>
      )}
    </div>
  )
}

export default CheckoutItems
