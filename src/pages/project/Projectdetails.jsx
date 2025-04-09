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
    <div className="flex flex-col items-center py-28 bg-black text-white">
      <h1 className="text-5xl font-bold pb-16">{projectData.Projectname}</h1>
      <img src={projectData.ProjectImagepath} className="h-screen" />
      <p className="text-2xl font-bold mt-14">
        {projectData.Projectdescription}
      </p>
    </div>
  );
};

export default Projectdetails;
