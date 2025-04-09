import React, { useState } from "react";
import Card from "../../components/Card";
import NotFound from "../../components/NotFound";
import ProjectData from "../../data/ProjectData";

const Project = () => {

  const [myProject, setmyProject] = useState(ProjectData);

  const [userTypedWords, setuserTypedWord] = useState("");

  const searchHandler = (e) => {
    setuserTypedWord(e.target.value);
  };

  const filteredProject = myProject.filter((project) =>
    project.Projectname.toLowerCase().includes(userTypedWords.toLowerCase())
  );

  const NOF = "Project not found";
  return (
    <>
      <div className="bg-black pr-16 flex justify-end pt-10 md:pt-0 ">
        <input
          type="search"
          name="searchbar"
          placeholder="search my project"
          className="border-4 border-gray-700 rounded-lg lg:py-3 lg:px-5 py-3 px-4"
          value={userTypedWords}
          onChange={searchHandler}
        />
      </div>

      {filteredProject.length > 0 ? (
        <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-20 xl:px-52 py-20 px-8 xl:gap-40 lg:px-24 lg:gap-32">
          {filteredProject.map((projects) => (
            <Card 
            key={projects.ProjectId}
              title={projects.Projectname}
              path={projects.ProjectImagepath}
              description={projects.Projectdescription}
              button={projects.Projectbutton}
              id={projects.ProjectId}
              t
              dpath="project"
            />
          ))}
        </div>
      ) : (
        <NotFound text={NOF} />
      )}
    </>
  );
};

export default Project;
