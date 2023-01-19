import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

test('it can receive a new user and show it on a list', () => {
  render(<App />)

  const nameInput = screen.getByRole('textbox', { name: /name/i })
  const emailInput = screen.getByRole('textbox', { name: /email/i })
  const button = screen.getByRole('button')

  user.click(nameInput)
  user.keyboard('Jane')
  user.click(emailInput)
  user.keyboard('jane@gmail.com')
  user.click(button)

  // screen.debug()

  const name = screen.getByRole('cell', { name: 'Jane' })
  const email = screen.getByRole('cell', { name: 'jane@gmail.com' })

  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
})
