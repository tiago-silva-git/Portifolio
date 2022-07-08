import  Header  from './components/Header/Header'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';

function App() {
  return (
    <>
    <GlobalStyle/>
     <Header/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   box-sizing: border-box;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default App;
