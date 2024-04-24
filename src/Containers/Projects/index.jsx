import PageHeader from "../../Components/PageHeader";
import { MdComputer } from "react-icons/md";
import { Animate } from "react-simple-animate";
import todo from "../../assets/to-do.png";
import weatherApp from "../../assets/weatherapp.jpg";




const Projects = () => {
  const skills=[
    {
      id: 1,
      title: "TO-DO APP",
      src: todo,
      alt: "TODO",
      link: 'https://todolistwebappkajal.netlify.app/',
    },
    {
      id: 2,
      title: "WEATHER APP",
      src: weatherApp,
      alt: "WEATHER APP",
      link:'https://kajal-weather-app.000webhostapp.com/'
    },
 
  ]
  return (
    <div className="relative">
      <section>
        <PageHeader header="My Projects" icon={<MdComputer size={40} />} />
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
          {skills.map(({id,src,title,alt,link})=>(
            <a
            href={link}
            key={id}
            className="col-span-1 border border-black rounded-lg bg-gray-400 cursor-pointer flex flex-col items-center justify-center w-[80%] mx-5 hover:scale-110 duration-100"
            target="_blank"
            rel="noopener noreferrer"
          >
              <img className="w-[50%] mt-5" src={src} alt={alt} />
              <h3 className="text-white text-3xl mt-5 mb-3">{title}</h3>
            </a>
          ))}
        </div>
        </Animate>
    </div>
  );
};

export default Projects;
