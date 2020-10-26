import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class DemoTabs extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary  >
        
          <Menu.Item
            name='Coffee'
            active={activeItem === 'Coffee'}
            onClick={this.handleItemClick}
            disabled
            position='center'
          />
          <Link to="/coffeemachines">
          <Menu.Item
            name='Machines'
            active={activeItem === 'Machines'}
            onClick={this.handleItemClick}
            position='center'
          />
          </Link>
          <Link to="/toasters">
          <Menu.Item 
            name='Toasters'
            active={activeItem === 'Toasters'}
            onClick={this.handleItemClick}
            //disabled
            position='center'
          />
          </Link>
        </Menu>
      </Segment>
    )
  }
}
