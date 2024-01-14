import React from 'react';

export default function DataRow(props) {
  return (
    <tr>
      <td>{props.no}</td>
      <td>{props.name}</td>
      <td>{props.customer}</td>
      <td>{props.due}</td>
      <td>
        <button class="btn btn-info mx-2 ">R</button>
        <button class="btn btn-success ">U</button>
        <button class="btn btn-danger mx-2">D</button>
      </td>
    </tr>
  );
}
