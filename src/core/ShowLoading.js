import React from "react";
import spinner from '../assets/spinner.gif';

const ShowLoading = (props) => {
	//console.log("props=",props);
	return (
		<div className="col-12 text-center" style={{ display: props.showLoading? "": "none"}}>
			<h4>Loading...</h4>
			<img src={spinner} alt="spinner" width="100px" />	
		</div>)
};

export default ShowLoading;