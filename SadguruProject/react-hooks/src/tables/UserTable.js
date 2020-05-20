import React from 'react'
import { formatDate, toTitleCase } from '../components';

const UserTable = props => (
  <div class="table-wrapper-scroll-y my-custom-scrollbar" style={{ border: '2px solid #dedede' }}>
  <table class="table table-striped sticky-header">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Description</th>
        <th>Added At</th>
        <th align-content="center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td class="cell expand-small-on-hover">{toTitleCase(user.name)}</td>
            {/* <td>{toTitleCase(user.name)}</td> */}
            <td>{user.price}</td>
            <td class="cell expand-small-on-hover">{user.description}</td>
            <td>{formatDate(user.created_at)}</td>
            <td>
            <td>
              
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                class="fas fa-edit"
                style={{ backgroundColor: 'green', color: 'white' }}
              >
                <i class="far fa-clock"></i>Edit
              </button>
              </td>
              <td>
              
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
                style={{ backgroundColor: 'red', color: 'white' ,size:'4px'}}
              >
                Delete
              </button>
            </td>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Items</td>
        </tr>
      )}
    </tbody>
  </table>
   </div>
)

export default UserTable
