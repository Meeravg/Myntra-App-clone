import { useState } from 'react' // Importing useState hook
import { Link, useNavigate } from 'react-router-dom' // Importing Navigate for navigation
import { Link as ReactRouterLink } from 'react-router-dom' // Importing ReactRouterLink for links
import { Link as ChakraLink, Flex, Button } from '@chakra-ui/react' // Importing Chakra UI components
import './Dropdown.css' // Importing CSS file
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import Drawer1 from '../Pages/Drawer1'


export default function Navbar () {
  // State for controlling dropdown visibility
  const [showMenDropdown, setShowMenDropdown] = useState(false)
  const [showWomenDropdown, setShowWomenDropdown] = useState(false)
  const [showBeautyDropdown, setShowBeautyDropdown] = useState(false)
  const [showHomeLivingDropdown, setShowHomeLivingDropdown] = useState(false)
  const [showStudioDropdown, setShowStudioDropdown] = useState(false)

  const navigate = useNavigate()

  const { logout } = useContext(AuthContext)

  // Functions to toggle dropdown visibility
  const toggleMenDropdown = () => {
    setShowMenDropdown(!showMenDropdown)
  }
  const toggleWomenDropdown = () => {
    setShowWomenDropdown(!showWomenDropdown)
  }
  const toggleBeautyDropdown = () => {
    setShowBeautyDropdown(!showBeautyDropdown)
  }
  const toggleHomeLivingDropdown = () => {
    setShowHomeLivingDropdown(!showHomeLivingDropdown)
  }
  const toggleStudioDropdown = () => {
    setShowStudioDropdown(!showStudioDropdown)
  }

  // Function to handle logout click
  function handleClickLogout () {
    logout()
    return navigate('/login')
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '99%',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        height: '60px',
      }}
    >
      <div>
        <img
          style={{ width: '100px' , height:"60px"}}
          src='https://images.indianexpress.com/2021/01/myntra.png'
          alt=''
        />
      </div>
      <Flex
        align='center'
        justify={'space-around'}
        padding={4}
        fontSize={'12px'}
        fontWeight={'bold'}
        width={'650px'}
      >
        {/* Dropdown menu for each navbar item */}
        <div style={{ width: '100%' }}>
          <nav className='navbar'>
            <ul
              className='nav-list'
              style={{
                marginTop: '-15px',
                display: 'flex',
                justifyContent: 'space-around'
              }}
            >
              {/* MEN */}
              <li
                className='nav-item'
                onMouseEnter={toggleMenDropdown}
                onMouseLeave={toggleMenDropdown}
              >
                <ChakraLink as={ReactRouterLink} to={'/men'}>MEN</ChakraLink>
                {/* Dropdown content */}
                {showMenDropdown && (
                  <div className='dropdown'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                      }}
                    >
                      <div className='first'>
                        <h5>Topwere</h5>
                        <p>T-Shirt</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweatshirts</p>
                        <p>Jackets</p>
                        <p>Sweter</p>
                        <p> Suits</p>
                        <p> Blazers</p>
                        <p> Jumpsuits</p>
                      </div>
                      <div className='first'>
                        <h5>Bottomwere</h5>
                        <p> Trousers</p>
                        <p> Shorts</p>
                        <p> Track</p>
                        <p> Jeans</p>
                        <p> Casual</p>
                        <p> Formal</p>
                        <p> Sweat</p>
                        <p> Skirts</p>
                      </div>
                      <div className='first'>
                        <h5>Footwere</h5>
                        <p> Sandals</p>
                        <p> Flip</p>
                        <p> Formal</p>
                        <p> Sports</p>
                        <p> Casual</p>
                        <p> Formal</p>
                        <p> Sandals</p>
                        <p> FlipFlop</p>
                        <p> Formal</p>
                      </div>
                      <div className='first'>
                        <h5>Sports & Activewere</h5>
                        <p>Sneakers</p>
                        <p> Tracksuit</p>
                        <p>Sweamer</p>
                        <p> Joggers</p>
                        <p> Formal</p>
                        <p> Sports</p>
                        <p> Casual</p>
                        <p> Formal</p>
                      </div>
                      <div className='first'>
                        <h5>Fasion & Accessories</h5>
                        <p>Wallets</p>
                        <p>Belts</p>
                        <p> Shoes</p>
                        <p> Sandals</p>
                        <p> Trimmers</p>
                        <p>Perfumes</p>
                        <p> Gloves</p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* WOMEN */}
              <li
                className='nav-item'
                onMouseEnter={toggleWomenDropdown}
                onMouseLeave={toggleWomenDropdown}
              >
                <ChakraLink as={ReactRouterLink} to={'/women'}> WOMEN</ChakraLink>
                {/* Dropdown content */}
                {showWomenDropdown && (
                  <div
                    className='dropdown'
                    style={{
                      position: 'absolute',
                      backgroundColor: ' rgb(172, 172, 156',
                      top: '160%',
                      display: 'npne',
                      width: '1410px',
                      marginLeft: '-180px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                      }}
                    >
                      <div className='first'>
                        <h5>Indian</h5>
                        <p>T-Shirt</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweatshirts</p>
                        <p>Jackets</p>
                        <p>Sweter</p>
                        <p> Suits</p>
                        <p> Blazers</p>
                        <p> Jumpsuits</p>
                      </div>
                      <div className='first'>
                        <h5>Westernwere</h5>
                        <p> Trousers</p>
                        <p> Shorts</p>
                        <p> Track</p>
                        <p> Jeans</p>
                        <p> Casual</p>
                        <p> Formal</p>
                        <p> Sweat</p>
                        <p> Skirts</p>

                      </div>
                      <div className='first'>
                        <h5>Footwere</h5>
                        <p> Sandals</p>
                        <p> Flip</p>
                        <p> Formal</p>
                        <p> Sports</p>
                        <p> Casual</p>
                        <p> Formal</p>
                        <p> Sandals</p>
                        <p> FlipFlop</p>
                        <p> Formal</p>
                        <p>Track Shooes</p>
                      </div>
                      <div className='first'>
                        <h5>Jewellery</h5>
                        <p>Sneakers</p>
                        <p> Tracksuit</p>
                        <p>Sweamer</p>
                        <p> Joggers</p>
                        <p> Formal</p>
                        <p> Sports</p>
                        <p> Casual</p>
                        <p> Formal</p>
                      </div>
                      <div className='first'>
                        <h5>Fancy Dress</h5>
                        <p>Wallets</p>
                        <p>Belts</p>
                        <p> Shoes</p>
                        <p> Sandals</p>
                        <p> Trimmers</p>
                        <p>Perfumes</p>
                        <p> Gloves</p>
                        <p> Head</p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* BEAUTY */}
              <li
                className='nav-item'
                onMouseEnter={toggleBeautyDropdown}
                onMouseLeave={toggleBeautyDropdown}
                >
                  <ChakraLink as={ReactRouterLink} to={'/beauty'}> BEAUTY</ChakraLink>
                {/* Dropdown content */}
                {showBeautyDropdown && (
                  <div
                    className='dropdown'
                    style={{
                      position: 'absolute',
                      top: '160%',
                      backgroundColor: ' rgb(172, 172, 156',
                      display: 'npne',
                      width: '1410px',
                      marginLeft: '-290px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                      }}
                    >
                      <div className='first'>
                        <h5>Boys Clothing</h5>
                        <p>T-Shirt</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweatshirts</p>
                        <p>Jackets</p>
                        <p>Sweter</p>
                        <p> Suits</p>
                        <p> Blazers</p>
                        <p> Jumpsuits</p>
                      </div>
                      <div className='first'>
                        <h5>Girls Clothing</h5>
                        <p> Trousers</p>
                        <p> Shorts</p>
                        <p> Track</p>
                        <p> Jeans</p>
                        <p> Casual</p>
                        <p> Formal</p>
                        <p> Sweat</p>
                        <p> Skirts</p>
                      </div>
                      <div className='first'>
                        <h5>Footwere</h5>
                        <p> Sandals</p>
                        <p> Flip</p>
                        <p> Formal</p>
                        <p> Sports</p>
                        <p> Casual</p>
                        <p> Formal</p>
                        <p> Sandals</p>
                        <p> FlipFlop</p>
                        <p> Formal</p>
                      </div>
                      <div className='first'>
                        <h5>Kids Activewere</h5>
                        <p>Sneakers</p>
                        <p> Tracksuit</p>
                        <p>Sweamer</p>
                        <p> Joggers</p>
                        <p> Formal</p>
                        <p> Sports</p>
                        <p> Casual</p>
                        <p> Formal</p>
                      </div>
                      <div className='first'>
                        <h5>Toys & Games</h5>
                        <p>Wallets</p>
                        <p>Belts</p>
                        <p> Shoes</p>
                        <p> Sandals</p>
                        <p> Trimmers</p>
                        <p>Perfumes</p>
                        <p> Gloves</p>
                        <p> Head</p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* HOME & LIVING */}
              <li
                className='nav-item'
                onMouseEnter={toggleHomeLivingDropdown}
                onMouseLeave={toggleHomeLivingDropdown}
              >
                <ChakraLink as={ReactRouterLink} to={'/homeliving'}>HOME & LIVING</ChakraLink>
                {/* Dropdown content */}
                {showHomeLivingDropdown && (
                  <div
                    className='dropdown'
                    style={{
                      position: 'absolute',
                      top: '160%',
                      backgroundColor: ' rgb(172, 172, 156',
                      display: 'npne',
                      width: '1410px',
                      marginLeft: '-380px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                      }}
                    >
                      <div className='first'>
                        <h5>Home Decor</h5>
                        <p>T-Shirt</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweatshirts</p>
                        <p>Jackets</p>
                        <p>Sweter</p>
                        <p> Suits</p>
                        <p> Blazers</p>
                        <p> Jumpsuits</p>
                      </div>
                      <div className='first'>
                        <h5>Bath</h5>
                        <p> Trousers</p>
                        <p> Shorts</p>
                        <p> Track</p>
                        <p> Jeans</p>
                        <p> Casual</p>
                        <p> Formal</p>
                        <p> Sweat</p>
                        <p> Skirts</p>
                      </div>
                      <div className='first'>
                        <h5>Lamps & Lighting</h5>
                        <p> Sandals</p>
                        <p> Flip</p>
                        <p> Formal</p>
                        <p> Sports</p>
                        <p> Casual</p>
                        <p> Formal</p>
                        <p> Sandals</p>
                        <p> FlipFlop</p>
                        <p> Formal</p>
                      </div>
                      <div className='first'>
                        <h5>Flooring</h5>
                        <p>Sneakers</p>
                        <p> Tracksuit</p>
                        <p>Sweamer</p>
                        <p> Joggers</p>
                        <p> Formal</p>
                        <p> Sports</p>
                        <p> Casual</p>
                        <p> Formal</p>
                      </div>
                      <div className='first'>
                        <h5>Storage</h5>
                        <p>Wallets</p>
                        <p>Belts</p>

                        <p> Sandals</p>
                        <p> Trimmers</p>
                        <p>Perfumes</p>
                        <p> Gloves</p>
                        <p> Head</p>
                        <p> Hats</p>

                        <p> Sunglasses</p>
                        <p> Watches</p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* STUDIO */}
              <li
                className='nav-item'
                onMouseEnter={toggleStudioDropdown}
                onMouseLeave={toggleStudioDropdown}
              >
                <ChakraLink as={ReactRouterLink} to={'/studio'}>STUDIO</ChakraLink>
                {/* Dropdown content */}
                {showStudioDropdown && (
                  <div
                    className='dropdown'
                    style={{
                      position: 'absolute',
                      top: '160%',
                      backgroundColor: ' rgb(172, 172, 156',
                      display: 'npne',
                      width: '1410px',
                      marginLeft: '-520px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                      }}
                    >
                      <div className='first'>
                        <h5>Topwere</h5>
                        <p>T-Shirt</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweatshirts</p>
                        <p>Jackets</p>
                        <p>Sweter</p>
                        <p> Suits</p>
                        <p> Blazers</p>
                        <p> Jumpsuits</p>
                      </div>
                      <div className='first'>
                        <h5>Bottomwere</h5>
                        <p> Trousers</p>
                        <p> Shorts</p>
                        <p> Track</p>
                        <p> Jeans</p>
                        <p> Casual</p>
                        <p> Formal</p>
                        <p> Sweat</p>
                        <p> Skirts</p>
                      </div>
                      <div className='first'>
                        <h5>Footwere</h5>
                        <p> Sandals</p>
                        <p> Flip</p>
                        <p> Formal</p>
                        <p> Sports</p>
                        <p> Casual</p>
                        <p> Formal</p>
                        <p> Sandals</p>
                        <p> FlipFlop</p>
                        <p> Formal</p>
                      </div>
                      <div className='first'>
                        <h5>Sports & Activewere</h5>
                        <p>Sneakers</p>
                        <p> Tracksuit</p>
                        <p>Sweamer</p>
                        <p> Joggers</p>
                        <p> Formal</p>
                        <p> Sports</p>
                        <p> Casual</p>
                        <p> Formal</p>
                      </div>
                      <div className='first'>
                        <h5>Fasion & Accessories</h5>
                        <p>Wallets</p>
                        <p>Belts</p>
                        <p> Shoes</p>
                        <p> Sandals</p>
                        <p> Trimmers</p>
                        <p>Perfumes</p>
                        <p> Gloves</p>
                        <p> Head</p>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </Flex>

      {/* Search input */}
      <div>
        <input
          style={{
            width: '500px',
            marginTop: '10px',
            padding: '5px 20px',
            backgroundColor: 'rgb(245,245,246)'
          }}
          type='text'
          placeholder='Search for products, brands and more'
        />
      </div>

      <br />

      {/* Logout Button */}
      <Button
        margin='9px'
        variant={'outline'}
        colorScheme='red'
        onClick={handleClickLogout}
      >
        Logout
      </Button>

      {/* Profile, Wishlist, Bag */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginLeft: '30px',
          width: '180px',
          justifyContent: 'space-between'
        }}
      >
        <div onClick={() => navigate('/Drawer1')}>
          <Drawer1 />
          
        </div>
        <div>
          <i style={{ fontSize: '30px' }} className='bx bx-heart'></i>
          <p
            style={{ fontSize: '13px', fontWeight: 'bold', marginTop: '-1px' }}
          >
            Wishlist
          </p>
        </div>
        <div>
          <i style={{ fontSize: '30px' }} className='bx bx-shopping-bag'></i>
          <p
            style={{ fontSize: '13px', fontWeight: 'bold', marginTop: '-1px' }}
          >
            Bag
          </p>
        </div>
      </div>
    </div>
  )
}
