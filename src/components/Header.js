import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <>
      <header className="bg-black text-white flex px-16 py-2 items-center gap-14 justify-between">
        <div className="w-24">
          <img src={Logo} className="w-fit " />
        </div>
        <nav>
          <ul className="flex items-center justify-between gap-8">
            <li>Home</li>
            <li>About</li>
            <li>Recommended</li>
          </ul>
        </nav>
        <div className="flex gap-6">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </header>
    </>
  );
};
export default Header;
