import React from 'react';
import 'font-awesome/css/font-awesome.css';
import other from './some/other/module';

export default () => {
  console.log(other);
  return (<div>
    <h1>Test inherit</h1>
    <h2>Font Awesome <i className="fa fa-bath"></i></h2>
  </div>);
};
