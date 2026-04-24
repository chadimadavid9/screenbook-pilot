import logo from "@/assets/screenbook-logo-full.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
    <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
      <img src={logo} alt="ScreenBook" className="h-8 w-auto" />
      <a
        href="#contact"
        className="text-sm font-medium text-navy hover:text-teal transition-colors"
      >
        Contact
      </a>
    </div>
  </nav>
);

export default Navbar;
