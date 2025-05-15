
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface ContactFormProps {
  title: string;
  description: string;
}

const ContactForm = ({ title, description }: ContactFormProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-manipulator-primary">
        {title}
      </h3>
      <p className="text-manipulator-gray-dark mb-6">{description}</p>

      <form className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Ваше имя"
            className="border-manipulator-gray-light focus-visible:ring-manipulator-primary"
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Ваш телефон"
            className="border-manipulator-gray-light focus-visible:ring-manipulator-primary"
          />
        </div>
        <div>
          <Textarea
            placeholder="Опишите вашу задачу"
            className="border-manipulator-gray-light focus-visible:ring-manipulator-primary"
            rows={4}
          />
        </div>
        <Button className="w-full bg-manipulator-primary hover:bg-manipulator-primary/90 text-white">
          Отправить заявку
          <Icon name="Send" className="ml-2" size={16} />
        </Button>
        <p className="text-xs text-manipulator-gray-dark text-center mt-4">
          Нажимая кнопку "Отправить заявку", вы соглашаетесь с политикой
          конфиденциальности
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
