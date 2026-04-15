const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span>© {new Date().getFullYear()} ScreenBook. All rights reserved.</span>
      <span>Member of the Catalonia Health Innovation Ecosystem</span>
    </div>
  </footer>
);

export default Footer;
