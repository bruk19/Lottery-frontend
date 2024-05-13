import React from 'react';
import { useWeb3Contract } from "react-moralis";

export default function LotteryIntrance() {
  const {
    runContractFunction: enterRaffle
  } = useWeb3Contract({
    abi: //,
    contractAddres: //,
    functionName: //,
    params: {},
    msgValue: //
  })
  return (
    <div>LotteryIntrance</div>
  )
}
