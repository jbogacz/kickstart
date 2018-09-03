const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    ganache: {
      host: "localhost",
      port: 8545,
      network_id: "*" 
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          'boat patch decline index crew ignore perfect segment disagree general escape judge',
          'https://rinkeby.infura.io/Fe0mX2urbX8Kf6EF8E07'
      )},
      network_id: 3
    }
}};