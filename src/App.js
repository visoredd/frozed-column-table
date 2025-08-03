import React from 'react';
import './styles.css';

const TOTAL_COLUMNS = 50;
const TOTAL_ROWS = 100;

const StickyTable = () => {
  const columns = Array.from({ length: TOTAL_COLUMNS }, (_, i) => `Header ${i}`);
  const rows = Array.from({ length: TOTAL_ROWS }, (_, rowIndex) =>
    Array.from({ length: TOTAL_COLUMNS }, (_, colIndex) => `R${rowIndex}C${colIndex}`)
  );

  return (
    <div className="table-wrapper">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className={`cell ${getStickyClass(index)}`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`cell ${getStickyClass(colIndex)}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getStickyClass = (index) => {
  switch (index) {
    case 0:
      return 'sticky-col left-0';
    case 1:
      return 'sticky-col left-1';
    case 48:
      return 'sticky-col right-1';
    case 49:
      return 'sticky-col right-0';
    default:
      return '';
  }
};

export default StickyTable;
