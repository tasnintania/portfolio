import React from 'react';
//countup
import CountUp from 'react-countup';
//intsersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
//To add link to contact 
import { Link } from 'react-scroll';
import Button from './Button';
import MyImage from '../assets/tania_about.png'

// bg-slate-800
// bg-stone-700
//#AA4465
//#3D0814

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  // mix-blend-exclusion
  return (
    <section className='section sm:bottom-2 bg-cyan-950' id="about" ref={ref}>
      <div className="container md:mx-auto md:flex md:justify-center">

        <div className='flex flex-col items-center align-middle justify-center lg:flex-row
        lg:items-center h-screen lg:space-x-[2vw] md:p-4'>
          {/* {img} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="invisible sm:flex-1 sm:bg-about sm:bg-contain sm:bg-no-repeat md:h-[90vh] md:w-[40vw]
            sm:bg-center sm:visible w-[50vw] ">
            <Image src={MyImage} alt="" className="max-w-[40vw]" fluid />
          </motion.div>
          {/* {text} */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 xl:leading-9 md:mt-10">
            <h2 className='h2 text-accent text-5xl lg:text-[5vh] font-tertiary'>Meet me</h2>
            <h4 className='h4 mb-4 lg:text-[2.5vh]'>I'm a Software Quality Assurance Engineer with almost 02 years of experience.</h4>

            <p className='text-base font-extralight xl:text-[2vh] xl:leading-9 xl:w-[700px]'>

            I have strong expertise in <span className='text-yellow-400'>Manual Testing,</span>  including requirement analysis, test planning, writing and reviewing test cases, test execution and evaluation, creating detailed test reports, conducting root cause analysis, and reporting bugs using test management tools.

            I use <span className='text-yellow-400'>Xmind</span>  for creating clear and structured <span className='text-yellow-400'>mind maps</span> , and I’m experienced with <span className='text-yellow-400'>web automation testing tools</span>  like <span className='text-yellow-400'>Selenium and Cypress.</span>  For performance testing, I rely on <span className='text-yellow-400'>JMeter</span> , while <span className='text-yellow-400'>Postman</span>  is my go-to tool for <span className='text-yellow-400'>API testing.</span> 

            I am well-versed in <span className='text-yellow-400'>Agile methodologies</span>  and use <span className='text-yellow-400'> Jira</span> for efficient project management and tracking. Additionally, I have a solid understanding of key concepts such as <span className='text-yellow-400'>SDLC, STLC, and OOP.</span> 

            My technical skills include proficiency in programming languages like <span className='text-yellow-400'>HTML, CSS, JavaScript, Java, C, and C++.</span>  I’m also skilled in working with databases such as <span className='text-yellow-400'>MySQL and PostgreSQL</span> , and I effectively use <span className='text-yellow-400'>Git and GitHub</span>  for source and version control.
          

            </p>
            <br />


            {/* {stats} */}
            <div className="flex gap-x-2 lg:gap-x-10 mb-12">

              <div>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={52} duration={3} /> : 52}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Months of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={78} duration={3} /> : 78}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Github  <br />
                  Repositories
                </div>
              </div>

              <div className='invisible md:visible'>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : 12}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Technologies <br />
                  Mastered and still learning
                </div>
              </div>

            </div>
            <div className="hidden md:flex md:gap-x-8 md:items-center md:mb-5">
              <Link to="contact" activeClass='active'>
        
                <Button btnText="Say 'Hi'!" />
              </Link>
              <a href="https://drive.google.com/file/d/1TRIbdf5kMjlmmRGnv0M8q5N2-_0oJfbO/view?usp=sharing" target="_blank" rel="noreferrer">
            
                <Button btnText='Resume' />
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


