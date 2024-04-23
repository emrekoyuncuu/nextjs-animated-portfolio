"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef()
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" })

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" })

  const experienceList = [
    {
      id: 1,
      title: "Front-End Dev.",
      desc: [
        "• Catering as a freelance front-end developer, I focus on creating user-friendly websites using modern technologies. I'm skilled at designing and coding interfaces to make them smooth and easy to use."
      ].map((item, index) => <div key={index}>{item}<br /></div>),
      date: "2024 – Present",
      company: "Freelancer"
    },
    {
      id: 2,
      title: "MOBILE DEVELOPER",
      desc: [
        "• A library has been written for Bluetooth Low Energy.",
        "• Back-end and front-end software was written using Jetpack libraries, which are up-to-date Android technologies.",
        "• UI/UX designs were made with Adobe XD."
      ].map((item, index) => <div key={index}>{item}<br /></div>),
      date: "09/2021 – 06/2022",
      company: "PERFORMANZ R&D"
    },
    {
      id: 3,
      title: "INTERN",
      desc: [
        "• Electronic materials and usage areas were learned. Mini mobile applications were written."
      ].map((item, index) => <div key={index}>{item}<br /></div>),
      date: "02/2021 - 03/2021",
      company: "TORK ROBOTIC"
    },
    {
      id: 4,
      title: "INTERN",
      desc: [
        "• A simple Machine Learning has been done in WEKA."
      ].map((item, index) => <div key={index}>{item}<br /></div>),
      date: "02/2021 - 03/2021",
      company: " MANISA CELAL BAYAR UNIVERSITY"
    }
  ];

  const ExperienceItems = experienceList.map((item) => (
    <div className="flex justify-between h-48" key={item.id}>
      {/* LEFT */}
      <div className="w-1/3">
        {item.id % 2 !== 0 && (
          <div className="">
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {item.title}
            </div>
            <div className="p-3 text-sm italic">{item.desc}</div>
            <div className="p-3 text-red-400 text-sm font-semibold">
              {item.date}
            </div>
            <div className="p-1 bg-white rounded text-sm font-semibold w-fit">
              {item.company}
            </div>
          </div>
        )}
      </div>
      {/* CENTER */}
      < div className="w-1/6 flex justify-center" >
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div >
      {/* RIGHT */}
      < div className="w-1/3" >
        {
          item.id % 2 === 0 && (
            <div className="">
              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg">
                {item.title}
              </div>
              <div className="p-3 text-sm italic">{item.desc}</div>
              <div className="p-3 text-red-400 text-sm font-semibold">
                {item.date}
              </div>
              <div className="p-1 bg-white rounded text-sm font-semibold w-fit">
                {item.company}
              </div>
            </div>
          )
        }
      </div >
    </div >
  ));




  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div className=" h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Emre Koyuncu has worked with Java as a junior level software engineer since his university years. He
              lived for 8 months in Ireland, whose native language is English, and received language training because he
              felt his English insufficient. While he was working front-end with android, he realized his interest in design.
              He decided that he could use this curiosity more efficiently with React. Currently developing Full Stack
              applications
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              To write history is as important as to make history. If the writer does not remain true to the maker, then the unchanging truth takes on a quality that will confuse the humanity.
            </span>
            {/* BIOGRAPHY SIGN */}
            <div className="self-end">
              <svg width="217" height="78" viewBox="0 0 217 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.6442 75.6745C35.8139 75.1737 34.7653 73.9991 35.6135 71.1596C35.9767 69.944 36.2402 69.6851 37.2756 69.5269C37.9524 69.4236 38.5667 69.3937 38.6408 69.4607C38.7149 69.5276 38.1515 70.1318 37.3888 70.8034C36.4736 71.6094 36.0408 72.2933 36.116 72.8149C36.3121 74.176 37.7948 74.6332 41.4331 74.4545C44.245 74.3164 45.1666 74.0887 47.5966 72.9313C51.2743 71.1796 53.9193 68.5636 55.4614 65.1526C56.4646 62.9334 56.5909 62.291 56.4269 60.2412C55.8535 53.0777 49.0311 47.974 39.9939 47.9481C38.0035 47.9424 37.0428 48.2319 32.9755 50.0631C28.3475 52.1468 22.7121 54.0293 21.1023 54.0293C20.5144 54.0293 18.0175 56.587 12.1796 63.1695C7.72103 68.1966 3.94067 72.3918 3.77877 72.4922C3.61687 72.5925 3.13728 72.5458 2.71301 72.3884C2.03301 72.1361 2.82182 71.1104 9.37025 63.7316L16.7989 55.361L14.4494 55.1317C11.8019 54.8733 10.9922 54.3672 11.6035 53.3529C12.3443 52.1237 16.6925 49.5692 19.4458 48.7456C20.9569 48.2936 22.615 47.797 23.1305 47.642C23.6863 47.4749 26.379 44.6524 29.7466 40.707C36.4737 32.8255 42.5866 26.6341 43.6411 26.6341C44.051 26.6341 44.3864 26.7172 44.3864 26.8188C44.3864 26.9203 40.6306 31.2928 36.0402 36.5354C31.4498 41.778 27.6941 46.2322 27.6941 46.4337C27.6941 46.6476 29.5421 46.8 32.1351 46.8H36.5762L40.1968 44.6479C47.9532 40.0374 56.6791 33.1006 57.0915 31.2171C57.3673 29.9581 58.0437 29.9906 58.0437 31.2628C58.0437 33.0439 55.9714 34.8471 43.4743 43.9405C41.4565 45.4087 40.3108 46.4669 40.629 46.5684C40.922 46.662 42.4153 47.008 43.9474 47.3374C54.2916 49.5614 59.5876 57.0545 56.9562 65.7432C55.8409 69.4259 53.6833 71.7854 49.5691 73.8215C46.1747 75.5013 42.9396 76.1053 39.6442 75.6745ZM18.0998 54.1739C18.9648 53.9413 22.1487 50.0541 21.9344 49.4923C21.7546 49.0211 17.9319 50.0948 15.5734 51.279C13.2181 52.4616 12.3841 53.4628 13.278 54.0343C13.9111 54.4391 16.8023 54.5228 18.0998 54.1739ZM28.0988 50.8782C30.8241 49.8414 33.764 48.4121 33.764 48.124C33.764 48.0236 32.0141 47.9426 29.8754 47.944L25.9869 47.9466L24.2847 50.0217C23.3485 51.163 22.528 52.2609 22.4613 52.4615C22.3254 52.8705 24.3753 52.2948 28.0988 50.8782ZM111.25 71.5359C110.312 70.9618 110.017 70.5163 110.017 69.6687C110.017 66.7456 115.249 65.0881 124.528 65.0709L128.607 65.0634V66.0088C128.607 66.9313 128.554 66.9489 126.425 66.7364C121.998 66.2943 112.104 68.5464 112.104 69.9962C112.104 71.3303 115.544 71.3265 127.251 69.9795C141.091 68.3871 156.376 65.3351 176.787 60.0885C196.889 54.921 205.086 51.7597 210.284 47.1694C214.984 43.0193 215.087 38.3887 210.58 33.8922C208.887 32.2037 207.762 31.35 204.67 29.407C201.193 27.2216 190.789 22.9151 188.096 22.5464C185.404 22.1779 184.965 22.5184 182.814 26.6443C180.563 30.961 179.627 31.2984 180.707 27.404C181.226 25.5331 181.256 24.9679 180.87 24.3481C180.302 23.4355 180.763 22.4928 182.114 21.8059C182.793 21.461 183.427 20.1924 184.776 16.479C187.294 9.55122 187.326 9.40749 186.015 11.0235C185.426 11.7501 182.403 15.8594 179.298 20.1552C172.665 29.3332 172.373 29.678 171.22 29.678C170.508 29.678 170.339 29.4756 170.346 28.6317C170.35 28.0562 170.695 26.8322 171.111 25.9116C171.528 24.9911 171.772 24.141 171.654 24.0227C171.195 23.5626 170.061 24.7261 167.967 27.8039C165.149 31.946 163.751 33.2592 162.737 32.7149C162.327 32.4948 161.991 31.9783 161.991 31.5671C161.991 30.3465 161.445 30.6907 159.556 33.1024C158.573 34.358 157.635 35.3854 157.472 35.3854C156.858 35.3854 156.008 33.9989 155.754 32.5829L155.491 31.1122L152.151 34.3902C150.314 36.1932 148.529 37.6683 148.185 37.6683C147.308 37.6683 146.676 36.0622 146.962 34.5584C147.094 33.8622 148.655 30.3134 150.43 26.6722C152.205 23.0309 153.593 19.9863 153.513 19.9064C153.372 19.7649 150.335 23.5667 141.301 35.1951C135.672 42.4398 135.444 42.6237 133.947 41.1216C133.226 40.3993 133.19 40.4164 131.194 42.4187C129.75 43.8663 128.762 44.5247 127.746 44.7158C125.621 45.1157 125.052 44.4699 125.311 41.9535L125.518 39.9375L124.502 40.6807C123.943 41.0895 122.119 42.6405 120.45 44.1274C116.431 47.7077 112.395 50.4786 111.91 49.9917C111.115 49.1945 115.919 36.9265 118.387 33.4501C119.26 32.2204 119.18 31.6782 118.205 32.225C117.878 32.4086 113.811 37.0725 109.167 42.5891C100.512 52.8698 98.6645 54.6011 97.5456 53.4788C96.6165 52.547 96.9916 50.8341 99.1469 46.168C100.291 43.6905 101.167 41.6026 101.093 41.5283C101.02 41.454 100.394 42.0503 99.703 42.8533C93.4714 50.0955 87.918 55.6134 83.4302 59.0223C80.8884 60.953 77.1691 62.7798 75.7793 62.7802C73.6788 62.7808 72.5387 60.3905 72.9393 56.8261C73.1777 54.705 72.9967 54.8825 70.5527 59.1658C69.4781 61.0493 68.7211 62.2478 68.8707 61.8293C71.4193 54.6946 76.2804 46.1444 81.2008 40.1415C83.6253 37.1836 85.0163 35.8276 87.8243 33.6846C89.3537 32.5174 89.1597 32.7815 86.8229 35.0478C83.9829 37.8021 81.9572 40.3317 82.5916 40.3317C82.7675 40.3317 84.1876 39.0285 85.7473 37.4356C90.3884 32.6958 94.9738 29.5339 98.9708 28.3172C101.625 27.5092 102.607 27.6308 103.9 28.9277C104.863 29.8937 105.067 30.4258 105.162 32.2233L105.275 34.3669L106.924 32.0058C108.223 30.1437 108.68 29.7344 109.082 30.0693C109.497 30.4147 109.252 31.074 107.77 33.6055C99.783 47.2434 98.6364 49.4085 98.6364 50.8519C98.6364 51.8774 99.8639 51.3241 101.928 49.3683C105.139 46.3248 114.949 34.3875 114.949 33.5231C114.949 33.3609 113.93 33.4945 112.685 33.82C110.659 34.3493 110.394 34.5332 110.168 35.5644C109.918 36.7042 109.911 36.707 109.581 35.8119C109.374 35.2511 109.393 34.73 109.632 34.442C109.843 34.1864 111.749 33.3096 113.868 32.4935L117.72 31.0097L122.499 25.3184C130.94 15.2678 131.188 15.1403 126.291 23.3672C124.434 26.4882 122.976 29.1037 123.051 29.1793C123.127 29.255 130.1 26.8093 138.547 23.7444L153.906 18.1719L157.285 14.153C161.929 8.6284 162.995 8.34108 159.905 13.4469C158.966 14.998 158.198 16.362 158.198 16.4779C158.198 16.5939 160.118 16.0075 162.465 15.1748C164.813 14.3421 171.767 11.9141 177.92 9.77918L189.106 5.89755L189.993 4.28048C190.934 2.5653 191.962 2.13496 191.962 3.45609C191.962 3.89207 192.092 4.1917 192.252 4.12194C196.412 2.30292 198.05 1.825 198.59 2.27374C198.909 2.5393 199.17 3.11078 199.17 3.54369C199.17 4.30128 199.15 4.30422 198.653 3.62183C198.155 2.9386 198.01 2.95821 194.682 4.16193C191.434 5.33671 191.156 5.524 190.013 7.31027C189.345 8.35486 187.996 11.4607 187.015 14.2121C184.366 21.6466 184.469 21.0009 185.952 20.8583C187.074 20.7506 187.579 20.2561 190.352 16.5512C192.263 13.9987 193.447 12.069 193.387 11.6049C193.256 10.583 191.603 10.3508 190.94 11.261C190.667 11.6347 190.444 11.7463 190.444 11.5089C190.444 10.8975 191.982 9.89268 192.919 9.89268C193.352 9.89268 193.911 10.0981 194.162 10.3493C195.393 11.5837 194.133 14.148 189.915 18.997L187.787 21.4427L193.004 23.1983C199.746 25.4671 204.596 27.8873 208.829 31.0962C214.245 35.2012 216.149 38.6527 215.099 42.4657C214.7 43.9146 214.034 44.8795 212.094 46.822C208 50.9212 200.625 54.2638 188.709 57.4202C185.594 58.2451 180.324 59.7008 176.997 60.655C162.998 64.6694 145.552 68.1525 123.574 71.321C115.307 72.5128 112.916 72.5545 111.25 71.5359ZM79.2087 60.5233C79.9829 60.1189 81.5899 58.9632 82.7799 57.955C85.8403 55.3623 95.4475 45.2376 97.9995 41.9158C100.76 38.3222 103.645 32.6036 103.492 31.0293C103.381 29.8951 103.335 29.8699 101.492 29.9372C99.0633 30.0258 93.2207 32.8884 88.9437 36.085C85.4918 38.665 78.9993 45.27 77.3477 47.882C75.2569 51.1884 73.6755 56.7314 74.1737 59.0066C74.6818 61.3263 76.5779 61.8975 79.2087 60.5233ZM117.183 46.2542C118.563 45.1169 122.366 41.5418 125.635 38.3095C131.03 32.9751 131.753 32.3905 133.475 31.9762C135.77 31.4239 136.953 31.8761 136.953 33.3061C136.953 34.5753 137.419 34.4872 138.03 33.1024C138.307 32.4746 138.776 31.961 139.071 31.961C139.806 31.961 139.804 31.9674 138.091 35.3854C136.287 38.9837 136.108 40.2708 137.549 39.2795C138.144 38.8698 152.231 20.1428 152.067 19.9785C151.991 19.9019 146.382 21.8968 139.604 24.4117C132.825 26.9266 125.998 29.456 124.434 30.0327L121.588 31.0811L117.7 38.7436C114.069 45.8982 113.194 48.3219 114.243 48.3219C114.481 48.3219 115.804 47.3914 117.183 46.2542ZM130.537 40.9976C133.137 37.9792 135.815 34.0405 135.815 33.2337C135.815 32.297 134.318 32.7053 132.839 34.0456C130.794 35.8984 126.71 41.7677 126.71 42.8535C126.71 44.5343 128.049 43.8847 130.537 40.9976ZM154.351 30.7244C157.144 27.9516 159.343 26.0254 159.238 26.4439C159.133 26.8624 158.652 28.5274 158.17 30.1438C157.687 31.7601 157.42 33.2107 157.576 33.3672C157.938 33.7298 161.067 30.2532 163.379 26.9195C164.359 25.5069 165.301 24.3512 165.473 24.3512C165.895 24.3512 165.909 24.2933 164.837 26.9415C162.401 32.9519 164.704 32.4249 168.36 26.135C170.128 23.0927 171.731 21.4113 172.309 21.9914C172.488 22.1704 172.738 23.2026 172.866 24.2852C172.994 25.3679 173.248 26.2537 173.43 26.2537C173.612 26.2537 176.453 22.6152 179.744 18.1683C185.5 10.3884 187.678 7.22926 187.287 7.22926C186.416 7.22926 156.38 18.5304 156.026 18.9912C155.188 20.0821 147.955 34.596 147.955 35.1878C147.955 36.5865 149.607 35.4333 154.351 30.7244ZM165.406 20.9268C165.406 20.4364 165.598 20.1667 165.88 20.261C166.141 20.3482 166.354 20.6478 166.354 20.9268C166.354 21.2058 166.141 21.5055 165.88 21.5927C165.598 21.687 165.406 21.4172 165.406 20.9268ZM162.434 20.6853C162.509 20.295 162.739 20.0184 162.945 20.0707C163.496 20.2109 163.4 21.0266 162.809 21.2243C162.476 21.3354 162.346 21.1474 162.434 20.6853ZM121.574 29.0676C122.158 28.4817 123.823 25.4927 123.565 25.4927C123.496 25.4927 122.63 26.4344 121.639 27.5854C120.524 28.8801 120.052 29.678 120.401 29.678C120.711 29.678 121.239 29.4033 121.574 29.0676ZM61.0787 56.6793C61.0787 55.6664 62.1603 54.0293 62.8295 54.0293C63.5367 54.0293 63.4981 55.5574 62.7643 56.608C62.0255 57.666 61.0787 57.706 61.0787 56.6793Z" fill="black" />
              </svg>

            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1 initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">SKILLS</motion.h1>
            {/* SKILL LIST */}
            <motion.div initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React Native</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Java</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Kotlin</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Linux</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">C</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PHP</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML</div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1 initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: "0" } : {}} className="">
              {/* EXPERIENCE LIST ITEM */}
              <div>{ExperienceItems}</div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage