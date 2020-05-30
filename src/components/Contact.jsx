import React from 'react';

export const Contact = (props) => {
  console.log(props);
  setTimeout(() => {
    props.history.push('/about');
  }, 2000);
  return (
    <div className='container'>
      <h4 className='center'>Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit exercitationem reiciendis consequuntur cupiditate qui
        eveniet similique distinctio et voluptate animi! Quod excepturi
        sed hic, rerum molestias nam nulla cumque delectus.
      </p>
    </div>
  );
};
