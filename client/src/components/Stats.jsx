import React from "react";

import Container from "react-bootstrap/Container";

export default function Stats({ stats }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Total Vehicles Matched</th>
            <th>{stats?.totalNumber}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w">Lowest Price</td>
            <td>{stats?.lowestPrice}</td>
          </tr>
          <tr>
            <td>Median Price</td>
            <td>{stats?.medianPrice}</td>
          </tr>
          <tr>
            <td>Highest Price</td>
            <td>{stats?.highestPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
