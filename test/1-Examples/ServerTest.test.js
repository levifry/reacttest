import React from 'react';

import { render, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from './App'

const data = {
    cars: [
      {
        manufacturer: 'Porsche',
        model: '911 GT2 RS',
        image: 'https://cdnmedia.endeavorsuite.com/images/ThumbGenerator/Thumb.aspx?img=%2f%2fcdnmedia.endeavorsuite.com%2fimages%2forganizationsstg%2f007216ae-b5a4-4a1d-b5ae-813f5229c58a%2fCTA%2fCTA1.jpg&w=370'
      }
    ]
}

const server = setupServer(
  rest.get('/cars', (req, res, ctx) => {
    return res(ctx.json(data))

    // return res(
    //   context.json({
    //     cars: [
    //       {
    //         manufacturer: 'Porsche',
    //         model: '911 GT2 RS',
    //         image: 'https://cdnmedia.endeavorsuite.com/images/ThumbGenerator/Thumb.aspx?img=%2f%2fcdnmedia.endeavorsuite.com%2fimages%2forganizationsstg%2f007216ae-b5a4-4a1d-b5ae-813f5229c58a%2fCTA%2fCTA1.jpg&w=370'
    //       }
    //     ]
    // }),
    //   context.status(200)
    // )

  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('loads and displays cars', async () => {
  render(<App />);
  await waitFor(() => screen.getByRole('img'))
  expect(screen.getByRole('heading')).toHaveTextContent('Porsche 911 GT2 RS')
})






//App.js
// import React, { useEffect, useState } from 'react';

// export default () => {
  
//   const [data, setData] = useState({
//     cars: []
//   })

//   useEffect(()=>{
//     fetch('/cars')
//       .then(res => res.json())
//       .then(data => {
//         setData({
//           cars: data.cars
//         })
//       })
//   })

//   return (
//     <div id='cars'>
//       {data.cars.length ? 
//         data.cars.map((car, i) => (
//           <div className='car' key={i}>
//             <h1>{car.manufacturer} {car.model}</h1>
//             <img src={car.image} />
//           </div>
//         )) : 'no cars'
//       }
//     </div>
//   )
// }
