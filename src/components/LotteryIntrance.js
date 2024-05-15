import React from 'react';
import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../constants/index"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import { ethers } from "ethers"

export default function LotteryEntrance() {

  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
  const chainId = parseInt(chainIdHex)
  console.log(chainId)
  const lotteryAddress = contractAddresses
  console.log(lotteryAddress)
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
        const entranceFeeFromCall = (await getEntranceFee())
        // setEntranceFee(ethers.formatUints(entranceFeeFromCall), "ethers")
      }

      updateUI()
    }
  }, [isWeb3Enabled])

  return (
    <div>LotteryIntrance<div>{entranceFee}</div></div>
  )
}
