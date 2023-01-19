import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

test('render one row per user', () => {
  const users = [
    { name: 'Jane', email: 'jane@gmail.com' },
    { name: 'Sam', email: 'sam@gmail.com' },
  ]

  // Render the component
  const { container } = render(<UserList users={users} />)

  // Find all rows in the table

  // screen.logTestingPlaygroundURL()

  // Approach 1
  // const rows = within(screen.getByTestId('users')).getAllByRole('row')

  // Approach 2
  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr')

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2)
})

test('render the email and name of each other', () => {})
