/* Global imports */
import React from "react";
/* Scoped imports */
/* Local imports */

interface HeaderProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({
  imageUrl,
  title,
  subtitle,
}) => {
  return (
    <header
      className="relative bg-cover bg-center parallax"
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: "75vh",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <div className="container">
          <h1 className="text-4xl font-bold my-5 animate-fadeInUp">{title}</h1>
          <p className="text-xl">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;