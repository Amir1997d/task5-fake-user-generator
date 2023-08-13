import React from 'react'

const UserItem = ({ user }) => {
  return (
    <tr>
        <td>{user.index}</td>
        <td>{user.id}</td>
        <td>{user.country === "Germany" || user.country === "Canada" ? `${user.fName} - ${user.lName}` : `${user.lName} - ${user.fName} - ${user.mName}`}</td>
        <td>{user.country === "Germany" || user.country === "Canada" ? `${user.street}, ${user.building}, ${user.city}` : `${user.city}, ${user.street}, ${user.building}`}</td>
        <td>{user.phone}</td>
    </tr>
  )
}

export default UserItem;