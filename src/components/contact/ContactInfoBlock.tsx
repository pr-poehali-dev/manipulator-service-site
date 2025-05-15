
import Icon from "@/components/ui/icon";

interface ContactInfoBlockProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const ContactInfoBlock = ({ icon, title, children }: ContactInfoBlockProps) => {
  return (
    <div className="flex items-start">
      <div className="bg-manipulator-primary rounded-full p-3 mr-4 flex-shrink-0">
        <Icon name={icon} className="text-white" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default ContactInfoBlock;
