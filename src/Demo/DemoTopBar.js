import React from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'


const MenuInputs = () => (
  <Menu>
    

    <Menu.Item position='right'>
    <Menu icon>
    <Input className='icon' icon='search' placeholder='Search...' />
        <Menu.Item
          name='shopping cart'
          content='My cart'
          //active={activeItem === 'gamepad'}
          //onClick={this.handleItemClick}
        >
          <Icon name='shopping cart' />
           My Cart
        </Menu.Item>

        <Menu.Item
          name='user'
          //active={activeItem === 'video camera'}
          //onClick={this.handleItemClick}
        >
          <Icon name='user' />
          My account
        </Menu.Item>

        
      </Menu>
    </Menu.Item>
  </Menu>
)

export default MenuInputs