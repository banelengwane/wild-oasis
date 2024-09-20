import styled from "styled-components"
import GlobalStyle from "./styles/GlobalStyles"
import Button from './ui/Button'
import Input from "./ui/Input"
import Heading from "./ui/Heading"

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Heading as='h1'>The Wild Oasis</Heading>
        <Heading as='h3'>Check in and out</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check Out")}>Check Out</Button>
        <Heading as='h2'>Form</Heading>
        <Input type="number" placeholder="Number of Guests" />
        <Input type="number" placeholder="Number of  " />
      </StyledApp>
    </>
  )
}

export default App
