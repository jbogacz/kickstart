pragma solidity ^0.4.17;

contract Factory {

  address[] public deployedCampaigns;

  function createCampaign(uint _minimum) public {
    address campaignAddress = new Campaign(_minimum, msg.sender);
    deployedCampaigns.push(campaignAddress);
  }

  function getDeployedCapaigns() public view returns (address[]) {
    return deployedCampaigns;
  }

}

contract Campaign {
  
  // Minimum value that contributor can in
  uint public minimum;
  // Number of registered approvers
  uint public approversCount;
  // Address of owner of campaing
  address public manager;
  // List of request prepared by manager
  Request[] public requests;
  // Address list of contributoris
  mapping(address => bool) public approvers;

  constructor(uint _minimum, address _sender) public {
    manager = _sender;
    minimum = _minimum;
    approversCount = 0;
  }

  modifier restricted {
    require(msg.sender == manager, "Sender must be the manager");
    _;
  }

  function contribute() public payable {
    require(msg.value >= minimum, "Minium contribution is required");

    approvers[msg.sender] = true;
    approversCount++;
  }

  function createRequest(string description, uint value, address recipient) public restricted {

    Request memory newRequest = Request({ 
      description: description,
      value: value,
      recipient: recipient,
      complete: false,
      approvalCount: 0 
    });

    requests.push(newRequest);
  }

  function approveRequest(uint8 index) public {
    Request storage request = requests[index];
    
    require(approvers[msg.sender], "Sender is not registered as contributor");
    require(!request.approvals[msg.sender], "Approver can approve only once");
    
    // Mark sender has already approved and increment approval count
    request.approvals[msg.sender] = true;
    request.approvalCount++;
  }

  function finalizeRequest(uint8 index) public restricted {
    Request storage request = requests[index];

    require(!request.complete, "Request must be not completed yet");
    require(request.approvalCount > (approversCount / 2), "More than 50% approvers have to agree");

    // Send money and mark request as completed
    request.recipient.transfer(request.value);
    request.complete = true;
  }

  function getSummary() public view returns (
    uint, uint, uint, uint, address
    ) {
    return (
      minimum,
      address(this).balance,
      requests.length,
      approversCount,
      manager
    );
  }

  function getRequestsCount()
    public
    view
    returns (uint) 
  {
    return requests.length;
  }

  struct Request {
    mapping(address => bool) approvals;
    address recipient;
    string description;
    bool complete;
    uint approvalCount;
    uint value;
  }
  
}