import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '../hooks/useQueryParam';

About.ypes = {};

function About() {
  const queryParam = useQuery();
  return (
    <div>
      About
      <br />
      {queryParam.get('name')}
    </div>
  );
}

export default About;
