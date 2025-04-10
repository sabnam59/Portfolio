import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../../data/ProjectData";

const Projectdetails = () => {
  const { id } = useParams();

  const [projectData, setprojectData] = useState({});

  useEffect(() => {
    const userClickedProject = ProjectData.filter(
      (project) => project.ProjectId == id
    );

    const project = userClickedProject[0];

    setprojectData(project);
  }, [id]);

  return (
    <div className="flex flex-col items-start bg-black text-white
    px-5 py-10 md:px-20 lg:py-38 xl:pl-40 xl:pr-32">
      <h1 className="font-bold pb-12 lg:pb-20 uppercase text-3xl lg:text-5xl">{projectData.Projectname}</h1>
      
      <h2 className="capitalize font-semibold md:text-4xl underline underline-offset-4 text-2xl lg:text-3xl xl:text-4xl ">food ordering system</h2>

      <p className="text-md mt-9 mb-16 md:text-l lg:text-xl xl:text-2xl">
        {projectData.Projectdescription}
      </p>
      <img src={projectData.ProjectImagepath} className="h-[500px]" />
    </div>
  );
};

export default Projectdetails;
