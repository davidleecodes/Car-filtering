import React from "react";

export default function Listing({ cars }) {
  return (
    <div className="mb-5">
      <table>
        <thead>
          <tr>
            <th colSpan="2">Matches by Make and Model </th>
          </tr>
        </thead>
        <tbody>
          {cars &&
            cars.map((car) => (
              <tr key={car.id}>
                <td className="w">
                  <span className="make-sub-grp">{car.make}</span>
                  <span className="model-sub-grp">{car.model}</span>
                  <span className="model-sub-grp">{`(${car.year})`}</span>
                </td>
                <td>{car.vehicle_count}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
