import Link from 'next/link'
import styles from './Header.module.scss'
import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
import { useSession, signOut } from 'next-auth/client'
import { useSelector } from 'react-redux'
import { selectItems } from '../../slices/basketSlice'
import { useRouter } from 'next/router'

function Header() {
  const [session] = useSession()
  const items = useSelector(selectItems)
  const router = useRouter()
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo} onClick={() => router.push('/')}>
            <img src="/amazon.png" alt="amazon-clone" />
          </div>
          <div className={styles.list}>
            <p>Today's Deals</p>
            <p>Gift Cards</p>
          </div>
          <div className={styles.info}>
            <p onClick={() => router.push('/orders')}>Orders</p>
            <div
              className={styles.basket}
              onClick={() => router.push('/checkout')}
            >
              <ShoppingCartIcon />
              <span>{items.length}</span>
            </div>

            {session ? (
              <div className={styles.user}>
                <p>Hi, {session.user.name}</p>
                <div className={styles.signout} onClick={() => signOut()}>
                  <LogoutIcon />
                </div>
              </div>
            ) : (
              <Link href="/signin">
                <div className={styles.user}>
                  <UserCircleIcon />
                  <a>Sign In</a>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
