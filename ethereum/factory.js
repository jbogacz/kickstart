import contract from 'truffle-contract';
import web3 from './web3';
import { handleIssueWithWeb3 } from './web3';
import FactoryJson from './build/contracts/Factory.json';

const Factory = contract(FactoryJson);
Factory.setProvider(web3.currentProvider);
handleIssueWithWeb3(Factory.currentProvider);

export default Factory.at('0xf6b91c38953fbbc35c8d37e713a6190bd5da3643');