import React from 'react';
import { Link } from "react-router-dom";

export default function BackToTop() {
  return (
    <div id="backToTop">
      <Link to="#" className="btn"><i className="fa fa-caret-up"></i></Link>
    </div>    
  );
};
