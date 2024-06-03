import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import "../../modules/home/team/team.css";

const StaffCard = ({ name, position, imageUrl, facebookLink, instagramLink, linkedinLink }) => {
  return (
    <div className="our-team mb-3">
      <div className="pic">
        <Image
          src={imageUrl}
          alt={`Team Member - ${name}`}
          height={250}
          width={300}
          className="img-fluid"
        />
        <ul className="social">
          <li>
            <Link href={facebookLink}>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href={instagramLink}>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href={linkedinLink}>
              <CiLinkedin />
            </Link>
          </li>
        </ul>
      </div>
      <div className="team-content">
        <h3 className="title mb-0">{name}</h3>
        <span className="post">{position}</span>
      </div>
    </div>
  );
};

export default StaffCard;
