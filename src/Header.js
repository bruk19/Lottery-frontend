import React from 'react'
import { useMoralis } from "react-moralis"

function Header() {
  const { enableWeb3, account } = useMoralis()
  return (
    <div>
      {account ? (<div>Connected</div>) : (<button onClick={async () => { await enableWeb3() }}>Connect</button>)}

    </div>
  )
}

export default Header