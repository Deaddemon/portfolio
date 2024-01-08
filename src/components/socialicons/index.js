import React from "react";
import "./style.css";
import {
  FaGithub,
  FaMedium,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
      {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.medium && (
          <li>
            <a href={socialprofils.medium}>
              <FaMedium />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
          
        
      </ul>
      <p>Follow Me</p>
    </div>
  );
};