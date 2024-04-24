import PageHeader from "../../Components/PageHeader";
import { GiSkills } from "react-icons/gi";
import { Animate } from "react-simple-animate";
import htmlImage from "../../assets/html.jpg";
import cssImage from "../../assets/css.jpg";
import bootstrapImage from "../../assets/Bootstrap.jpg";
import tailwindImage from "../../assets/tailwind.jpg";
import jsImage from "../../assets/javascript.jpg";
import reactImage from "../../assets/react.jpg";

const Skills = () => {
  const skills=[
    {
      id: 1,
      title: "HTML",
      src: htmlImage,
      alt: "HTML"
    },
    {
      id: 2,
      title: "CSS",
      src: cssImage,
      alt: "CSS"
    },
    {
      id: 3,
      title: "Bootstrap",
      src: bootstrapImage,
      alt: "Bootstrap"
    },
    {
      id: 4,
      title: "Tailwind CSS",
      src: tailwindImage,
      alt: "Tailwind CSS"
    },
    {
      id: 5,
      title: "JavaScript",
      src: jsImage,
      alt: "JavaScript"
    },
    {
      id: 6,
      title: "React",
      src: reactImage,
      alt: "React"
    },
  ]
  return (
    <div className="relative">
      <section>
        <PageHeader header="My Skills" icon={<GiSkills size={40} />} />
      </section>
      <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(1000px)",
          }}
          end={{
            transform: "translateY(50px)",
          }}
        >
        <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({id,src,title,alt})=>(
            <div key={id} className="col-span-1 border border-black rounded-lg
             bg-gray-400 cursor-pointer flex flex-col items-center
              justify-center w-[80%] mx-5 hover:scale-110 duration-100">
              <img className="w-[50%] mt-5" src={src} alt={alt} />
              <h3 className="text-white text-3xl mt-5 mb-3">{title}</h3>
            </div>
          ))}
        </div>
        </Animate>
    </div>
  );
};

export default Skills;
