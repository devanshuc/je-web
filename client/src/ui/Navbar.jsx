import { Typography } from "@mui/material";
import Logo from "../assets/c_logo.jpeg";

const pages = ["Products", "Pricing", "Blog", "Contact Us"];

export default function Navbar() {
  return (
    <div className="font-sans ml-10 grid grid-cols-4 m-3">
      <div className="w-[80px] h-[80px] col-span-1">
        <img src={Logo} alt="company_logo" />
      </div>
      <div className=" flex col-span-2 justify-around">
        {pages.map((page) => (
          <button key={page}>
            <Typography className="" textAlign="center">
              {page}
            </Typography>
          </button>
        ))}
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}
