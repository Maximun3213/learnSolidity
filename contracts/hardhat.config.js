require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  // networks: {
  //   bsctest: {
  //     url: `https://data-seed-prebsc-2-s2.bnbchain.org:8545`,
  //     accounts: [process.env.PRIV_KEY],
  //     gasPrice: 35000000000,
  //   },
  // },
  // etherscan: {
  //   apiKey: process.env.API_KEY,
  // },
  networks: {
    nostest: {
      url: "https://tc-node-auto.regtest.trustless.computer",
      accounts: [`${process.env.PRIV_KEY}`],
      chainId: 22215,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
