const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mt-40 relative z-10">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Dev-OSAbhi" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/abhinav-kumar1407/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/linkedin.png" alt="linkedin" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/abhinavvkumar/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Adrian Hajdin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;