import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiReactquery,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setScroll((window.scrollY / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
    { name: "React", icon: <SiReact color="#61dafb" /> },
    { name: "Redux Toolkit", icon: <SiRedux color="#764abc" /> },
    { name: "React Query", icon: <SiReactquery color="#ff4154" /> },
    { name: "HTML", icon: <SiHtml5 color="#e34f26" /> },
    { name: "CSS", icon: <SiCss color="#1572b6" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" /> },
    { name: "Git", icon: <SiGit color="#e34f26" /> },
  ];
  const [active, setActive] = useState("");

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // buffer for navbar

      const sections = ["about", "skills", "projects", "contact"];

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = ["about", "skills", "projects", "contact"];

  const projects = [
    {
      title: "Acqueon Engagement Console",
      desc: "Enterprise customer engagement platform enabling omnichannel campaigns and improving agent productivity.",
      link: "https://devfreedomaeccore.acqueonlab.com/FT1AECConsole/#/login",
    },
     {
    title: "OneCare Health Platform",
    desc: "Healthcare platform enabling patient engagement and seamless care coordination.",
    link: "https://onecarehealth.com/",
  },
    {
    title: "Konnectify Integration Platform",
    desc: "Integration platform enabling seamless data flow and workflow automation across applications.",
    link: "https://www.konnectify.co/",
  },
  ];
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 🎯 SCROLL BAR */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{ width: `${scroll}%` }}
        />
      </div>

      {/* 🌈 NAVBAR */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div
          className="relative flex gap-2 px-6 py-3 rounded-full 
      bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl">
          {/* Animated background indicator */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r 
  from-blue-500 via-purple-500 to-pink-500 z-0"
            style={{
              width: `${100 / tabs.length}%`,
              left: `${(tabs.indexOf(active) * 100) / tabs.length}%`,
            }}
          />

          {tabs.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              spy={true}
              offset={-120} // IMPORTANT (adjust for navbar height)
              duration={500}
              onClick={() => setActive(item)}
              className={`relative z-10 px-4 py-2 text-sm cursor-pointer rounded-full 
    transition-all duration-300 font-medium uppercase
    ${active === item ? "text-white" : "text-gray-700 hover:text-blue-600"}`}>
              {item}

              {/* Glow effect on active */}
              {active === item && (
                <motion.div
                  layoutId="activeGlow"
                  className="absolute inset-0 rounded-full blur-md opacity-30 
                bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 -z-10"
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
      {/* 🚀 HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-white">
        {/* Name Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Sarathiraj Aruchamy
          </span>
          👨‍💻
        </motion.h1>

        {/* Subtitle with fade */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-5 text-gray-600 text-lg md:text-xl">
          React.js Developer | 3.2 Years Experience | Building Scalable UI 🚀
        </motion.p>

        {/* Highlight skills row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full shadow-sm">
            React
          </span>
          <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full shadow-sm">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full shadow-sm">
            Redux Toolkit
          </span>
          <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full shadow-sm">
            React Query
          </span>
        </motion.div>

        {/* CTA Button with glow */}
        <motion.div
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 20px rgba(99,102,241,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full shadow-xl cursor-pointer font-semibold tracking-wide">
          Explore My Work 🚀
        </motion.div>

        {/* Floating animated circle background */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-60"
        />

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-60"
        />
      </section>

      {/* 🧠 ABOUT */}
      <Element
        name="about"
        className="pt-28 py-28 px-6 text-center scroll-mt-28">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-[2px] rounded-3xl 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          {/* Inner Card */}
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl">
            {/* Title with animation */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-8 
        bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 
        text-transparent bg-clip-text tracking-tight">
              About Me
            </motion.h2>

            {/* Animated paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed text-lg md:text-xl">
              <span className="font-semibold text-blue-600">
                React.js Frontend Developer
              </span>{" "}
              with{" "}
              <span className="font-semibold">
                4.5 years of overall IT experience
              </span>
              , including{" "}
              <span className="font-semibold text-purple-600">
                3+ years of hands-on frontend development
              </span>{" "}
              and{" "}
              <span className="font-semibold text-pink-500">
                1.5 years in production support
              </span>
              .
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6">
              Experienced in building{" "}
              <span className="font-semibold text-blue-600">
                scalable, responsive, high-performance web applications
              </span>{" "}
              using{" "}
              <span className="font-semibold">
                React.js, TypeScript, Redux Toolkit
              </span>{" "}
              and modern UI frameworks like{" "}
              <span className="font-semibold">
                Tailwind CSS and Material UI
              </span>
              .
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6">
              Strong expertise in{" "}
              <span className="font-semibold text-purple-600">
                state management, API integration (Axios, React Query)
              </span>{" "}
              and building{" "}
              <span className="font-semibold text-pink-500">
                reusable, maintainable component architectures
              </span>
              .
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed text-lg md:text-xl mt-6">
              Proven ability in{" "}
              <span className="font-semibold text-blue-600">
                production issue troubleshooting, performance optimization
              </span>
              , and delivering clean UI/UX solutions in{" "}
              <span className="font-semibold">Agile environments</span>.
            </motion.p>
          </div>
        </motion.div>
      </Element>

      {/* ⚡ SKILLS */}
      <Element
        name="skills"
        className="pt-28 py-24 px-6 text-center bg-gray-50 scroll-mt-28 relative overflow-hidden">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 
    bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 
    text-transparent bg-clip-text">
          Skills ⚡
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              // ✨ stagger animation
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              // 💥 hover effects
              whileHover={{
                scale: 1.08,
                rotate: [0, 2, -2, 0],
              }}
              className="relative p-6 bg-white rounded-2xl shadow-md 
        border border-gray-100 hover:shadow-2xl transition-all duration-300
        overflow-hidden group">
              {/* Glow background on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-r 
        from-blue-100 via-purple-100 to-pink-100 
        opacity-0 group-hover:opacity-100 transition duration-500"
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Icon with animation */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-5xl mb-3">
                  {skill.icon}
                </motion.div>

                {/* Skill name */}
                <p className="text-gray-800 font-semibold text-lg">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Element>

      {/* 💼 PROJECTS */}
      <Element
        name="projects"
        className="pt-28 py-24 px-6 text-center scroll-mt-28 bg-white">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 
    bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 
    text-transparent bg-clip-text">
          Projects 🚀
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((item: any, index) => (
            <motion.div
              key={index}
              // ✨ stagger animation
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              // 💥 hover animation
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg 
        border border-gray-100">
              {/* Project Image */}
              <div className="h-56 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-left text-white z-10">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>

                <p className="text-sm text-gray-200 mb-3">{item.desc}</p>

                {/* Button */}
                {item.link ? (
                  <motion.button
                    onClick={() => window.open(item.link!, "_blank")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm bg-white text-black rounded-full font-semibold">
                    Live Project 🚀
                  </motion.button>
                ) : (
                  <button className="px-4 py-2 text-sm bg-white/70 text-black rounded-full font-semibold cursor-not-allowed">
                    Coming Soon ⏳
                  </button>
                )}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 
        bg-gradient-to-t from-purple-500/30 via-transparent to-transparent 
        transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </Element>
      {/* 📞 CONTACT */}
      <Element
        name="contact"
        className="pt-28 py-24 px-6 text-center bg-gray-50 scroll-mt-28 relative overflow-hidden">
        {/* Floating background glow */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-30"
        />

        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-pink-300 rounded-full blur-3xl opacity-30"
        />

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="relative max-w-xl mx-auto p-[2px] rounded-3xl 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          {/* Inner glass card */}
          <div className="bg-white/90 backdrop-blur-xl p-10 md:p-12 rounded-3xl shadow-2xl relative">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold mb-6 
        bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 
        text-transparent bg-clip-text">
              Let’s Connect 🚀
            </motion.h2>

            {/* Contact items */}
            <div className="space-y-5 text-gray-700 text-lg">
              <motion.p
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center justify-center gap-2">
                📧{" "}
                <span className="font-medium">
                  sarathirajaruchamy@gmail.com
                </span>
              </motion.p>

              <motion.p
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center justify-center gap-2">
                📱 <span className="font-medium">+91 73732 40060</span>
              </motion.p>

              <motion.p
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center justify-center gap-2">
                📍 <span className="font-medium">Chennai, India</span>
              </motion.p>
            </div>

            {/* CTA Button */}
            {/* <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 25px rgba(99,102,241,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block px-8 py-3 bg-gradient-to-r 
        from-blue-500 via-purple-500 to-pink-500 
        text-white rounded-full shadow-lg font-semibold cursor-pointer">
              Say Hello 👋
            </motion.div> */}

            {/* Floating decorative icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute top-4 right-6 text-blue-400 text-2xl">
              ✨
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute bottom-4 left-6 text-pink-400 text-2xl">
              💫
            </motion.div>
          </div>
        </motion.div>
      </Element>
    </div>
  );
}

export default App;
