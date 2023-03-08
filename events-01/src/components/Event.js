import React from 'react'

function Event() {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Summary</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>party</td>
        <td>my house</td>
        <td>bring alcohol</td>
        <td>tuesday</td>
      </tr>
    </tbody>
  </Table>
  )
}

export default Event