import React from 'react'
import { Table } from 'semantic-ui-react'

const MyClaims = () => (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Claim</Table.HeaderCell>
        <Table.HeaderCell>Date of Claim</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Invoice</Table.HeaderCell>
        <Table.HeaderCell>Remittance </Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Peter Jackson</Table.Cell>
        <Table.Cell>October 14, 2020</Table.Cell>
        <Table.Cell>£75.00</Table.Cell>
        <Table.Cell><a href="https://drive.google.com/file/d/1hK5IRiL-HbJi7KAq4rWzvF-mKGyKsf_h/view?usp=sharing" target="_blank">5445</a></Table.Cell>
        <Table.Cell><a href="https://drive.google.com/file/d/1h708cjY1s15VzQ-ob2FhIhKp_LETrHGG/view?usp=sharing" target="_blank">336789</a></Table.Cell>
        <Table.Cell>Approved</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2020</Table.Cell>
        <Table.Cell>£200.00</Table.Cell>
        <Table.Cell>9900</Table.Cell>
        <Table.Cell>012345678</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2019</Table.Cell>
        <Table.Cell>£300.00</Table.Cell>
        <Table.Cell>0099</Table.Cell>
        <Table.Cell>102345678</Table.Cell>
        <Table.Cell>Under Review</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default MyClaims
