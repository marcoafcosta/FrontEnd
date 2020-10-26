import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import Container from '@material-ui/core/Container';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      }
    };
  }



  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {

      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 6
            ? 'Password must be at least 6 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }



  onSubmit = (e) => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info('Valid Form')

      fetch('/engine-rest/process-definition/key/login/start', {
        method: 'POST',
        body: JSON.stringify({

          "resultEnabled": "true",
          "variables": {
            "email": { "value": this.state.email, "type": "String" },
            "password": { "value": this.state.password, "type": "String" }

          },
          "withVariablesInReturn": true
        }),

        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          console.log(jsonData)

          var response = jsonData.variables.success.value;
          if (response === true) {
            this.setState({
              islogged: true,
            });

            console.log('Login success');
            //window.alert('Login success');

          } else {
            console.log('Login failed')
            window.alert('Login failed - Invalid email or password');
          }
        })
        .catch((error) => {
          // handle errors here
          console.error(error)
        });
      this.setState({
        email: '',
        password: ''
      });
    } else {
      console.error('Invalid Form')
    }

  }


  render() {
    if (this.state.islogged) {
      return <Redirect to="/Dashboard" />;
    }
    const { errors } = this.state;

    return (
      <Container maxWidth="md" >
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              <Form >
                <Form.Input
                  icon='mail'
                  iconPosition='left'
                  label='Email'
                  name='email'
                  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  id='email'
                  placeholder="Enter your email"
                  onChange={this.handleChange} noValidate
                  required
                />{errors.email.length > 0 &&
                  <span className='error'>{errors.email}</span>}

                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  label='Password'
                  name='password'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleChange} noValidate
                  placeholder="Enter your Password"
                />{errors.password.length > 0 &&
                  <span className='error'>{errors.password}</span>}

                <Button type="Submit" content='Login' primary onClick={(e) => this.onSubmit(e)} />

              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
            <Typography variant="body2" color="textSecondary" component="p" align='center'>Not registered yet?</Typography>
              <Link to="/Register">
                <Button content='Sign up' icon='signup' size='big' />
              </Link>
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </Container>
    )
  }
}
