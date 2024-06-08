import { Container, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import './Slideshow.css'

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      url: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28284140/2024/3/15/cfa612aa-5813-4f2b-8d73-1c933e546ea91710486075218WomensLiftContourSeamlessTights1.jpg'
    },
    {
      url: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25880086/2024/4/11/b332de6f-418d-47a4-b87e-edb05722742e1712819763254-Blissclub-Women-Slim-Fit-Ankle-Length-Sports-Tights-69317128-11.jpg'
    },
    {
      url: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23976344/2023/7/11/cf6d6b67-186a-444a-a2a7-49afebad8a0c1689091586156HRXbyHrithikRoshanWomenOffWhiteMeshRunningNon-MarkingShoes1.jpg'
    },
    {
      url: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27155946/2024/4/2/9f2d23f2-6b13-4b2b-bcb0-cd58c3cfabe21712036875679-TAPE-Womens-Shorts-5061712036875120-1.jpg'
    },
    {
      url: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27368006/2024/5/8/f18f56eb-1fdf-4d05-aeb6-5422fb374e9f1715145898719-Levis-Men-Jeans-8031715145897997-1.jpg'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Z7lnMPA2A3GFGqAsGZUJ4d4iUPy_aocVDg&s'
    },
    {
      url: 'https://m.media-amazon.com/images/I/517njLbiwRL._AC_UY1100_.jpg'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJnsVb6hH3p5UBH_s-fWC4Yn9Tbp2EgA1ug&s'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7f3ZQimkWBZ-WMp25mF2SiGZkzglUU-o5Q&s'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-s9abnaGwL0Fhu7qA-mlfFTuJUv8465Xbag&s'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufQgwMQk9iqtxfUwDPo3I6FCdMbZMcyonEw&s'
    }
  ]

  const prev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const next = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }
  return (
    <Container maxW='100%'>
      <img
        style={{ width: '100%', height: '600px' }}
        src='https://pbs.twimg.com/media/Ek1KlAPVgAAXfvs.jpg'
        alt=''
      />
      <br />
      <br />

      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '30px'
          }}
        >
          <div
            style={{
              display: 'flex',
              // width: '90%',
              gap: '15px',
              justifyContent: 'center'
            }}
          >
            {[
              currentIndex,
              (currentIndex + 1) % images.length,
              (currentIndex + 2) % images.length,
              (currentIndex + 3) % images.length,
              (currentIndex + 4) % images.length,
              (currentIndex + 5) % images.length
            ].map(index => (
              <div key={index}>
                <img
                  src={images[index].url}
                  alt={images[index].title}
                  style={{ height: '310px', width: '300px' }}
                />
                <p>{images[index].title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '200px',
          margin: 'auto'
        }}
      >
        <Button
          variant='outline'
          colorScheme='blue'
          id='prev'
          onClick={prev}
          style={{ height: '50px', textAlign: 'center' }}
          disabled={currentIndex === 0}
        >
          previous
        </Button>
        <Button
          variant='outline'
          colorScheme='blue'
          id='next'
          onClick={next}
          style={{ height: '50px', textAlign: 'center' }}
          disabled={currentIndex === images.length - 1}
        >
          next
        </Button>
      </div>

      <br />
      <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}>
        SHOP BY CATEGORY
      </h1>
      <br />

      <div>
        <SimpleGrid  columns={5}  spacing='10px' className='box1'>
          
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29461276/2024/5/10/41a3c7e8-7437-4f08-8c2b-625781a379981715310037827TokyoTalkiesMaxiDress1.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://cdn0.weddingwire.in/article/5569/original/1280/jpg/39655-wedding-sherwani-online-gautamkhullarphotography-orange.jpeg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23976344/2023/7/11/cf6d6b67-186a-444a-a2a7-49afebad8a0c1689091586156HRXbyHrithikRoshanWomenOffWhiteMeshRunningNon-MarkingShoes1.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://img3.junaroad.com/uiproducts/18168747/pri_175_p-1639114457.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28687366/2024/4/4/878c0f18-b8e4-46df-8db5-3cea97bf9d8b1712243416092TokyoTalkiesEmpireMidiDress1.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29174032/2024/4/24/19167260-b086-4f0c-8984-cbab8ee105c11713982838670KALINIFloralPrintTie-UpNeckJacquardMaxiDress1.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29461276/2024/5/10/41a3c7e8-7437-4f08-8c2b-625781a379981715310037827TokyoTalkiesMaxiDress1.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://cdn0.weddingwire.in/article/5569/original/1280/jpg/39655-wedding-sherwani-online-gautamkhullarphotography-orange.jpeg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23976344/2023/7/11/cf6d6b67-186a-444a-a2a7-49afebad8a0c1689091586156HRXbyHrithikRoshanWomenOffWhiteMeshRunningNon-MarkingShoes1.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://img3.junaroad.com/uiproducts/18168747/pri_175_p-1639114457.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28687366/2024/4/4/878c0f18-b8e4-46df-8db5-3cea97bf9d8b1712243416092TokyoTalkiesEmpireMidiDress1.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29174032/2024/4/24/19167260-b086-4f0c-8984-cbab8ee105c11713982838670KALINIFloralPrintTie-UpNeckJacquardMaxiDress1.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29461276/2024/5/10/41a3c7e8-7437-4f08-8c2b-625781a379981715310037827TokyoTalkiesMaxiDress1.jpg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://cdn0.weddingwire.in/article/5569/original/1280/jpg/39655-wedding-sherwani-online-gautamkhullarphotography-orange.jpeg" alt="" /> </Box>
          <Box  height='280px'> <img style={{height:"100%", width:"100%"}} src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23976344/2023/7/11/cf6d6b67-186a-444a-a2a7-49afebad8a0c1689091586156HRXbyHrithikRoshanWomenOffWhiteMeshRunningNon-MarkingShoes1.jpg" alt="" /> </Box>

        </SimpleGrid>
      </div>
    </Container>
  )
}

export default Slideshow
