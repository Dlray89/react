import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./utils/";
import { alertInfo } from "./actions";
import { PrivateRoute } from "./components/PrivateRoute";
import { HomePage } from "./HomePage/";
import { LoginPage } from "./LoginPage";
import { Register } from "./Register";
import Listings from "./components/Listings";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }
  render() {
    const { alert } = this.props;
    yarn;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/" component={Listings} />

                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={Register} />
                <Redirect from="*" to="/register" component={Register} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertInfo.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
