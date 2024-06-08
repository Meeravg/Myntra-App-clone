import React from 'react'
import { HStack, useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'
import { useContext } from 'react'

const Drawer1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    logout,
    authDetails: { isLogedIn }
  } = useContext(AuthContext)

  return (
    <>
      <div onMouseMove={onOpen}>
        <i style={{ fontSize: '30px' }} className='bx bx-user'></i>
        <p style={{ fontSize: '13px', fontWeight: 'bold', marginTop: '-1px' }}>
          Profile
        </p>
      </div>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Welcome</DrawerHeader>
          <p style={{ marginLeft: '10px' }}>To Login or Logout</p>
          <DrawerBody>
            <HStack spacing={2}>
              {/* Use RouterLink to navigate to the login page */}
              { !isLogedIn &&
                <Button
                  as='div'
                  variant='outline'
                  colorScheme='red'
                  onClick={() => {
                    location.href = '/login'
                  }}
                >
                  Login
                </Button>
              }
              <Button
                variant='outline'
                colorScheme='red'
                onClick={() => {
                  logout()
                  location.href = '/login'
                }}
              >
                Logout
              </Button>
            </HStack>
            <br />
            <br />
            <hr />
            <p>Orders</p>
            <p>Wishlists</p>
            <p>Gift Cards</p>
            <p>Contact Us</p>
            <p>Mynta Credit</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Drawer1
