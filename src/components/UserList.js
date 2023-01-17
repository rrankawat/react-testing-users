const UserList = ({ users }) => {
  const renderedUsers = users.map((user) => {
    return (
      <tr kay={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    )
  })

  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  )
}

export default UserList
