import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Car(props) {
  const { car } = props
  console.log(props)
  const router = useRouter()
  const { id } = router.query

  //If page is not pre rendered but exists this is returned while it loads
  if (router.isFallback) {
    return <div>Loading ...</div>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{car.color} {car.id}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {id}
        </h1>

        <img src={car.image} width="300px" />

      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const req = await fetch('http://localhost:3000/cars.json')
  const data = await req.json()

  // const paths = data.map((car) => {
  //   return {
  //     params: {
  //       id: car
  //     }
  //   }
  // })

  //console.log(paths)

  return {
    paths: [{params: {id: 'tesla'}}],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  //context is the outter obj that gets passed to this function which contains params obj
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  }
}