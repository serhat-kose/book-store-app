import React from "react";

export default function Welcome(props)  {

	
		return (
			<div className="bg-dark text white">
            <div class="container">
              <h1 className="text-white">{props.heading} </h1>
              <blockquote className="blockquote mb-0">
			  <p className="text-white">{props.description}</p>
			  <footer className="blockquote-footer">
				Serhat Köse
			</footer>
			  </blockquote>

			  
          
            </div>
		
          </div>
		);
	
}

