import styles from './Banner.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Banner() {
  return (
    <div className={styles.banner}>
      <Carousel
        autoPlay
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slide_1.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slide_2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slide_3.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
