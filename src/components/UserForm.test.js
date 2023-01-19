import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import UserForm from './UserForm'

test('it shows two inputs and button', () => {
  // render the component
  render(<UserForm />)

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')

  // Assertion - make sure the component is doing
  // What we expect it to do
  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test('it calls onUserAdd when the form is submitted', () => {
  // NOT THE BEST IMPLEMENTATION

  // Moc Function
  const users = []
  const onUserAdd = (...user) => {
    users.push(user)
  }

  // Try to render my component
  render(<UserForm onUserAdd={onUserAdd} />)

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox')

  // Simulate typing in a name
  user.click(nameInput)
  user.keyboard('Jane')

  // Simulate typing in an email
  user.click(emailInput)
  user.keyboard('jane@gmail.com')

  // Find the button
  const button = screen.getByRole('button')

  // Simulate clicking the button
  user.click(button)

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(users).toHaveLength(1)
  expect(users[0][0]).toEqual({ name: 'Jane', email: 'jane@gmail.com' })
})
