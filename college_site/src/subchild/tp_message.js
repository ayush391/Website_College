import React, { useEffect, useState } from 'react';
import './civil_dep.css'
import './About_us.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const Tp_message = () => {

  return (
    <div className='About_us container text-center'>

      <div className="heading" >
        <h1>Message</h1>
      </div>

      <div className='text_body'>
        <p>   It is a pleasure to welcome you to the Training & Placement of <i>GOVERNMENT COLLEGE OF ENGINEERING AND TECHNOLOGY, JAMMU .</i></p>

        <p> GCET is highly reputed and well-known for its emphasis on academic excellence. With its stringent selection procedures,
          it recruits the best students from the J&K State . Taught by an experienced faculty, the students are rigorously trained in both theoretical and practical fields according to the industry norms. They are thus well-equipped to handle analytical as well as quantitative issues that help them to meet the
          challenges of the corporate world. Without doubt, they are amongst the finest budding engineers in the country.</p>


        <p>  The high quality of our students is highlighted by our past placements unquestionably.
          GCET the best, trains the best, and produces the best in the country.
          I am very confident that our students will make a significant contribution to your organization and
          look forward to your participation in a mutually rewarding placement exercise.
        </p>
      </div>

    </div>

  );
}
export default Tp_message;
