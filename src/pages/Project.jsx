import React from 'react'
import Card from '../components/Card'

const Project = () => {
  // okay so confilcit ayo haina tw same id vayera id should be unique thats why?
  // other than that?

  // euta person object banau ane tesko name ra id property rakha tw ka banaun yeu
  // eror kina ayo? khai object banauna audaina vanesi? dhyan kidar hai ? 
  // tmro myprojct array vitra ko object ko strucutre thik xa?

  // so id  unqie navayera euta problem vaneu id unique banau lu

 
    const myProject = [
      {
        ProjectId:"1a",
        ProjectKoname: "food ordering system 1",
        ProjectImageKopath: "/images/blogImage.2.jpg",
        ProjectKodescription: "food project",
        Projectbutton: "see my project",
      },

      {
        ProjectId:"2b",
        ProjectKoname: "food ordering system 2",
        ProjectImageKopath: "/images/blogImage.3.jpg",
        ProjectKodescription: "food project",
        Projectbutton: "see my project",
      },

      {
        ProjectId:"3c",
        ProjectKoname: "food ordering system 3",
        ProjectImageKopath: "/images/blogImage.4.jpg",
        ProjectKodescription: "food project",
        Projectbutton: "see my project",
      },

      {
        ProjectId:"4d",
        ProjectKoname: "food ordering system 4",
        ProjectImageKopath: "/images/blogImage.5.jpg",
        ProjectKodescription: "food project",
        Projectbutton: "see my project",
      },

      {
        ProjectId:"5e",
        ProjectKoname: "food ordering system 5",
        ProjectImageKopath: "/images/blogImage.5.jpg",
        ProjectKodescription: "food project",
        Projectbutton: "see my project",
      },
    ];
  return (
    <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-20 xl:px-52 py-20 px-8 xl:gap-40 lg:px-24 lg:gap-32">
      {
      myProject.map((projects) => (
        <Card
          title={projects.ProjectKoname}
          path={projects.ProjectImageKopath}
          description={projects.ProjectKodescription}
          button={projects.Projectbutton}
          id={projects.ProjectId}
          dpath="project"
        />
      ))
      }
    </div>
  );
}

export default Project