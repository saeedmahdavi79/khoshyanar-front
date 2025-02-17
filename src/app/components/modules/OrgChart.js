import React from 'react';
import ButtonAfra from './Buttons';


const ChartOrg = ({ nodes, onAddNode }) => {
  const handleAddNode = () => {
    const newNode = { name: 'New Node', position: 'Position', children: [] };
    onAddNode(newNode);
  };

  return (
    <div>
        <div className='w-[150px]'>
        <ButtonAfra type={"blue"} onClick={handleAddNode} text={"افزودن جدید"} />

            </div>
      <div>
       
      </div>
    </div>
  );
};

export default ChartOrg;
