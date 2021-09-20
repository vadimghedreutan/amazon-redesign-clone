import styles from '../styles/Checkout.module.scss'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutItems from '../components/CheckoutItems'
import { useSession } from 'next-auth/client'
import Currency from 'react-currency-formatter'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
const stripePromise = loadStripe(process.env.stripe_public_key)

function Checkout() {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const [session] = useSession()

  const createCheckoutSession = async () => {
    const stripe = await stripePromise

    // Call the backend to create a checkout session...
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items,
      email: session.user.email,
    })

    // Redirect user/customer to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })

    if (result.error) {
      alert(result.error.message)
    }
  }

  return (
    <div className="container">
      <div className={styles.title}>
        <h1>
          {items.length === 0
            ? 'Your Amazon Basket is empty.'
            : 'Shopping Basket'}
        </h1>
      </div>
      <div className={styles.checkout}>
        <div className={styles.left}>
          <div>
            {items.map((item, i) => {
              return <CheckoutItems {...item} key={i} />
            })}
          </div>
        </div>
        {items.length > 0 && (
          <div className={styles.right}>
            <div className={styles.amount_box}>
              <h2>
                Subtotal ({items.length} items):{' '}
                <span>
                  <Currency currency="EUR" quantity={total} />
                </span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`${styles.btn} ${
                  !session && `${styles.btn_disable}`
                }`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout
