import React from 'react'
import Gallerycard from '../../components/Gallerycard'

const Gallery = () => {

const myGallery = {

    Gallerytitle : "project gallery",
    Gallerypath : "/images/exploring.3.jpg",
    Gallerydescription : "Welcome to my project gallery, a curated collection of work that reflects my journey as a developer. Each project showcases not only the technical skills I've honed over time, but also my approach to problem-solving, creativity, and passion for building useful, intuitive digital experiences. From responsive web applications and mobile-first designs to full-stack solutions, this gallery highlights a range of technologies and challenges I've tackled. Click on any project to learn more about the tools used, features built, and the story behind each creation.",
    Gallerybutton : "explore more",

}

  return (
    <>
      <div className="py-10 md:16 bg-black text-white"> 
       <Gallerycard 
        title = {myGallery.Gallerytitle}
        path = {myGallery.Gallerypath}
        description = {myGallery.Gallerydescription} 
        button={myGallery.Gallerybutton}

        />
    </div>    
    </>
  )
}

export default Gallery
