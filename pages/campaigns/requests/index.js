import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes'
import campaignAt from '../../../ethereum/campaign'
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = await campaignAt(address);
    const requestsCount = (await campaign.getRequestsCount()).toNumber();
    const approversCount = (await campaign.approversCount()).toString();

    const requests = await Promise.all(
      Array(requestsCount)
        .fill()
        .map((element, index) => { 
          return campaign.requests(index)
            .then(request => {
              return {
                recipient: request[0],
                description: request[1],
                complete: request[2],
                approvalCount: request[3].toString(),
                value: request[4].toString()
              }
          })
        })
    );
    return { address, requests, approversCount, requestsCount };
  }

  renderRequests() {
    const items  = this.props.requests.map(request => {
      return {
        header: request[0],
        meta: request[1],
        description: request[2],
        style: { overflowWrap: 'break-word' }
      }
    });
    return <Card.Group items={items} />;
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow 
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approversCount={this.props.approversCount}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>Add Request</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount (ETH)</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
        <div>
          Found {this.props.requestsCount} requests.
        </div>
      </Layout>
    );
  }
}

export default RequestIndex;