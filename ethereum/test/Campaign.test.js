const Factory = artifacts.require("Factory");
const Campaign = artifacts.require("Campaign");

contract('Campaign', async (accounts) => {

  let instance;
  let campaign;

  beforeEach(async () => {
    instance = await Factory.deployed();

    // create campaign instance via factory
    let tx = await instance.createCampaign(web3.toWei(1, 'ether'));
    assert.ok(tx);
    
    // retrieve registered campaigns address list
    let deployedCampaigns = await instance.getDeployedCapaigns();
    // take recent campaign address
    let recentCampaignAddress = deployedCampaigns[deployedCampaigns.length - 1];
    // create instance representing recent contract
    campaign = await Campaign.at(recentCampaignAddress);
    assert.ok(campaign);
  });

  it('should mark campaign manager as contract caller', async () => {
    let manager = await campaign.manager.call();
    assert.equal(accounts[0], manager);
  });

  it('should alow people to contribute money and marks them as approvers', async () => {
    await campaign.contribute({
      value: web3.toWei(1.1, 'ether'),
      from: accounts[1]
    });
    
    let isContributor = await campaign.approvers(accounts[1]);
    assert(isContributor);
  });

  it('should require a minimum contribution', async () => {
    try {
      await campaign.contribute({
        value: web3.toWei(0.99, 'ether'),
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('should allow manager to make a payment request', async () => {
    await campaign.createRequest(
      'Buy batteries', 
      web3.toWei(1, 'ether'),
      accounts[1]);

    const request = await campaign.requests(0);
    assert.equal('Buy batteries', request[1]);
  });

  it('should finalize request', async () => {
    await campaign.contribute({
      value: web3.toWei(10, 'ether'),
      from: accounts[2]
    });

    await campaign.createRequest(
      'Buy batteries', 
      web3.toWei(10, 'ether'),
      accounts[3]);

    await campaign.approveRequest(0, { from: accounts[2] });

    await campaign.finalizeRequest(0);

    let recipientBalance = await web3.eth.getBalance(accounts[3]);
    assert(
      web3.fromWei(recipientBalance.toNumber(), 'ether') >= 110, 
      'Recipient balance has to be >= 110 eth after received request funds');

  });

});