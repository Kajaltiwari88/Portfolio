import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import img1 from "../../assets/img1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative mx-14 my-14">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:hidden w-full">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateY(-1200px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <div className="w-full">
              <img className="border-black rounded-3xl " src={img1} alt="img1" />
            </div>
          </Animate>
        </div>
        
        <div className="lg:w-[45%] w-[100%] mr-auto">
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
            <h1 className="leading-loose lg:text-3xl text-amber-300 font-semibold text-[5vw] lg:text-left text-center ">
              Hi, I am Kajal Tiwari
              <br />
              A Beginner Web Developer
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
              transform: "translateY(0px)",
            }}
          >
            <Link to={"/contact"} className="flex flex-col items-center mt-4 ">
              <button
                className="flex lg:absolute left-0 border border-red-800 rounded-lg text-[#f7f1e3] font-bold lg:text-2xl text-2xl bg-[#227093] w-35 py-2 px-3 cursor-pointer hover:bg-[#34ace0]"
                style={{ margin: "auto" }} // Centering the button horizontally
              >
                Hire Me
                <span className="pl-3 pt-2">
                  <BsFillArrowRightSquareFill size={22} />
                </span>
              </button>
            </Link>
          </Animate>
        </div>
        
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
          <div className="lg:w-[46%] w-[100%] ml-auto mt-10 lg:mt-10">
            <img className="border-black rounded-3xl hidden lg:block" src={img1} alt="img1" />
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default Home;
