import React from 'react';
import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../constants"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"

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
        const entranceFeeFromCall = (await getEntranceFee())
        setEntranceFee(entranceFeeFromCall)
      }

      updateUI()
    }
  }, [isWeb3Enabled])

  return (
    <div>LotteryIntrance<div>{entranceFee}</div></div>
  )
}
