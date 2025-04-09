import React from 'react'
import Gallerycard from '../../components/Gallerycard'

const Gallery = () => {

const myGallery = {

    Gallerytitle : "gallery title 1",
    Gallerypath : "/images/exploring.3.jpg",
    Gallerydescription : "this is my gallery",
    Gallerybutton : "explore more",

}

  return (
    <>
      
       <Gallerycard 
        title = {myGallery.Gallerytitle}
        path = {myGallery.Gallerypath}
        description = {myGallery.Gallerydescription} 
        button={myGallery.Gallerybutton}

        />
    </>
  )
}

export default Gallery
