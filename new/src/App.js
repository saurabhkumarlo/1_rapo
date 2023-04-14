import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import ABI from './Contract/Abi.json'

const App = () => {
  const [values, setValues] = useState("");
  const [address, setAddress] = useState("")
  const addr = "0xe8551e40283c7Ef89b3Dcba7A07364e0AB042659"
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)

  useEffect(() => {
    connectMetamask()
  }, [])

  // metamask check and connect

  const connectMetamask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');

      const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      setProvider(provider)
      setSigner(signer)

      console.log(address)
      setAddress(address[0])

    }
  }


  const setItem = async () => {
    const contract = new ethers.Contract(addr, ABI, signer)
    const msg = await contract.setMsg(values)
    console.log(msg)
  }

  const getItem = async () => {
    const contract = new ethers.Contract(addr, ABI, provider)
    const msg1 = await contract.getMsg()
    console.log(msg1)
  }

  return (
    <div>
      <h3>Address :- {address ? address : '000x000x00x0x0x'}</h3>
      <input
        type="text"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />

      <button onClick={setItem}>Set Message</button>
      <button onClick={getItem}>Show Message</button>
      {/* <h1>{values}</h1> */}
    </div>
  );
};

export default App;
