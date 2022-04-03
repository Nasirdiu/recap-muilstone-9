import React, { useEffect, useState } from 'react';
import useBike from '../../hooks/useBike';
import Bikes from '../Bikes/Bikes';
import './Bike.css'
const Bike = () => {
    const [bike] = useBike();
    return (
        <div className='row container-fluid'>
          <div className='row  col-md-10'>
          {
                bike.map(honda=><Bikes key={honda.id} bike={honda}></Bikes>)
            }
          </div>
          <div className='col-md-2'>
            <h1>Car</h1>
          </div>
        </div>
    );
};

export default Bike;