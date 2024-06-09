import PageHeader from "../../Components/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";

const PersonalDetails = [
  {
    label: "Name: ",
    value: "Kajal Tiwari",
  },
  {
    label: "Age: ",
    value: "20",
  },
  {
    label: "Address: ",
    value: "Powai, Mumbai",
  },
  {
    label: "Email: ",
    value: "tiwarikajal8898@gmail.com",
  },
  {
    label: "Qualification: ",
    value: "Graduated",
  },
];

const About = () => {
  return (
    <div className="relative ">
      <section>
        <PageHeader header="About Me" icon={<BsInfoCircleFill size={40} />} />
      </section>
      <Animate
        play
        duration={1}
        delay={1}
        start={{
          transform: "translateY(900px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="flex flex-col lg:flex-row my-3">
          <div className="lg:w-1/2">
            <h2 className="text-4xl p-4 text-green-600 font-bold underline underline-offset-8">
              Personal Details
            </h2>
            <ul className="mt-3 p-4 lg:text-[1.5vw] text-[4vw] text-gray-50 font-light leading-10">
              {PersonalDetails.map((item, i) => (
                <li key={i} className="flex ">
                  <span>{item.label}</span>&nbsp;&nbsp;
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <h2
              className="text-4xl text-green-600 font-bold underline 
              underline-offset-8 mt-8 lg:mt-0 p-4"
            >
              Short Summary
            </h2>
            <p
              className="mt-3 lg:text-[1.5vw] text-[4vw] text-gray-50 font-light leading-10
               w-full text-justify p-4"
            >
              Welcome to my portfolio page! I am a passionate and dedicated
              frontend developer, specializing in HTML, CSS, and JavaScript. With
              a strong foundation in frontend technologies and a keen eye for
              design, I strive to create visually appealing and user-friendly
              websites. I am constantly exploring new trends and techniques to
              deliver seamless and responsive user experiences. I am eager to
              collaborate on exciting projects and contribute my skills to create
              captivating web experiences.
            </p>
          </div>
        </div>
      </Animate>
    </div>
  );
};

export default About;
