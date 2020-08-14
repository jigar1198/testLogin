import React, { Component, Fragment } from "react";
import WorkspaceForm from "./workspace";
import { Grid } from "@material-ui/core";
import Login from "./login";
import BrandLogo from "./15cacb.png";
import { submitWorkspace, submitLoginCredentials } from "./loginService";

class App extends Component {
  state = {
    data: {},
    workspaceMatch: false,
  };

  handleChange = ({ target }) => {
    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });
  };

  onWorkSpaceSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        workspace: this.state.data.workspace,
      };
      const result = await submitWorkspace(data);
      console.log(result);
      if (result.data.data.workspaceExists) {
        this.setState({ workspaceMatch: !this.state.workspaceMatch });
      }
    } catch (error) {
      console.log(error);
    }
  };

  onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: this.state.data.email,
        password: this.state.data.password,
      };
      const result = await submitLoginCredentials(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { workspaceMatch } = this.state;

    return (
      <Fragment>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ marginTop: "10vh" }}
        >
          <Grid item xs={12} md={12} lg={12}>
            <img
              src={BrandLogo}
              style={{
                marginBottom: "5vh",
                width: "45vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              alt="15CACB Logo"
            />
          </Grid>
          {!workspaceMatch ? (
            <WorkspaceForm
              style={{ marginTop: "50vh" }}
              handleChange={this.handleChange}
              onSubmit={this.onWorkSpaceSubmit}
            />
          ) : (
            <Login
              handleChange={this.handleChange}
              onSubmit={this.onLoginSubmit}
            />
          )}
        </Grid>
      </Fragment>
    );
  }
}

export default App;
