import { Button } from '@material-ui/core'

export default function CarsList({ cars }) {
  console.log('See them here?', cars)

  return (
    <>
      <h1>Cars List</h1>
      <li style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
        {cars.map(car => {
          return (<Button variant='contained' color='primary' size='large' href={`cars/${car}`} style={{ margin: '10px' }}>
            {car}
          </Button>
          )
        })}
      </li>
    </>
  )

}

export async function getStaticProps({ params }) {
  const req = await fetch('http://localhost:3000/cars.json')
  const data = await req.json()

  return {
    props: { cars: data }
  }


}