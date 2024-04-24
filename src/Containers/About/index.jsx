import PageHeader from "../../Components/PageHeader";
import {
  BsInfoCircleFill,
  BsFillDatabaseFill,
  BsAndroid2,
  BsApple,
} from "react-icons/bs";
import { FaReact } from "react-icons/fa";
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
];

const About = () => {
  return (
    <div>
      <section>
        <PageHeader header="About Me" icon={<BsInfoCircleFill size={40} />} />
      </section>
      <Animate
        play
        duration={1}
        delay={1}
        start={{
          transform: "translateX(-900px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="flex flex-col h-28 w-full mx-4 my-3">
          <h2 className="text-4xl text-green-600 font-bold underline underline-offset-8">
            Personal Details
          </h2>
          <ul className="mt-3 text-[20px] text-gray-50 font-light leading-10">
            {PersonalDetails.map((item, i) => (
              <li key={i}>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
          <hr className="mt-6 lg:w-[680px]" />

          <h2
            className="text-4xl text-green-600 font-bold underline 
          underline-offset-8 mt-8"
          >
            Short Summary
          </h2>
          <p
            className="mt-3 text-[20px] text-gray-50 font-light leading-10
             lg:w-[50%] lg:h-[50%] w-[90%] h-3 text-justify"
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
      </Animate>

      <hr/>

      <Animate
        play
        duration={1}
        delay={1}
        start={{
          transform: "translateX(400px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="fixed top-[800px] lg:top-2 lg:right-4">
          <div
            className=" w-[350px] h-[350px] ml-5 border border-[#e67e22] 
          rounded-full bg-gradient-to-l from-red-500 to-transparent animate-spin "
          >
            <div className="absolute top-[25px] right-[25px]">
              <FaReact size={50} color="#fff200" />
            </div>
            <div className="absolute left-[60px] right-[60px]">
              <BsAndroid2 size={50} color="#fff200" />
            </div>
            <div className="absolute bottom-[40px] left-[30px]">
              <BsApple size={50} color="#fff200" />
            </div>
            <div className="absolute bottom-[60px] right-[10px]">
              <BsFillDatabaseFill size={50} color="#fff200" />
            </div>
          </div>
        </div>
      </Animate>
    </div>
  );
};

export default About;
