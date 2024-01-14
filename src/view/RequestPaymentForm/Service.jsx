import React from 'react';

export default function Service(props) {
  console.log(props.item);
  return (
    <div className="userService">
      <img className="userService--img" src={props.item.imageUrl} alt="" />
      <div>
        <h3>
          Title:
          <span className="userService--info"> {props.item.title}</span>
        </h3>
        <h3>
          Type:
          <span className="userService--info"> {props.item.type}</span>
        </h3>
        <h3>
          Option:
          <span className="userService--info"> {props.item.coverageOption}</span>
        </h3>
        <h3>
          Duration:
          <span className="userService--info">
             {props.item.coverageDuration}
          </span>
        </h3>
        <h3>
          Cost:
          <span className="userService--info"> ${props.item.price}</span>
        </h3>
      </div>
    </div>
  );
}
