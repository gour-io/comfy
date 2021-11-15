import React from 'react'
import styled from 'styled-components'

const Testing = () => {
  return (
    <Wrapper>
      <h3>Hello World</h3>
      <p>Hello People</p>
      <button className=".btn">Click me</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3 {
    color: red;
  }
  p {
    font-weight: bold;
    border-right: 4px solid black;
    width: 95px;
    background: #999;
    color: white;
  }
  btn {
    background: green;
    color: white;
  }
`
export default Testing
