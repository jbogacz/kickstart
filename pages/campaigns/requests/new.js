import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Grid, Form, Input, Message, Button } from 'semantic-ui-react';
import campaignAt from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  }
  
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const campaign = await campaignAt(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.createRequest(
        this.state.description, 
        web3.utils.toWei(this.state.value, 'ether'),
        this.state.recipient,
        { from: accounts[0] });
    } catch (err) {
      this.setState({ errorMessage: err.message })
    }

    this.setState({ loading: false });
  }

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>Back</a>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h3>Create a Reqeust</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} loading={this.state.loading} >
                <Form.Field>
                  <label>Description</label>
                  <Input 
                    value={this.state.description}
                    onChange={event =>
                      this.setState({ description: event.target.value })}/>
                </Form.Field>

                <Form.Field>
                  <label>Value in ether</label>
                  <Input 
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ value: event.target.value })}/>
                </Form.Field>

                <Form.Field>
                  <label>Recipient</label>
                  <Input 
                    value={this.state.recipient}
                    onChange={event =>
                      this.setState({ recipient: event.target.value })}/>
                </Form.Field>

                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>Create Request</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }

}
export default RequestNew;