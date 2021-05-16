import React from 'react';
import { useQuery } from '../hooks/useQueryParam';

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
