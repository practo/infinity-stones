import PropTypes from "prop-types";
import React from 'react';

export class PractoNavbar extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let {user, productName} = this.props;

    $(".global-nav-bar").practoNav({
      productName: productName,
      accounts: {
        loginUrl: "/login",
        loginCallback: null,
        logoutUrl: "/health/logout"
      },
      // user information used primary if user is signed in
      isLoggedIn: true,
      user: {
        accountId: user.account_id,
        name: user.first_name,
        isPartner: true,
        accountEmail: user.email
      },
      addPracticeLink: {
        label: "Add new Practice",
        link: window.location.origin.replace('www', 'ray') + "/signup/newpractice"
      },
      disableSearch: false,
      consumer_url: "https://www.practo.com"
    });
  }

  render() {

    return (
      <div />
    );
  }
};

PractoNavbar.defaultProps = {
  user: {}
};

PractoNavbar.propTypes = {
  user: PropTypes.shape({
    account_id: PropTypes.string,
    first_name: PropTypes.string,
    email: PropTypes.string
  }).isRequired
}

export default PractoNavbar;
