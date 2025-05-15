
interface AddressBlockProps {
  address: string;
  workingHours: string;
}

const AddressBlock = ({ address, workingHours }: AddressBlockProps) => {
  return (
    <>
      <p className="text-manipulator-gray-dark">{address}</p>
      <p className="text-sm text-manipulator-gray-dark mt-1">{workingHours}</p>
    </>
  );
};

export default AddressBlock;
