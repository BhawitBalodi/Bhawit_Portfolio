import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import iit from "../public/iitd.png"
import csirnpl from "../public/npl.png"
import cn from "../public/codingninja.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import spp1 from "../public/spp1.png"
import spp2 from "../public/spp2.png"
import vm from "../public/vm.png"
import vlbot from "../public/vlbot.png"
import rb from "../public/reserachpaper_1.png"



export default function Home() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <head>
        <title>Bhawit Balodi Portfolio</title>
      </head>
      <main className="bg-white px-10 md:px-20">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl lg:px-40" />
              </li>
              <li>
                <a
                  className="bg-teal-600 text-white px-4 py-2 rounded-md ml-8"
                  href="https://docs.google.com/document/d/1vM9cRLADJWN5MKt_ZyCcZIq0sIVgzPEmqWMWekJ-Kqg/edit?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Bhawit Balodi
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Data Scientist</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            Highly creative individual and an extremely fast learner, graduating with a Bachelor of Technology in Computer Science from a reputed university. Always enthusiastic to grasp new skills and have the desire to deliver my best at all possible times. My curiosity, willingness, and hard work will be seen through my work.
            </p>
          </div>


          <div className="text-5-xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle/>
            <AiFillLinkedin />
            <AiFillYoutube />
            
          </div>

          <div className="text-5-xl flex justify-center gap-0  text-gray-600">
            
            <a className="  text-teal-600 px-5 py-4 " href="https://github.com/BhawitBalodi">Github</a>
            <a className="  text-teal-600 px-5 py-4 " href="https://www.linkedin.com/in/bhawit-balodi-106632208/">Linkedin</a>
            <a className="  text-teal-600 px-5 py-4 " href="https://www.youtube.com/@bhawitbalodi4324">Youtube</a>
            
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>



        <section>

          <div>
            <h3 className="text-3xl py-1">Skills</h3>
            <p className="text-md py-1 leading-8 text-gray-800">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>C++/Python</li>
            <li>SQL</li>
            <li>Tableau</li>
            <li>Selenium</li>
            </p>
            
          </div>

          <div>
            <h3 className="text-3xl py-3">My Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
            When I was in college, my interest in{" "}
              <span className="text-teal-500"> machine learning </span>
              developed during my <span className="text-teal-500">2nd year </span>
              Since then, I have been learning new things and applying them in the practical world. I completed internships at three different places during my college years.
            </p>
            
          </div>



          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 flex flex-col items-center justify-center">
              <Image src={iit} width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Machine Learning Internship - IIT Delhi</h3>
              <p className="py-2">
              Worked in the Indian Institute of Technology - Delhi as a Machine Learning Intern.
              <li>Working with Lithium-ion Battery data for the SOC, SOP, SOE estimation.</li>
              <li>Implemented Data Cleaning and Exploratory Data analysis on the datasets.</li>
              <li>Working on different Algorithms like CNN, LSTM, etc.</li>
              </p>
              <h4 className="py-4 text-teal-600">Techstack</h4>
              <p className="text-gray-800 py-1">TensorFlow-Keras, Python, NumPy, Seaborn, Google Colab</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 flex flex-col items-center justify-center">
              <Image src={csirnpl} width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Machine Learning Intern - CSIR NPL</h3>
              <p className="py-2">
              Worked in the Council of Scientific and Industrial Research - National Physical Laboratory and made end-to-end pipeline
              <li>Worked with live solar power sensor data for the Power output of a solar panel.</li>
              <li>Performed Exploratory Data analysis and worked on experimentation with Simple NN, RNN, LSTM</li>
              <li>Deployed the deep learning pipeline with Flask.</li>
              </p>
              <h4 className="py-4 text-teal-600">Techstack</h4>
              <p className="text-gray-800 py-1">TensorFlow-Keras, Python, NumPy, Seaborn, Google Colab</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 flex flex-col items-center justify-center">
              <Image src={cn} width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Student Ambassador at Coding Ninja</h3>
              <p className="py-2">
              Building a network of students and teachers in college using offline and online strategies. ideating and executing engaging campaigns in college. working on marketing plans and carrying out campaigns to generate business for Coding Ninja.
              </p>
              <h4 className="py-4 text-teal-600">Skills</h4>
              <p className="text-gray-800 py-1"> 
              <li>Business Planning</li>
              <li>Event Management</li>
              <li>Team Leadership</li>
              <li>Public Speaking</li>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl py-1">Projects</h3>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 flex flex-col items-center justify-center">
              <h3 className="text-lg font-medium pt-8 pb-2">Solar Power Prediction</h3>
              <p className="py-2">
              A Deep Learning based web-app for prediction of Solar Power.
              <li>Built the Deep Learning models from scratch including the entire dataset collected from the sensor of the solar panel. Applied various algorithms such as ANN, RNN and LSTM. Also deal with noisy data and missing values in the dataset.</li>
              <li>Achieved best result on ANN with dropout layers among Simple ANN, RNN, LSTM. Deployed this using the Flask app.</li>
              <li>Tech Stack: Tensorflow, Flask, Python, HTML, CSS, Seaborn, matplotlib, Google colab</li>
              </p>
              <a
                  className="  text-teal-600 px-5 py-4 "
                  href="https://github.com/BhawitBalodi/Solar_Data_Pred_Web"
                >
                  Check Github Repository
                </a>
              <Image className="rounded-lg object-cover" src={spp1} width={1500} height={500}/>
              <Image className="rounded-lg object-cover" src={spp2} width={1500} height={500}/>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 flex flex-col items-center justify-center">
              <h3 className="text-lg font-medium pt-8 pb-2">Virtual Lawyer</h3>
              <p className="py-2">
              Chat GPT like application which is made for Law Consultancy.
              <li>Utilized the LLama model 7b quantized version and Chainlit to architect and develop an advanced Virtual Lawyer Bot. Engineered with natural language processing capabilities, this bot assists users in legal queries and provides tailored advice, streamlining legal consultations</li>
              <li>Integrated Chainlit, an advanced knowledge graph framework, to augment the Virtual Lawyer Bot's capabilities. Chainlit facilitated seamless access to extensive legal databases, empowering the bot to retrieve and interpret diverse legal precedents and case laws effectively.</li>
              </p>
              <a
                  className="  text-teal-600 px-5 py-4 "
                  href="https://github.com/BhawitBalodi/VLaw_bot"
                >
                  Check Github Repository
                </a>
              <Image className="rounded-lg object-cover" src={vlbot} width={1500} height={500}/>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 flex flex-col items-center justify-center">
              <h3 className="text-lg font-medium pt-8 pb-2">Virtual Mouse</h3>
              <p className="py-2">
              Developed with the help of open-cv, it allows us to use a computer without a physical mouse by providing on screen buttons controls that you can use to move the cursor and perform mouse actions such as clicking, dragging, and scrolling. Virtual mice can be useful for people who don't have a physical mouse, or for those who prefer to use a different type of input device, such as a touchpad or joystick. Some virtual mice also offer additional features, such as customizable buttons and gesture support. 
              </p>
              <a
                  className="  text-teal-600 px-5 py-4 "
                  href="https://github.com/BhawitBalodi/Virtual_mouse-CV-"
                >
                  Check Github Repository
                </a>
              <Image className="rounded-lg object-cover" src={vm} width={1500} height={500}/>
            </div>
            
          </div>

          <div>
            <h3 className="text-3xl py-1">Publications</h3>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 flex flex-col items-center justify-center">
              <h3 className="text-lg font-medium pt-8 pb-2">Automated Static Malware Analysis Using Machine Learningn</h3>
              <p className="py-2">
                By - Bhawit Balodi, Srijan Sharma, Anil Kumar Shukla, Bhupendra Singh
              </p>
              <a
                  className="  text-teal-600 px-5 py-4 "
                  href="https://ieeexplore.ieee.org/document/10116580"
                >
                  Check Paper
                </a>
              <Image className="rounded-lg object-cover" src={rb} width={1000} height={500}/>
              
            </div>


            
          </div>
         
         <div>
          <h1 className="text-center">Thanks!</h1>
         </div>
        </section>
      </main>
    </div>
  );
}
