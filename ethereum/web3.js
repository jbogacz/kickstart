import Web3 from 'web3';

// Workaround for web3@1.0.0 issue. See https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
export function handleIssueWithWeb3(provider) {
  if (typeof provider.sendAsync !== "function") {
    provider.sendAsync = function() {
      return provider.send.apply(provider, arguments);
    };
  }
}

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are one the browser *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/Fe0mX2urbX8Kf6EF8E07'
  );
  web3 = new Web3(provider);
}

export default web3;