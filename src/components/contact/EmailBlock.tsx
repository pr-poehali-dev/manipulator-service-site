
interface EmailBlockProps {
  email: string;
  description: string;
}

const EmailBlock = ({ email, description }: EmailBlockProps) => {
  return (
    <>
      <a
        href={`mailto:${email}`}
        className="text-manipulator-primary hover:text-manipulator-secondary transition-colors"
      >
        {email}
      </a>
      <p className="text-sm text-manipulator-gray-dark mt-1">{description}</p>
    </>
  );
};

export default EmailBlock;
