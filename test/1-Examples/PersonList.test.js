import App from './App.js'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App', () => {

  let app;
  
  beforeEach(() => {
    app = render(<App />)
  })

  it('renders a PersonList', () => {
    const app = render(<App />);
    const user = app.getByText('Jim');
    const email = app.getByText('jim@galvanize.com');

    expect(user).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  })

  it('should update the user profile with the user nickname upon clicking submit'), () => {
    const text = app.getByLabelText('Nickname:');
    const submit = app.getByRole('header');
    userEvent.type(text, 'Jimmy');
    userEvent.click(submit);
    const nickname = app.getByText('Nickname: Jimmy');
    expect(nickname).toBeInTheDocument();
  }

})