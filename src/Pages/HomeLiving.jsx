import { SimpleGrid, Box } from '@chakra-ui/react'
import './HomeLiving.css'
export default function HomeLiving () {
  return (
    <div>
      <br />

      <img
        style={{ height: '500px', width: '100%' }}
        src='https://media.architecturaldigest.com/photos/571e94ac818277135ff915b6/16:9/w_2580,c_limit/classical-rooms_09.jpg'
        alt=''
      />
      <br />
      <h1
        style={{ textAlign: 'center', fontSize: '40px', fontFamily: 'inherit' }}
      >
        NICE TO SEE YOU, COME ON IN!
      </h1>

      <br />
      <br />
      <div style={{display:"flex"}}>
        <div>
          <SimpleGrid className='homeLiving' columns={2} spacing={10}>
            <Box className='box'>
              <img
                src='https://cdn.pixabay.com/photo/2016/11/18/14/25/bed-1834916_640.jpg'
                alt=''
              />
              <h1>Bed Lines</h1>
            </Box>
            <Box className='box'>
              <img
                src='https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?cs=srgb&dl=pexels-pixabay-271816.jpg&fm=jpg'
                alt=''
              />
              <h1>Furnishings</h1>
            </Box>
            <Box className='box'>
              <img
                src='https://m.media-amazon.com/images/I/81aeujpIB+L._AC_UF894,1000_QL80_.jpg'
                alt=''
              />
              <h1>Art & Decor</h1>
            </Box>
            <Box className='box'>
              <img
                src='https://media.istockphoto.com/id/1202324344/photo/four-different-color-lights-set-up-in-the-living-room.jpg?s=612x612&w=0&k=20&c=qOc-iesZAqJRmSnfG1FB73FNooNpGveJRAcyNcJWXIM='
                alt=''
              />
              <h1>Lamps & Lighting</h1>
            </Box>
            <Box className='box'>
              <img
                src='https://media.designcafe.com/wp-content/uploads/2021/11/28232416/spacious-open-kitchen-designs-with-dining-room-for-a-complete-family-meal.jpg'
                alt=''
              />
              <h1>Kitchen & Dining</h1>
            </Box>
            <Box className='box'>
              <img
                src='https://img.freepik.com/free-photo/beauty-product-still-life_23-2147817665.jpg'
                alt=''
              />
              <h1>Bath</h1>
            </Box>
          </SimpleGrid>
        </div>

        <p className='homeLiving2'>
          
          <p>Furnishings & Bed Linen</p>
          <br />
          <p>Bed Sheets</p>
          <p>Bedding Sets & Bed Covers</p>
          <p>Blankets, Quilts & Dohars</p>
          <p>Pillows & Pillow Covers</p>
          <p> Bed Covers</p>
          
          <p> Furnishings & Bed Linen  </p>
          <p>Bed Sheets</p>
          <p>Bedding Sets & Bed Covers</p>
          <p>Blankets, Quilts & Dohars</p>
          <p>Pillows & Pillow Covers</p>
          <p>Cushions & Cushion Covers</p>
          <p>Curtains</p>
          <br />
          <p>Mats & Dhurries</p>
          <br />
          <p>Carpets</p>
          <p>Bath & Bed Linen</p>
          <p>Towels & Towel Sets</p>
          <p>Bath Robes</p>
          <p>Bathroom Accessories</p>
          <p>Shower Curtains </p>


            </p>
        </div>

      </div>
    
    
  )
}
