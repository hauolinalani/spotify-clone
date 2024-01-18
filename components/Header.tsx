"use client";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = async () => {
    // Implement your logout logic here
  };

  return (
    <div
    className={twMerge(`
    h-fit
    bg-gradient-to-b
    from-emerald-800
    p-6
    `,
    className
    )}
    >
        <div className="
        w-full
        mb-4
        flex
        items-center
        justify-between
        ">
            <div className=" 
            hidden
            md:flexgap-x-2
            items-center">
                
            </div>

        </div>
     
    </div>
  );
};

export default Header;
