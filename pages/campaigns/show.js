import React, { Component } from 'react';
import Layout from '../../components/Layout';
import campaignAt from '../../ethereum/campaign';
import { Card, Grid, Button, GridRow } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes'

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = await campaignAt(props.query.address);
    const summary = await campaign.getSummary();
    return {
      address: props.query.address,
      minimumContribution: summary[0].toString(),
      balance: summary[1].toString(),
      requestsCount: summary[2].toString(),
      approversCount: summary[3].toString(),
      manager: summary[4]
    };
  }

  renderCards() {
    const { balance, manager, minimumContribution, requestsCount, approversCount } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of manager',
        description: 'The manager created this campaign and create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      }, 
      {
        header: web3.utils.fromWei(minimumContribution),
        meta: 'Minimum ETH contribution value',
        description: 'Minimum amount of ETH you have to pay to contribute',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from contract. Requests must be approved by approvers',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: approversCount,
        meta: 'Number of approvers',
        description: 'Number of people who have already donated tothis campaign',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: web3.utils.fromWei(balance),
        meta: 'Campaign balance (ETH)',
        description: 'The balance is how much money this campaign has left to spend',
        style: { overflowWrap: 'break-word' }
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <GridRow>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address}/>
            </Grid.Column>
          </GridRow>
          <GridRow>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;