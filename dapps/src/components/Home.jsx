import { useState } from "react";
import ABI from "../contracts/ABI.json";
import Web3 from "web3";
import { Button, Typography, Space } from "antd";
const { Title } = Typography;

const contractAddress = "0x6C9784E3B0644B5423a62f1271bd9D6CBA99DDED";

function Home() {
  const [walletBalance, setWalletBalance] = useState("");
  const [acc, setAcc] = useState();
  const gasPrice = "50000000000";

  var web3 = new Web3(window.ethereum);
  var contractABI = new web3.eth.Contract(ABI.abi, contractAddress);

  const connectWallet = async () => {
    await window.ethereum.enable();
    const account = await web3.eth.requestAccounts();
    setAcc(account);
    console.log("Wallet current: ", account[0]);
  };

  const getBalance = async () => {
    if (acc) {
      const balance = await web3.eth.getBalance(acc[0]);
      const balanceInEther = web3.utils.fromWei(balance, "ether");
      setWalletBalance(balanceInEther);
    } else {
      console.log("No account");
    }
  };

  async function getNameFromContracts() {
    await contractABI.methods
      .getNameFromContracts()
      .call()
      .then((res) => console.log(res));
  }

  //   const floppyAddress = "0x224AcD83e69De52E5bbc162C2BACE6957C0Dc032";
  // myAddress = "0x249cf9C6DFBB1f2d7F2C99190651DEAF21605Db8";
  // receiverAddress = "0x436aB5A91E35dfAaBA7415882742f17dB3f02AdF";
  // myPrivateKey = process.env.PRIV_KEY;

  // async function interact() {
  //   web3 = await new Web3("https://data-seed-prebsc-2-s2.bnbchain.org:8545");

  //   floppyContract = await new web3.eth.Contract(floppyAbi, floppyAddress);
  //   const account = web3.eth.accounts.privateKeyToAccount(`0x${myPrivateKey}`);
  //   await web3.eth.accounts.wallet.add(account);
  //   receiverBefore = await floppyContract.methods
  //     .balanceOf(receiverAddress)
  //     .call();
  //   rs = floppyContract.methods.transfer(receiverAddress, 100000000000).send({
  //     from: myAddress,
  //     gas: 3000000000,
  //   });
  //   receiverAfter = await floppyContract.methods
  //     .balanceOf(receiverAddress)
  //     .call();
  //   console.log(receiverAfter);
  // }
  // interact();

  return (
    <div>
      <Title level={4}>
        Your Balance: {walletBalance ? walletBalance : 0} TC
      </Title>
      <Space size="middle">
        <Button size="large" onClick={() => connectWallet()}>
          Connet wallet
        </Button>
        <Button size="large" onClick={() => getBalance()}>
          Show My Balance
        </Button>
        <Button size="large" onClick={() => getNameFromContracts()}>
          Get Name From Contracts
        </Button>
      </Space>
    </div>
  );
}

export default Home;
