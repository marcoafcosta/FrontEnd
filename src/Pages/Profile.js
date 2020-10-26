import React from 'react'
import { Table, Button } from 'semantic-ui-react'

const Profile = () => (
  <Table size='large'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell> 
        <Table.HeaderCell>Personal Details</Table.HeaderCell>
        {/* <Table.HeaderCell></Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Name</Table.Cell>
        <Table.Cell>John</Table.Cell>
        {/* <Table.Cell></Table.Cell> */}
        {/* <Table.Cell></Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Address</Table.Cell>
        <Table.Cell>742 Evergreen Terrace</Table.Cell>
        {/* <Table.Cell></Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Post Code</Table.Cell>
        <Table.Cell>AA11 2BB</Table.Cell>
        {/* <Table.Cell></Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Phone Number</Table.Cell>
        <Table.Cell>07400111222</Table.Cell>
        {/* <Table.Cell></Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Email</Table.Cell>
        <Table.Cell>john@gmail.com</Table.Cell>
        {/* <Table.Cell></Table.Cell> */}
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell><Button>Change my details</Button></Table.HeaderCell>
        {/* <Table.HeaderCell /> */}
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default Profile