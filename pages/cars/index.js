import { Button } from '@material-ui/core'

export default function CarsList() {
  return (
    <>
      <h1>Cars List</h1>
      <li style={{display:'flex', flexDirection:'column', width: '40%'}}>
      <Button variant='contained' color='primary' size='large' href='cars/tesla' style={{margin: '10px'}}> 
        Tesla
      </Button>
      <Button variant='contained' color='primary' size='large' href='cars/lambo' style={{margin: '10px'}}> 
        Lambo
      </Button>
      <Button variant='contained' color='primary' size='large' href='cars/ford' style={{margin: '10px'}}> 
        Ford
      </Button>
      </li>
    </>
    )

}