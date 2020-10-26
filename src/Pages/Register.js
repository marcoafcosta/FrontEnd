import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import Container from '@material-ui/core/Container';
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

export default class RegisterForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
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

      fetch('/engine-rest/process-definition/key/register/start', {
        method: 'POST',
        body: JSON.stringify({

          "resultEnabled": "true",
          "variables": {
            "fname": { "value": this.state.fname, "type": "String" },
            "lname": { "value": this.state.lname, "type": "String" },
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
            console.log('Register success')
            window.alert('Register success');
          } else {
            console.log('Register failed')
            window.alert('Register failed');
          }
        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        });
      this.setState({
        fname: '',
        lname: '',
        email: '',
        password: ''
      });
    } else {
      console.error('Invalid Form')
    }

  }


  render() {
    const { errors } = this.state;
    return (
      <Container maxWidth="md">
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column verticalAlign='middle'>
              <Typography variant="body2" color="textSecondary" component="p" align='center'>Already registered?</Typography>
              <Link to="/Login">
                <Button content='Login' icon='signup' size='big' />
              </Link>

            </Grid.Column>

            <Grid.Column >
              <Form >
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='First Name'
                  name='fname'
                  placeholder="Enter your first name"
                  value={this.state.fname}
                  onChange={this.handleChange} noValidate
                  required
                />
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='Last Name'
                  name='lname'
                  placeholder="Enter your last name"
                  value={this.state.lname}
                  onChange={this.handleChange} noValidate
                  required
                />
                <Form.Input
                  icon='mail'
                  iconPosition='left'
                  label='Email'
                  name='email'
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.handleChange} noValidate
                  required
                />
                {errors.email.length > 0 &&
                  <span className='error'>{errors.email}</span>}
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  label='Password'
                  name='password'
                  type='password'
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.handleChange} noValidate
                  required
                />
                {errors.password.length > 0 &&
                  <span className='error'>{errors.password}</span>}

                <Button type="Submit" content='Register' primary onClick={(e) => this.onSubmit(e)} />
              </Form>
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </Container>
    )
  }
}