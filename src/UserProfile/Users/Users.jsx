import React, { useEffect, useState } from 'react'
import UserProfile from '../UserProfile/UserProfile';
import './users.css'

function Users() {
    const [users, setUsers] = useState([]);
    const {users:allUser} =users;
    console.log(allUser);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);
  return (
    <div className='userGrid'>
        {
            allUser?.map((user) => (<UserProfile user={user} key={user.id}/> ))
        }
    </div>
  )
}

export default Users;