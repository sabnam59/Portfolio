import React, { useState } from "react";
import Card from "../components/Card";

const Project = () => {
  //first step : store array in an state container

  // const myProject = [

  //   {
  //     ProjectId:"2b",
  //     ProjectKoname: "food ordering system 2",
  //     ProjectImageKopath: "/images/blogImage.3.jpg",
  //     ProjectKodescription: "food project",
  //     Projectbutton: "see my project",
  //   },

  //   {
  //     ProjectId:"3c",
  //     ProjectKoname: "food ordering system 3",
  //     ProjectImageKopath: "/images/blogImage.4.jpg",
  //     ProjectKodescription: "food project",
  //     Projectbutton: "see my project",
  //   },

  //   {
  //     ProjectId:"4d",
  //     ProjectKoname: "food ordering system 4",
  //     ProjectImageKopath: "/images/blogImage.5.jpg",
  //     ProjectKodescription: "food project",
  //     Projectbutton: "see my project",
  //   },

  //   {
  //     ProjectId:"5e",
  //     ProjectKoname: "food ordering system 5",
  //     ProjectImageKopath: "/images/blogImage.5.jpg",
  //     ProjectKodescription: "food project",
  //     Projectbutton: "see my project",
  //   },
  // ];
  // okay continue good luck

  const [myProject, setmyProject] = useState([
    {
      ProjectId: "1a",
      ProjectKoname: "food ordering system 1",
      ProjectImageKopath: "/images/blogImage.2.jpg",
      ProjectKodescription: "food project",
      Projectbutton: "see my project",
    },
    {
      ProjectId: "2b",
      ProjectKoname: "food ordering system 2",
      ProjectImageKopath: "/images/blogImage.3.jpg",
      ProjectKodescription: "food project",
      Projectbutton: "see my project",
    },
    {
      ProjectId: "3c",
      ProjectKoname: "food ordering system 3",
      ProjectImageKopath: "/images/blogImage.4.jpg",
      ProjectKodescription: "food project",
      Projectbutton: "see my project",
    },
    {
      ProjectId: "4d",
      ProjectKoname: "food ordering system 4",
      ProjectImageKopath: "/images/blogImage.5.jpg",
      ProjectKodescription: "food project",
      Projectbutton: "see my project",
    },
    {
      ProjectId: "5e",
      ProjectKoname: "food ordering system 5",
      ProjectImageKopath: "/images/blogImage.5.jpg",
      ProjectKodescription: "food project",
      Projectbutton: "see my project",
    },
  ]);

  const [userTypedWords, setuserTypedWord] = useState("");

  const searchHandler= (e) => {
    setuserTypedWord(e.target.value);
  };

  const filteredProject = myProject.filter((project) =>
    project.ProjectKoname.toLowerCase().includes(userTypedWords.toLowerCase())
  );

  return (
    <>
      <input
        type="search"
        name="searchbar"
        placeholder="search my project"
        className="border-2 rounded-lg border-blue-700 m-5 p-2"
        value={userTypedWords}
        onChange={searchHandler}
      />

      <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-20 xl:px-52 py-20 px-8 xl:gap-40 lg:px-24 lg:gap-32">
        {filteredProject.map((projects) => (
          <Card
            title={projects.ProjectKoname}
            path={projects.ProjectImageKopath}
            description={projects.ProjectKodescription}
            button={projects.Projectbutton}
            id={projects.ProjectId}
            dpath="project"
          />
        ))}
      </div>
    </>
  );
};

export default Project;
