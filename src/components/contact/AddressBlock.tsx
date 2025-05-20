
import React from "react";

interface AddressBlockProps {
  address: string;
  workingHours?: string;
}

const AddressBlock: React.FC<AddressBlockProps> = ({ address, workingHours }) => {
  return (
    <div>
      <p className="text-manipulator-gray-dark">{address}</p>
      {workingHours && (
        <p className="text-sm text-manipulator-gray-dark mt-1">{workingHours}</p>
      )}
    </div>
  );
};

export default AddressBlock;
