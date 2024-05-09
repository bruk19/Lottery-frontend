import { MoralisProvider } from "react-moralis";
import HeaderKit from "./components/HeaderKit";
import LotteryIntrance from "./components/LotteryIntrance";
// import Header from "./Header";
function App() {
  return (
    <MoralisProvider initializeOnMount={false} >
      <HeaderKit />
      <LotteryIntrance />
    </MoralisProvider>
  );
}

export default App;
