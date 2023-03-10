import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

function renderComponent() {
  const users = [
    { name: 'Jane', email: 'jane@gmail.com' },
    { name: 'Sam', email: 'sam@gmail.com' },
  ]
  render(<UserList users={users} />)

  return { users }
}

test('render one row per user', () => {
  renderComponent()

  // Find all rows in the table
  // screen.logTestingPlaygroundURL()
  const rows = within(screen.getByTestId('users')).getAllByRole('row')

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2)
})

test('render the email and name of each other', () => {
  const { users } = renderComponent()

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name })
    const email = screen.getByRole('cell', { name: user.email })

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  }
})
