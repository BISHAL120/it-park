import React from 'react';
import './Poster1.css'
import img from '../../../images/background-1.png'

const Poster1 = () => {
    return (
        <div>
            <div className="Poster1">
                <div className="poster1">
                    <img src={img} alt="" />
                </div>
                <div className="overlay"></div>
                <div className='poster-detail'>
                    <h1>Transforming Leads into Opportunities with Precision</h1>
                    <p>We specialize in turning prospects into valuable opportunities, employing cutting-edge strategies to fuel your sales pipeline. From targeted campaigns to data-driven insights, we're your partners in driving sustainable growth.</p>
                    <button className='plans'>See Our Plans</button>
                </div>
            </div>
        </div>
    );
};

export default Poster1;