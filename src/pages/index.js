import AboutMe from "@/components/container/Home/AboutMe";
import Banner from "@/components/container/Home/Banner";
import Contact from "@/components/container/Home/Contact";
import ProjectList from "@/components/container/Home/ProjectList";
import Skills from "@/components/container/Home/Skills";
import Story from "@/components/container/Home/Story";
export default function Home() {
  
  return (
    <div>
      <Banner />
      <div className="">
        <Story />
        <ProjectList />
        <Skills />
        <AboutMe />
        <Contact />
        

      </div>
    </div>
  );
}
