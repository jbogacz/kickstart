import contract from 'truffle-contract';
import web3 from './web3';
import { handleIssueWithWeb3 } from './web3';
import CampaignJson from './build/contracts/Campaign.json';

const Campaign = contract(CampaignJson);
Campaign.setProvider(web3.currentProvider);
handleIssueWithWeb3(Campaign.currentProvider);

export default function campaignAt(address) {
  return Campaign.at(address);
}