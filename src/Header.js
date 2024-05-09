import { React, useEffect } from 'react'
import { useMoralis } from "react-moralis"

function Header() {
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3 } = useMoralis()

  useEffect(() => {
    if (isWeb3Enabled) return 
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
          enableWeb3()
      }
    }
  
  }, [isWeb3Enabled])

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`)
      if (account == null) {
        window.localStorage.removeItem("connected")
        deactivateWeb3()
        console.log("Null account found")
      }
    })
  }, [])

  return (
    <div>
      {account ? (<div>Connected to {account.slice(0, 4)}...{account.length - 4}</div>) : (
        <button onClick={
          async () => {
            await enableWeb3()
            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "inject")
            }
          }}>Connect</button>)}
    </div>
  )
}

export default Header