import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



export default class TopBar extends Component {


  render() {

    return (
      <Menu size='large'>
        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Link to="/Login">
              <Button className="btn-register" >Login</Button>
            </Link>
          </Menu.Item>

        </Menu.Menu>
      </Menu>
    )
  }
}