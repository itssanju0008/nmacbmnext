import React from "react";
import Image from "next/image";
import "../doctor/doctor.css";
import StaffCard from "./components/StaffCard";
import BannerSection from "../shared/BreadCrum";

const Staff = () => {
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "STAFF",
  };

  // staff member

  const staffMembers = [
    {
      id:'1',
      name: "Susete Roland",
      position: "Front Desk Supervisor",
      imageUrl: "/all/susete.jpg",
      facebookLink: "https://www.facebook.com/",
      instagramLink: "https://www.instagram.com/",
      linkedinLink: "https://www.linkedin.com/",
    },
    {
      id:'2',
      name: "Susete Roland",
      position: "Front Desk Supervisor",
      imageUrl: "/all/susete.jpg",
      facebookLink: "https://www.facebook.com/",
      instagramLink: "https://www.instagram.com/",
      linkedinLink: "https://www.linkedin.com/",
    },
    {
      id:'3',
      name: "Susete Roland",
      position: "Front Desk Supervisor",
      imageUrl: "/all/susete.jpg",
      facebookLink: "https://www.facebook.com/",
      instagramLink: "https://www.instagram.com/",
      linkedinLink: "https://www.linkedin.com/",
    },
    {
      id:'4',
      name: "Susete Roland",
      position: "Front Desk Supervisor",
      imageUrl: "/all/susete.jpg",
      facebookLink: "https://www.facebook.com/",
      instagramLink: "https://www.instagram.com/",
      linkedinLink: "https://www.linkedin.com/",
    },
    {
      id:'5',
      name: "Susete Roland",
      position: "Front Desk Supervisor",
      imageUrl: "/all/susete.jpg",
      facebookLink: "https://www.facebook.com/",
      instagramLink: "https://www.instagram.com/",
      linkedinLink: "https://www.linkedin.com/",
    },
    {
      id:'6',
      name: "Susete Roland",
      position: "Front Desk Supervisor",
      imageUrl: "/all/susete.jpg",
      facebookLink: "https://www.facebook.com/",
      instagramLink: "https://www.instagram.com/",
      linkedinLink: "https://www.linkedin.com/",
    },
  ];
  return (
    <>
      {/* banner */}

      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />

      {/* banner */}

      <section className="side-space py-6">
        <div className="doctor-list">
          {staffMembers.map((staffMember, index) => (
            <div key={index} className="">
              <StaffCard key={index} {...staffMember} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Staff;
