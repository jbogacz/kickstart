import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3'
import campaignAt from '../ethereum/campaign';

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = await campaignAt(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.approveRequest(
      this.props.id, { from: accounts[0] }
    );
  };

  onFinalize = async () => {
    const campaign = await campaignAt(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.finalizeRequest(
      this.props.id, { from: accounts[0] }
    );
  }

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;
    return (
      <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
        <Cell>
          {id}
        </Cell>
        <Cell>
          {request.description}
        </Cell>
        <Cell>
          {web3.utils.fromWei(request.value)}
        </Cell>
        <Cell>
          {request.recipient}
        </Cell>
        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>
        <Cell>
          {request.complete ? null : (
          <Button color="green" basic onClick={this.onApprove}>
            Approve
          </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
          <Button color="teal" basic onClick={this.onFinalize}>
            Finalize
          </Button>
          )}
        </Cell>
      </Row>
    );
  };
};
export default RequestRow;