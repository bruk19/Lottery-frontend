import { MoralisProvider } from "react-moralis";
// import HeaderKit from "./components/HeaderKit";
import LotteryIntrance from "./components/LotteryIntrance";
import Header from "./Header";
function App() {
  return (
    <MoralisProvider initializeOnMount={false} >
      <Header />
      <LotteryIntrance />
    </MoralisProvider>
  );
}

export default App;
