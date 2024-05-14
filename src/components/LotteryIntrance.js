import React from 'react';
import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../constants"
import { useMoralis } from "react-moralis"

export default function LotteryEntrance() {

  const { chainId: chainIdHex } = useMoralis()
  const chainId = parseInt(chainIdHex)
  const lotteryAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddres: lotteryAddress,
    functionName: "getEntranceFee",
    params: {},
  })

  return (
    <div>LotteryIntrance</div>
  )
}
