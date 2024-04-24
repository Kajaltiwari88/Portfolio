import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import img1 from "../../assets/img1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative justify-normal mx-14 my-14 ">
      <div className="flex flex-col justify-center ">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(1200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="lg:absolute top-42 right-0 lg:w-[40%] w-[100%]">
            <img className="border-black rounded-3xl" src={img1} />
          </div>
        </Animate>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(-1200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h1
            className="lg:leading-relaxed lg:text-5xl text-amber-300
           font-semibold text-[1.5rem] lg:text-left text-center mt-5"
          >
            Hi,I am Kajal Tiwari
            <br />A Beginner Web Developer
          </h1>
        </Animate>
       
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateY(900px)",
            }}
            end={{
              transform: "translateX(80px)",
            }}
          >
            <Link to={"/contact"}>
            <button
              className="flex items-center border border-red-800 rounded-lg 
            text-[#f7f1e3] font-bold lg:text-2xl bg-[#227093]
          w-38 py-2 px-3 mt-6 cursor-pointer hover:bg-[#34ace0] "
            >
               Hire Me
             
              <span className="pl-3 justify-center py-1">
                <BsFillArrowRightSquareFill size={24} />
              </span>
            </button>
            </Link>
          </Animate>
        </div>
      </div>

  );
};

export default Home;
