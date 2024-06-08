import { Container, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import './Slideshow.css'

const Women = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      url: 'https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2020-06-12at18.28.33_1_580x.jpg?v=1591976228'
    },
    {
      url: 'https://images.meesho.com/images/products/295090616/9nn6x_256.webp+9'
    },
    {
      url: 'https://images-static.nykaa.com/uploads/c8baa786-99f6-4d6c-81cc-03e2b10904da.jpg?tr=w-300,cm-pad_resize'
    },
    {
      url: 'https://www.dhanalakshmijewellers.com/wp-content/uploads/2017/05/plain-gold-300x300.jpg'
    },
    {
      url: 'https://images-static.nykaa.com/uploads/b57bda3b-5538-4f16-a859-efb2074dafcf.jpg?tr=w-300,cm-pad_resize'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Z7lnMPA2A3GFGqAsGZUJ4d4iUPy_aocVDg&s'
    },
    {
      url: 'https://m.media-amazon.com/images/I/517njLbiwRL._AC_UY1100_.jpg'
    },
    {
      url: 'https://images.meesho.com/images/products/341597666/glkd3_256.webp'
    },
    {
      url: 'https://i.pinimg.com/564x/83/0f/2b/830f2b48493f72dfa0940082138a6965.jpg'
    },
    {
      url: 'https://img.faballey.com/images/Product/ITN05957Z/1.jpg'
    },
    {
      url: 'https://glamourental.com/cdn/shop/articles/indian-wedding-dresses.jpg?v=1709035668'
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
        src='https://i.pinimg.com/originals/e6/a2/f9/e6a2f9f302b77a0062420cc498e5cd1a.jpg'
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

export default Women
