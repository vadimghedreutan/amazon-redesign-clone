import '../styles/globals.scss'
import Layout from '../components/Layout'
import { Provider as AuthProvider } from 'next-auth/client'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

const progress = new ProgressBar({
  size: 4,
  color: '#FDAE16',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
