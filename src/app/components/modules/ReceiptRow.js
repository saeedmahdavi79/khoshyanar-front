// ReceiptRow.js
import React from "react";

const ReceiptRow = ({ index, description, quantity, unit, usage, notes }) => {
  return (
    <tr>
      <td className="border-black border p-2 text-center">{index}</td>
      <td className="border border-black p-2">{description}</td>
      <td className="border border-black p-2">{quantity}</td>
      <td className="border border-black p-2">{unit}</td>
      <td className="border border-black p-2">{usage}</td>
      <td className="border border-black p-2">{notes}</td>
    </tr>
  );
};

export default ReceiptRow;
