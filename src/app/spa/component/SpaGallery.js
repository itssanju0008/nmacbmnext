"use client";
import React, { useState } from "react";
import GalleryLightbox from "../../shared/GalleryLightbox;";

const SpaGallery = () => {

  const contentData = [
    { type: 'image', thumbnailUrl: '/all/event.jpg', },
    { type: 'image', thumbnailUrl: '/all/event.jpg', },
    { type: 'image', thumbnailUrl: '/all/event.jpg', },
    { type: 'image', thumbnailUrl: '/all/event.jpg', },
    { type: 'image', thumbnailUrl: '/all/event.jpg', },
    { type: 'image', thumbnailUrl: '/all/event.jpg', },

    // Add more content objects as needed
  ];


  return (
    <>
      <div className="spa-gallery">
        <GalleryLightbox contents={contentData} />
      </div>
    </>
  );
};

export default SpaGallery;
