var Factory = artifacts.require("Factory");

module.exports = function(deployer, network) {
  console.log(`Deploying 'Factory' contract to '${network}' network.`);
  deployer.deploy(Factory);
};