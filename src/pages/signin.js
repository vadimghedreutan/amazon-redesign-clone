import styles from '../styles/Signin.module.scss'

import { providers, signIn } from 'next-auth/client'
export default function SignIn({ providers }) {
  return (
    <div className={styles.signin}>
      <div className={styles.container}>
        <h1>Sign in</h1>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className={styles.btn}
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: `${window.location.origin}`,
                })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  return { props: { providers: await providers() } }
}
