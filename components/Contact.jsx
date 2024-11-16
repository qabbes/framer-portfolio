import { useState, useEffect } from "react";

//formSpree
import { useForm, ValidationError } from "@formspree/react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const initInputs = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xwpkbdye");

  /*form inputs handler*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  /*form input States*/
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  /*icon & button visibility States*/
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      setFormData({ initInputs });
      setTimeout(() => {
        setShowIcon(false);
      }, 3000);
      return () => clearTimeout();
    }
  }, [state.succeeded]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData); //call formSpree's handleSubmit
  };

  //prettier-add
  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-16">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <AnimatedText
              text="Let's Work Together"
              textStyles="h2 mb-12 text-center xl:text-left"
            />
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 w-full max-w-[480px]">
              <div className="flex gap-8">
                {/*firstname*/}
                <div className="flex-1">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-primary">
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    className="input"
                    placeholder="First Name"
                    required
                  />
                </div>
                {/*lastname*/}
                <div className="flex-1">
                  <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-primary">
                    Last Name <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    className="input"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              {/*email*/}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">
                  Email<span className="text-accent">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={formData.email}
                  className="input"
                  placeholder="youremail@email.com"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              {/*phone*/}
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-primary">
                  Phone number<span className="text-accent">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  className="input"
                  placeholder="+XX 123456789"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>
              {/*message*/}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">
                  Message<span className="text-accent">*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  name="message"
                  value={formData.message}
                  className="textarea"
                  placeholder="Leave me a message..."
                  rows={5}
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              {/*submit button*/}
              <button
                type="submit"
                disables={state.submitting}
                className="btn btn-accent flex items-center justify-center gap-2">
                {state.submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    {/*Show icon with opacity transition*/}
                    <FaCheckCircle
                      className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-0" : "opacity-100"
                      }`}>
                      Send Message
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
          {/*Contact Image*/}
          <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
            <Image src="/assets/contact/img.png" fill className="object-cover" quality={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
