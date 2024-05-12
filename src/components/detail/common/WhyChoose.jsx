import React from 'react';

import WHY_CHOOSE_IMG from '@img/detailpage/doctor_1.jpg';

import Section1 from './Section1';

function WhyChoose({desc}) {
  return <Section1 desc={desc} title={'Why Choose Cara Plastic Surgery & Laser Center?'} img={WHY_CHOOSE_IMG} />;
}

export default WhyChoose;
