import { useState } from 'react'
import Image from 'next/image'
import styles from './Product.module.scss'
import { Rating } from 'react-simple-star-rating'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../slices/basketSlice'

function Product({ id, title, price, image, rating }) {
  const [bestSeller] = useState(Math.random() < 0.5)
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      image,
      rating,
      bestSeller,
    }
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product))
  }

  return (
    <div className={styles.product}>
      <Image src={image} width={250} height={250} objectFit="contain" />
      <h2>{title}</h2>
      {Array(rating).map((item, index) => {
        return (
          <div key={index}>
            <Rating ratingValue={item.rate} size={16} />
          </div>
        )
      })}
      <div className={styles.price}>
        <p>
          <Currency currency="EUR" quantity={price} />
        </p>
        <button className={styles.btn} onClick={addItemToBasket}>
          Add to Basket
        </button>
      </div>

      {bestSeller && (
        <div className={styles.prime}>
          <p>Best Seller</p>
        </div>
      )}
    </div>
  )
}

export default Product
