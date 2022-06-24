import React from "react";
import {
  Form,
  Button,
  Grid,
  Header as SemanticHeader,
  Segment,
  Message
} from "semantic-ui-react";
import Header from "../../components/header";
import { Link } from "react-router-dom";
const LoginUI = ({
  form: { onChange, form, loginFormValid, error, onSubmit, loading }
}) => {
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Login to your account</SemanticHeader>
          <Segment>
            <Form>
              {error && (
                <Message content={error ? error.detail : ""} negative />
              )}

              <Form.Field>
                <Form.Input
                  value={form.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="User Name"
                  label="User Name"
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  label="Password"
                />
              </Form.Field>

              <Button
                onClick={onSubmit}
                disabled={loginFormValid || loading}
                fluid
                loading={loading}
                primary
                type="button"
              >
                Submit
              </Button>
            </Form>
            <Segment>
              Need an account.<Link to="/auth/register">Register</Link>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginUI;
