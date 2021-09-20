import { CheckCircleIcon } from '@heroicons/react/solid'
import styles from '../styles/Success.module.scss'
import { useRouter } from 'next/router'

function Success() {
  const router = useRouter()

  return (
    <div className="container">
      <div className={styles.well}>
        <div className={styles.title}>
          <CheckCircleIcon />
          <h1>Thank you, your order has been confirmed</h1>
        </div>
        <p>
          Hello, Thanks for your order. We’ll let you know once your item(s)
          have dispatched. Your estimated delivery date is indicated below. You
          can view the status of your order or make changes to it by visiting
          your orders
        </p>
        <button className={styles.btn} onClick={() => router.push('/orders')}>
          Go to my orders
        </button>
      </div>
    </div>
  )
}

export default Success
