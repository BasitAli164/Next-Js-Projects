import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ContactPage = () => {
  const rightArrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <div
      className='full px-[12%] py-10 scroll-mt-10 bg-[url("/bgimage.png")] bg-no-repeat bg-center
    bg-[length:90%_auto]'
    >
      <h2 className="text-center text-5xl font-Ovo">Get in Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-lg">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.{" "}
      </p>
      <form className="max-w-2xl mx-auto">
        <div className="flex gap-6 mt-10 mb-8">
          <Input
            type="text"
            placeholder="Enter your name"
            required
            className=" p-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-lg placeholder:text-lg font-Ovo"
          />
          <Input
            type="email"
            placeholder="Enter your email"
            required
            className=" p-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-lg placeholder:text-lg font-Ovo"
          />
        </div>
        <Textarea
          rows="6"
          placeholder="Enter your message..."
          required
          className=" p-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 text-lg placeholder:text-lg font-Ovo"
        />
        <Button
          type="submit"
          className="py-6 px-9 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black transition duration-500 text-lg"
        >
          Submit now
          <span className="text-white ">{rightArrowIcon}</span>
        </Button>
        <p className="text-lg mt-5">Sending...</p>
      </form>
    </div>
  );
};

export default ContactPage;
