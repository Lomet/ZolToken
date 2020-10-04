let ZolToken = artifacts.require("./ZolToken.sol");  
  
module.exports = function(deployer) {  
  deployer.deploy(ZolToken);  
};
