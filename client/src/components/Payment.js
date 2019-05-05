import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "antd";
import { connect } from "react-redux";
import { handleToken } from "../store/actions/action";

class Payment extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily Feedback Survey"
        description="$5 per Email cost"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <Button type="primary" style={{ backgroundColor: "#6B7A8F" }}>
          Add Credits
        </Button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  { handleToken }
)(Payment);
