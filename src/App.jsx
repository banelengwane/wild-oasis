import styled from "styled-components"
import GlobalStyle from "./styles/GlobalStyles"
import Button from './ui/Button'
import Input from "./ui/Input"

const H1 = styled.h1`
 font-size: 30px;
 font-weight: 600;
 background-color: yellow;
`

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check Out")}>Check Out</Button>
        <Input type="number" placeholder="Number of Guests" />
        <Input type="number" placeholder="Number of  " />
      </StyledApp>
    </>
  )
}

export default App