// import React, { createContext, useEffect } from 'react'


// const FirstName = createContext();
// const LastName = createContext();


// function contexta() {
//     return (
//         <div>
//             <FirstName.Provider value={"Arora"}>
//             <LastName.Provider value={"krishan"}>
//                  <CompA />
//             </LastName.Provider>
            

//             </FirstName.Provider>
//         </div>
//     )
// }

// export default contexta;
// export { FirstName, LastName };










// import {FirstName, LastName} from "react";

// import React from 'react'

// function context() {

//     ///Easier way to prevent callback hell///
//     const fname = useContext(FirstName);
//     const lname = useContext(LastName);

//     <h1>{fname} {lname}</h1>
// //////exit///
//     return (
//         <div>
//             <FirstName.Consumer>
//                 {(fname) => {
//                     return (
//                         <LastName.Consumer>
//                             {(lname) => {
//                                 return(
//                                     <h1>
//                                     My name is {fname} {lname}
//                                     </h1>
//                                 );
//                             }}
//                         </LastName.Consumer>
//                     )
                    
                    
//                 }}
//             </FirstName.Consumer>
//         </div>
//     )
// }

// export default context





















// /////USE EFFECT //////


// import React, { useState } from 'react';

// const App = () => {
//     const [num, setnum] = useState(0);
//     useEffect(() =>{
//         alert("hi there");
//     },[num]);

//     const counter = () =>{
//         setnum(num+1);
//     }
//     return(
//         <>
//     <h1>krishan</h1>
//         <button onClick={counter()}></button>
//         </>
//     );
// }; 

// export default App;


















// ///use effect conditionally calling///

// import React,{ useState, useEffect } from 'react';

// function App () {
//     const [count, setcount] = useState(0);
//     const [name, setname] = useState('');
//     useEffect(() =>{
//         document.title =`hi change the count value ${count}`;
//     },[count]);    
//     return(
//         <>
//         {count}
//         <input type="text" value="" onClick={(e) => {setname(e.target.value);}} /> 
//         <button onClick={() => {setcount(count + 1);}}>{count}</button>
//         </>
//     );
// };

// /// just an another declare function//
// onclick={input()}

// const input = (e) =>{
//     setname(e.target.value);
// }




















const Web3 = require('web3');

const infuraUrl = 'https://ropsten.infura.io/v3/6b30e03019dd456ea4c823543e86cec5'; 


const init1 = async () => {
const web3 = new Web3(infuraUrl);

var abi = [[
  {
    "constant": false,
    "inputs": [
      {
        "name": "_gatewayID",
        "type": "string"
      },
      {
        "name": "_newuser",
        "type": "address"
      },
      {
        "name": "_phnNum",
        "type": "string"
      },
      {
        "name": "_ip",
        "type": "uint32"
      },
      {
        "name": "_preAuthKey",
        "type": "string"
      },
      {
        "name": "_privateKey",
        "type": "string"
      },
      {
        "name": "_r",
        "type": "string"
      },
      {
        "name": "_s",
        "type": "string"
      }
    ],
    "name": "addNewRegistration",
    "outputs": [
      {
        "name": "sucess",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_gatewayID",
        "type": "string"
      },
      {
        "name": "_prevIP",
        "type": "uint32"
      },
      {
        "name": "_newIP",
        "type": "uint32"
      }
    ],
    "name": "updateIP",
    "outputs": [
      {
        "name": "sucess",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "i",
        "type": "uint256"
      }
    ],
    "name": "getGID",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_gatewayID",
        "type": "string"
      }
    ],
    "name": "getUserAddress",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_gatewayID",
        "type": "string"
      },
      {
        "name": "_ip",
        "type": "uint32"
      }
    ],
    "name": "verifyIP",
    "outputs": [
      {
        "name": "sucess",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]];

var contractaddress = "0x40DC670423f045839e2EF2e32d0042BDD6267082";
var criot =new web3.eth.Contract(abi, contractaddress,{from:'0xd935580Ce80986aD46D31e2dA55564Eb93A09318', gasPrice: '20000000000'});


const privateKey = '070DC1247EF047C1A7F105C132A39C83791CB6C7DAA6A474A21F300018F3877F';
  const tx = criot.methods.addNewRegistration('AMAN','0x63b1db00C1A31DF34B9D7336a341FB3A489a21e8','123','12','auth','priv','1','1');
  const gas = await tx.estimateGas({from: address});
  const gasPrice = await web3.eth.getGasPrice();
  const data = tx.encodeABI();
  const nonce = await web3.eth.getTransactionCount(address);

  const signedTx = await web3.eth.accounts.signTransaction(
    {
      to: myContract.options.address, 
      data,
      gas,
      gasPrice,
      nonce, 
      chainId: networkId
    },
    privateKey
  );
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction); 
  console.log(`Transaction hash: ${receipt.transactionHash}`);
};
init1();
//});