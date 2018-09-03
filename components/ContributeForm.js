import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import campaignAt from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    loading: false,
    errorMessage: ''
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const campaign = await campaignAt(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.contribute({
        value: web3.utils.toWei(this.state.value, 'ether'),
        from: accounts[0]
      });
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} loading={this.state.loading} >
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input 
            value={this.state.value}
            onChange={event => 
              this.setState({ value: event.target.value})}
            label='ETH' 
            labelPosition="right" />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeForm;