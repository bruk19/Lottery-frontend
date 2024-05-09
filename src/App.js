import { MoralisProvider } from "react-moralis";
import Header from "./Header";
function App() {
  return (
    <MoralisProvider initializeOnMount={false} >
      <Header />
    </MoralisProvider>
  );
}

export default App;
