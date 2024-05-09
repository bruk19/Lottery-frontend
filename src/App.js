import { MoralisProvider } from "react-moralis";
import HeaderKit from "./components/HeaderKit";
// import Header from "./Header";
function App() {
  return (
    <MoralisProvider initializeOnMount={false} >
      <HeaderKit />
    </MoralisProvider>
  );
}

export default App;
