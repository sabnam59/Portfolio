import React from 'react'
import Card from '../components/Card'

const Project = () => {
    const myProject = [
      {
        ProjectKoname: "food ordering system 1",
        ProjectImageKopath: "/images/blogImage.2.jpg",
        ProjectKodescription: "food project",
        Projectbutton: "see my project",
      },

      {
        ProjectKoname: "food ordering system 2",
        ProjectImageKopath: "/images/blogImage.3.jpg",
        ProjectKodescription: "food project",
        Projectbutton: "see my project",
      },

      {
        ProjectKoname: "food ordering system 3",
        ProjectImageKopath: "/images/blogImage.4.jpg",
        ProjectKodescription: "food project",
        Projectbutton: "see my project",
      },

      {
        ProjectKoname: "food ordering system 4",
        ProjectImageKopath: "/images/blogImage.5.jpg",
        ProjectKodescription: "food project",
        Projectbutton: "see my project",
      },

      {
        ProjectKoname: "food ordering system 5",
        ProjectImageKopath: "/images/blogImage.5.jpg",
        ProjectKodescription: "food project",
        Projectbutton: "see my project",
      },
    ];
  return (
    <div className="bg-black text-white grid grid-cols-2 gap-20 px-36 py-20">
      {
      myProject.map((projects) => (
        <Card
          title={projects.ProjectKoname}
          path={projects.ProjectImageKopath}
          description={projects.ProjectKodescription}
          button={projects.Projectbutton}
        />
      ))
      }
    </div>
  );
}

export default Project