import styles from '../styles/Orders.module.scss'
import { getSession, useSession } from 'next-auth/client'
import moment from 'moment'
import db from '../../firebase'
import OrderItems from '../components/OrderItems'

function Orders({ orders }) {
  const [session] = useSession()

  console.log(orders)

  return (
    <div className="container">
      <div className={styles.title}>
        <h1>Your Orders</h1>

        {session ? (
          <h2>
            {orders.length} {orders.length > 1 ? 'Orders' : 'Order'}
          </h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
      </div>
      <div>
        {orders?.map((item) => {
          return <OrderItems {...item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default Orders

export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  // Get the users logged in credentials...
  const session = await getSession(context)

  if (!session) {
    return {
      props: {},
    }
  }

  // Firebase db
  const stripeOrders = await db
    .collection('users')
    .doc((await session).user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get()

  // Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  )

  return {
    props: {
      orders,
    },
  }
}
