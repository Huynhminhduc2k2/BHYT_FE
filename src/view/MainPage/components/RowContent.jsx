import React from 'react';

export default function DataRow(props) {
  return (
    <tr>
      <td>{props.InsuranceID}</td>
      <td>{props.UserID}</td>
      <td>{props.InsuranceType}</td>
      <td>{props.Status}</td>
      <td>{props.PremiumAmount}</td>
      <td>{props.StartDate}</td>
      <td>{props.EndDate}</td>
      <td>{props.LastPaymentDate}</td>
      <td>{props.IsAutoRenewal}</td>
      <td>{props.CreatedBy}</td>
      <td>{props.UpdatedBy}</td>
      <td>
        <button class="btn btn-info mx-1 text-white ">R</button>
        <button class="btn btn-success mx-1 ">U</button>
        <button class="btn btn-danger mx-1">D</button>
      </td>
    </tr>
  );
}
