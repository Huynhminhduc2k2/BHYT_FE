import React from 'react';

export default function DataRow(props) {
  const [isRenewal, setIsRenewal] = React.useState(props.isAutoRenewal);

  const styles = {
    backgroundColor: isRenewal ? 'green' : '',
  };

  return (
    <>
      <tr className="insurance--table--content">
        <td>{props.insuranceID}</td>
        <td>{props.userID}</td>
        <td>{props.type}</td>
        <td>{props.status}</td>
        <td>{props.premiumAmount}</td>
        <td>{props.startDate}</td>
        <td>{props.endDate}</td>
        <td>{props.lastPaymentDate}</td>
        <td>
          <button
            className="isRenewal"
            style={styles}
            onClick={() => {
              setIsRenewal((prevRenewal) => !prevRenewal);
            }}
          ></button>
        </td>
        <td className="d-flex">
          <button
            class="btn btn-info text-white mx-1"
            onClick={() => props.on(props.insuranceID, 'R')}
          >
            R
          </button>
          <button
            class="btn btn-success mx-1"
            onClick={() => props.on(props.insuranceID, 'U')}
          >
            U
          </button>
          <button class="btn btn-danger mx-1">D</button>
        </td>
      </tr>
    </>
  );
}
