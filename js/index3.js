
/* tslint:disable:no-unused-variable */
var account;



const connect = async () => {
  // Modern dapp browsers...


  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
      // Acccounts now exposed
      web3.eth.sendTransaction({
        /* ... */
      });
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    web3.eth.sendTransaction({
      /* ... */
    });
  }
  // Non-dapp browsers...
  else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }

  window.onload = myFunction();

  web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
      alert("Error retrieving accounts.");
      return;
    }
    if (accounts.length == 0) {
      // alert(
      //   "No account found! Make sure the Ethereum client is configured properly."
      // );
      return;
    }
    account = accounts[0].toLowerCase();
    document.getElementById("exampleInputAddress").value = account;
    console.log("Account: 1 " + account);
    web3.eth.defaultAccount = account;
    document.getElementById("btn-container").innerHTML =
      "<button id = 'lock-token' class = 'button card-button w-button'>Lock Token</button>";
    document.getElementById("lock-token").addEventListener("click", monthCheck);
    // document.getElementById("btnchange").setAttribute("id", "lockToken");
  });
};

// ABI Code of YeildContract

function myFunction() {
  tokenAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
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
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "recipient",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
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
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "name": "",
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
          "name": "recipient",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ];
  tokenAddress = "0x7240aC91f01233BaAf8b064248E80feaA5912BA3";

  yieldAbi = [
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "sixMonthPercentage",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "lockBoxStructs",
      "outputs": [
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "balance",
          "type": "uint256"
        },
        {
          "name": "releaseTime",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "endDepositTime",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "threeMonthPercentage",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "twelveMonthPercentage",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "tokenContract",
          "type": "address"
        },
        {
          "name": "_endDepositTime",
          "type": "uint256"
        },
        {
          "name": "_yieldWallet",
          "type": "address"
        },
        {
          "name": "_maxTokens",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "releaseTime",
          "type": "uint256"
        }
      ],
      "name": "LogLockupDeposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "LogLockupWithdrawal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnerAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnerRemoved",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "lockBoxNumber",
          "type": "uint256"
        }
      ],
      "name": "getLockBoxBeneficiary",
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
      "constant": false,
      "inputs": [
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "deposit3m",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "deposit6m",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "deposit12m",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "lockBoxNumber",
          "type": "uint256"
        },
        {
          "name": "newBeneficiary",
          "type": "address"
        }
      ],
      "name": "updateBeneficiary",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "lockBoxNumber",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "triggerWithdrawAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newEndTime",
          "type": "uint256"
        }
      ],
      "name": "updateEndDepositTime",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newWallet",
          "type": "address"
        }
      ],
      "name": "updateYieldWallet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "threeMonths",
          "type": "uint256"
        },
        {
          "name": "sixMonths",
          "type": "uint256"
        },
        {
          "name": "twelveMonths",
          "type": "uint256"
        }
      ],
      "name": "updateYields",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newMaxTokens",
          "type": "uint256"
        }
      ],
      "name": "updateMaxTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  yieldAddress = "0x0A4E9F69F5B2E1e661da9Ed98956f928200ea4Ba"


  tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
  yieldContract = new web3.eth.Contract(yieldAbi, yieldAddress);
}

var account;
web3.eth.getAccounts(function (err, accounts) {
  if (err != null) {
    alert("Error retrieving accounts.");
    return;
  }
  if (accounts.length == 0) {

    return;
  }
  account = accounts[0];
  document.getElementById("exampleInputAddress").value = account;
  console.log("Account: 2 " + account);
  web3.eth.defaultAccount = account;

});

//To load smart contract on loading page

async function monthCheck(e) {
  // var x = ethers.utils.formatEther(5);

  e.preventDefault();
  var valueRange = Number(document.getElementById("period").value);
  console.log(valueRange);
  var inputToken = Number(document.getElementById("token_allocate").value);
  console.log(inputToken);

  inputToken = await web3.utils.toWei(inputToken.toString(), 'ether');
  var ether1 = await web3.utils.toWei('1', 'ether');

  document.getElementById("loader").style.display = "block";
  document.getElementById("loader").style.visibility = "visible";


  // inputToken = await web3.eth.
  console.log("Input ", inputToken);
  await tokenContract.methods
    .approve(yieldAddress, inputToken)
    .send({ from: account, gas: 2100000 });


  var div = document.getElementById('alertMsg');

  div.innerHTML += inputToken / ether1, "  Tokens";

  if (valueRange == 1) {
    await yieldContract.methods
      .deposit3m(account, inputToken)
      .send({ from: account, gas: 2100000 });

    document.getElementById("loader").style.visibility = "hidden";
    div.style.display = "block";
    div.style.visibility = "visible";
    $("#alertMsg").fadeIn('slow', function () {
      $(this).delay(3000).fadeOut('slow');
    });
  } else if (valueRange == 2) {
    await yieldContract.methods
      .deposit6m(account, inputToken)
      .send({ from: account, gas: 2100000 });

    document.getElementById("loader").style.visibility = "hidden";
    div.style.display = "block";
    div.style.visibility = "visible";
    $("#alertMsg").fadeIn('slow', function () {
      $(this).delay(3000).fadeOut('slow');
    });

  } else {

    await yieldContract.methods
      .deposit12m(account, inputToken)
      .send({ from: account, gas: 2100000 });

    document.getElementById("loader").style.visibility = "hidden";

    div.style.display = "block";
    div.style.visibility = "visible";
    $("#alertMsg").fadeIn('slow', function () {
      $(this).delay(3000).fadeOut('slow');
    });
  }

}

