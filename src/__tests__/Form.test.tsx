import Form from '@components/Form'
import { render, screen, waitFor } from '@utils/test/app-test-utils'

test('it should render the Form component', async () => {
  const { user } = render(<Form />)
  screen.debug()

  const checkbox = screen.getByLabelText('One way')
  expect(checkbox).not.toBeChecked()
  user.click(checkbox)
  await waitFor(() => expect(checkbox).toBeChecked())
})
