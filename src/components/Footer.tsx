const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Spiderman Suits. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
