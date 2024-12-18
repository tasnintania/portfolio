import React from "react";
//images
import MyImage from "../assets/cover.webp";
//icons
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode, SiHackerrank, SiCodingninjas } from "react-icons/si";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "react-bootstrap/Image";
import Button from "./Button";

const Banner = () => {
  return (
    <section
      className="min-h-[80vh] lg:min-h-[85vh] flex sm:justify-center"
      id="home"
    >
      <div className="mx-auto md:mx-auto">
        <div
          className="flex flex-col sm:pt-20 md:pt-0 gap-y-6 lg:flex-row lg:items-center
        lg:align-middle overflow-hidden "
        >
          {/* {text} */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 text-center align-middle font-secondary xl:ml-[3vw] lg:text-left sm:w-full text-2xl md:mb-12  md:mt-[7vh]"
          >
            <p className="text-cyan-600 mb-3 lg:mb-8">
              <span className="text-[2rem]">Hi there!</span>
              <span
                className="wave ml-3 text-4xl"
                role="img"
                aria-labelledby="wave"
              >
                👋🏻
              </span>
            </p>

            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[6vh] leading-[0.8] lg:text-[6vh] font-semibold pb-2"
            >
              <span className="text-cyan-700">I'M</span> Tania{" "}
              <span>Khatun</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-[3vh] lg:text-[3vh] font-secondary uppercase leading-[1] pt-1
              flex flex-row lg:justify-start justify-center py-6 xl:space-y-11"
            >
              <TypeAnimation
                sequence={[
                  "Software Quality Assurance Engineer",
                  2000,
                  "QA Tester",
                  2000,
                  // "Front-End Developer",
                  // 2000,
                ]}
                speed={50}
                className="text-cyan-700 pt-2 font-extrabold text-2xl"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="xl:mt-5mx-auto text-[3vh] lg:text-[2vh] lg:mx-0"
            >
              Nice to meet you. Please take a look around.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center my-8 mx-auto lg:mx-0 text-sm"
            >
              <div>
                <Link to="work" activeClass="active">
            
                  <Button btnText='My Projects' />
                </Link>
              </div>
              <a
                href="https://drive.google.com/file/d/1pn9IcgQTQlt2EsMgl2TQix9Dpj6-k1p_/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="px-4 py-3 border-b-4 border-cyan-200 text-cyan-200 hover:text-white hover:bg-cyan-700
                  transition-all duration-200 w-[150px] xl:w-[200px] flex justify-center flex-row items-center text-base xl:text-xl"
                >
                  See my Resume
                  <HiArrowNarrowRight className="ml-3" />
                </div>
              </a>
            </motion.div>
            <div className="xl:space-y-5 ">
              <a href="/" className="text-gradient btn-link md:mb-5">
                FIND ME ON
              </a>
              {/* {Socials} */}
              <div className="flex text-[20px] gap-x-2 max-w-max mx-auto lg:mx-0">
     
                <a
                  href="https://www.linkedin.com/in/tania44/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
                    alt="LinkedIn Badge"
                  />
                </a>
                {/* <a
                  href="https://www.upwork.com/freelancers/~0119e1d121c251c417"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/upwork-73bb44?style=for-the-badge&logo=upwork&logoColor=white"
                    alt="Upwork Badge"
                  />
                </a>
                <a
                  href="https://www.fiverr.com/s/2bG1rq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Fiverr-388E3C?style=for-the-badge&logo=fiverr&logoColor=white"
                    alt="Fiverr Badge"
                  />
                </a> */}

                <a
                  href="https://wa.me/+8801632885492"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/WhatsApp-075E54?style=for-the-badge&logo=whatsapp&logoColor=white"
                    alt="Whatsapp Badge"
                  />
                </a>
                <a
                  href="https://www.facebook.com/tasnin.tania.3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                    alt="Facebook Badge"
                  />
                </a>
                <a
                  href="skype:live:.cid.41359e9fd42b4d5a?chat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Skype-00AFF0?style=for-the-badge&logo=skype&logoColor=white"
                    alt="Skype Badge"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* {image} */}
          <div className="flex justify-center items-center align-middle mx-auto md:mb-12 lg:mb-0 md:mt-[6vh]">
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="hidden md:flex
          md:mx-auto justify-center mix-blend-lighten brightness-150 md:ml-[10vw] lg:ml-[15vw] xl:ml-[3vw]"
            >
              <Image src={MyImage} alt="" height={950} width={950} fluid />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
