import React from 'react';
import propTypes from 'prop-types';

const Person = ({name, profession, age}) => {
  return (
    <div>
        <p>Name: { name }</p>
        <p>Profession: {profession}</p>
        <p>Age: {age}</p>
    </div>
  )
}

Person.propTypes = {
    name: propTypes.string.isRequired,
    profession: propTypes.string.isRequired,
    age: propTypes.number.isRequired
}

export default Person;