import React, { useState } from 'react'
import UserItem from './UserItem';

const FakeUsersTable = ({ fakeUsers, loadMoreUsers, region }) => {

  const [containerRef, setContainerRef] = useState(null);
  const handleScroll = () => {
    if (
      containerRef &&
      containerRef.scrollTop + containerRef.clientHeight >= containerRef.scrollHeight - 10
    ) {
      loadMoreUsers();
    }
  };

  return (
    <div
      className="table-container"
      ref={(ref) => setContainerRef(ref)}
      onScroll={handleScroll} >
      <table id="users">
        <thead>
          <tr className='header-row'>
            <th>Index</th>
            <th>Identifier</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {fakeUsers.map( user => <UserItem user={user} key={user.id} region={region} /> )}
        </tbody>
      </table>
    </div>
  )
}

export default FakeUsersTable;