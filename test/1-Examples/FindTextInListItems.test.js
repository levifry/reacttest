import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import App from './App';

const server = setupServer(
  rest.get('/api/students', (req, res, ctx) => {
    return res(ctx.json([
      {firstName: "George", lastName: "Washington", homeroom: "A"},
      {firstName: "Matthew", lastName: "Damon", homeroom: "B"},
      {firstName: "Mariah", lastName: "Carey", homeroom: "C"}
    ]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should populate student entry on state after a successful API call', async () => {
  render(<App />);
  const items = await screen.findAllByRole('listitem')
  expect(items[0]).toHaveTextContent('George Washington')
  expect(items[1]).toHaveTextContent('Matthew Damon')
  expect(items[2]).toHaveTextContent('Mariah Carey')
})




//App.js
// import React from 'react';

// export default class App extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       students: []
//     }
//   }

//   componentDidMount() {
//     fetch('/api/students')
//     .then(response => response.json())
//     .then(students => this.setState({ students: students }))
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.students.map((student, index) => <li key={index}>{student.firstName} {student.lastName}</li>)}
//       </ul>
//     )
//   }
// }