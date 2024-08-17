const Footer = () => {
  const YEAR = new Date().getFullYear();

  return (
    <footer className="grid place-content-center bg-[#1e1e1e] text-[#fafafa] p-4">
      <p>Copyrights &copy; {YEAR}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
