import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonSocial = () => (
  <div style={{
    position: 'absolute', left: '50%', top: '97%',
    transform: 'translate(-50%, -50%)'
}}>
    <Button color='facebook' onClick={event => window.location.href='https://en-gb.facebook.com/'} target= "_blank">
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='google plus'>
      <Icon name='google plus' /> Google Plus
    </Button>
    <Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
    <Button color='youtube'>
      <Icon name='youtube' /> YouTube
    </Button>
  </div>
)

export default ButtonSocial