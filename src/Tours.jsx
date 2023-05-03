import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h4>Our Tour</h4>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          console.log(tour);
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;

// import React from 'react';
// import Tour from './Tour';
// const Tours = ({ tours }) => {
//   return (
//     <section>
//       <div className="title">
//         <h2>our tours</h2>
//         <div className="title-underline"></div>
//       </div>
//       <div className="tours">
//         {tours.map((tour) => {
//           return <Tour key={tour.id} {...tour} />;
//         })}
//       </div>
//     </section>
//   );
// };

// export default Tours;
