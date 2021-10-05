import React from 'react'
import Slider from 'react-touch-drag-slider'
import styled, { createGlobalStyle } from 'styled-components'

// here we are importing some images 
// but the Slider children can be an array of any element nodes, or your own components
import images from './images'


// define some basic styles
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: content-box;
    width: 100%;
  }
  html,body {
    padding: 0;
    margin: 0;
  }
`
// The slider will fit any size container, lets go full screen...
const AppStyles = styled.main`
  height: 160px;
  width: 320px;
`

// Whatever you render out in the Slider will be draggable 'slides'
function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <Slider>
          {images.map(({ url, title }, index) => (
            <img src={url} key={index} alt={title} />
          ))}
        </Slider>
      </AppStyles>
    </>
  )
}

export default App
