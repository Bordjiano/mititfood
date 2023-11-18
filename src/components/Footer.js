const Footer = () => {
  return (
    <footer className="py-8 flex flex-col gap-3 items-center bg-green-200 opacity-75">
      <h2 className="logo text-2xl font-bold lowercase italic">
        MITIT<span className="text-green-500">food</span>
      </h2>
      <p>&copy; {new Date().getFullYear()} Bordjiano. Місюра Іван геній, мільярдер, плейбой, філантроп.</p>
    </footer>
  );
};

export default Footer;
