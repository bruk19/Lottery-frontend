import React from 'react';
import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../constants/index"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import { ethers } from "ethers"

export default function LotteryEntrance() {

  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
  const chainId = parseInt(chainIdHex)
  const lotteryAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null

  const [entranceFee, setEntranceFee] = useState("0")

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddres: lotteryAddress,
    functionName: "getEntranceFee",
    params: {},
  })


  useEffect(() => {
    if (isWeb3Enabled) {
      async function updateUI() {
        const entranceFeeFromCall = await getEntranceFee()
        if (entranceFeeFromCall) {
          const entranceFee = entranceFeeFromCall.toString()
          console.log(entranceFee)
          setEntranceFee(entranceFee)
        } else {
          console.log("Entrance fee is undefined")
        }
      }
      updateUI()
    }
  }, [isWeb3Enabled])

  return (
    <div>LotteryIntrance<div>{entranceFee}</div></div>
  )
}
