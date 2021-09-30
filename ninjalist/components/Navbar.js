import Link from "next/Link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja list</a>
      </Link>
    </nav>
  );
};

export default Navbar;
