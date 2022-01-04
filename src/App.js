import React, { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import Contact from './ContactForm';

function App() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    async function fetchProjectList() {
      const response = await fetch('projects.json');
      const list = await response.json();
      if (response.status !== 200) {
        throw Error(list.message);
      }
      setProject(list);
    }
    fetchProjectList();
  }, [])

  return (
    <article>
      <section>
        <ul className="font-source-code text-xl flex p-6 justify-center gap-6">
          <li><a href="#projects">Projects</a></li>
          <li><a href="https://drive.google.com/file/d/1-iFPv0e6ZBKlDrS80W4ybbpUifiSQsNS/view?usp=sharing" target="_blank"  rel="noreferrer">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </section>
      <section className="mt-10 mx-40 p-28 bg-repeat flex justify-center flex-col" style={{ backgroundImage: `url(https://www.kindpng.com/picc/m/38-382638_transparent-polka-dot-background-png-transparent-square-dots.png)`, backgroundSize: `400px 400px` }}>
        <p className="text-8xl font-bold  tracking-widest text-center">marisa raj.</p>
        <p className="text-2xl pt-4 text-gray-500 italic text-center">Bringing artistic conceptions to life with code.</p>
      </section>
      <section className="mt-20 pt-2 pb-1 w-screen bg-gradient-to-b from-gray-300 white ">
        <ul className="flex gap-52 justify-center text-center">
          <li>
            <i class="fa fa-briefcase text-4xl text-gray-800"></i>
            <p className="font-qs font-bold tracking-wide">WEB DEVELOPER</p>
            <p className="text-sm">Self-Employed</p>
            <p className="text-xs text-red-800 animate-pulse">Oct, 2021 - Present</p>
          </li>
          <li>
            <i className="fa fa-graduation-cap text-4xl text-gray-800"></i>
            <p className="font-bold tracking-wide">BACHELOR'S IN COMPUTER APPLICATIONS</p>
            <p className="text-sm">Stella Maris College, Chennai</p>
            <p className="text-xs">2018 - 2021</p>
          </li>
          <li>
            <img className="w-8 block m-auto" src="https://www.freeiconspng.com/uploads/backpack-school-bag-icon-14.png" alt="school backpack"/>
            <p className="pt-2 font-bold">HIGH SCHOOL</p>
            <p className="text-sm">SBOA School & Jr Collge</p>
            <p className="text-xs">2016-2018</p>
          </li>
        </ul>
      </section>
      <section className="mt-16 m-6" id="projects">
        <p className="font-source-code font-bold text-4xl">projects.</p>
        <section>
          <ProjectList list={projects} />
        </section>
      </section>
      <Contact />
    </article>
  );
}

export default App;
