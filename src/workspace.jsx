import React, { Fragment } from "react";
import { Typography, Button, TextField, Grid } from "@material-ui/core";

const WorkspaceForm = ({ handleChange, onSubmit }) => {
  return (
    <Fragment>
      <Grid item md={12}>
        <Typography align="center" variant="h4" style={{ fontWeight: "bold" }}>
          Sign in to your workspace
        </Typography>
        <br />
        <Typography align="center" variant="h6" style={{ color: "#454245" }}>
          Enter your workspace name
        </Typography>
        <br />
        <br />
      </Grid>
      <Grid item md={4} xs={8}>
        <form onSubmit={onSubmit} method="POST">
          <TextField
            variant="outlined"
            label="Workspace"
            name="workspace"
            onChange={handleChange}
            fullWidth
          />
          <br />
          <br />
          <Button
            type="submit"
            fullWidth
            size="large"
            style={{
              backgroundColor: "#4065e0",
              color: "white",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            Continue
          </Button>
        </form>
      </Grid>
    </Fragment>
  );
};

export default WorkspaceForm;
