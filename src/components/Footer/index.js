import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.content}>
            <h2>Go to Know Us</h2>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>About us</p>
            <p>Blog</p>
            <p>Sustainability</p>
            <p>Imprint</p>
          </div>
          <div className={styles.content}>
            <h2>Make Money with US</h2>
            <p>Sell on Amazon</p>
            <p>Sell on Amazon Business</p>
            <p>Sell on Amazon Handmade</p>
            <p>Associates Programme</p>
            <p>Fulfilment by Amazon</p>
            <p>Seller Fulfilled Prime</p>
            <p>Advertise Your Products</p>
            <p>Independently Publish with Us</p>
            <p>Amazon Pay</p>
          </div>
          <div className={styles.content}>
            <h2>Amazon Payment Methods</h2>
            <p>Amazon.de Visa Card</p>
            <p>Shop with points</p>
            <p>Amazon Business Amex Card</p>
            <p>Credit Card</p>
            <p>Gift Cards</p>
            <p>Payment by Invoice</p>
            <p>Direct Debit</p>
            <p>Amazon Currency Converter</p>
            <p>Top Up Your Account</p>
            <p>Top Up Your Account in Store</p>
          </div>
          <div className={styles.content}>
            <h2>Let Us Help You</h2>
            <p>COVID-19 and Amazon</p>
            <p>Track Packages or View Orders</p>
            <p>Delivery Rates & Policies</p>
            <p>Amazon Prime</p>
            <p>Returns & Replacements</p>
            <p>Recycling</p>
            <p>Manage Your Content and Devices</p>
            <p>Amazon Mobile App</p>
            <p>Amazon Assistant</p>
            <p>Customer Service</p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Conditions of Use & Sale</p>
        <p>Privacy Notice</p>
        <p>Imprint</p>
        <p>Cookies Notice</p>
        <p>Interest-Based Ads Notice</p>
        <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  )
}

export default Footer
