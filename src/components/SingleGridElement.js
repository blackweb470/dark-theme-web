import React from "react";

const SingleGridElement = (props) => {
return(
    <div>
<div className="font-serif space-y-4">
    <img className="mx-auto" src={props.image} alt="ok"/>
    <h1 className="font-bold">
        {props.header}
    </h1>
    <p className="opacity-40">
        {props.description}
    </p>
</div>
    </div>
)
}

export default SingleGridElement;


