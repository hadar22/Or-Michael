"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/nav.png";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Pages = () => {
  return (
    <>
      <li>
        <a href="#">בית</a>
      </li>
      <li>
        <a href="#">מי אנחנו</a>
      </li>
      <li>
        <a href="#">הרב מיכאל מרק</a>
      </li>
      <li>
        <a href="#">תמונות</a>
      </li>
      <li>
        <a href="#">צור קשר</a>
      </li>
    </>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between place-items-center flex-row-reverse px-5 py-2 sticky top-0 left-0 bg-white/50 backdrop-blur-xl z-10 shadow-sm">
        <Link href="/">
          <Image src={logo} width="150" height="60" alt="Logo" />
        </Link>
        <FiMenu
          className="md:hidden h-8 w-8 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            <Pages />
          </ul>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={
          "md:hidden w-[300px] max-w-[50%] h-[100vh] shadow-lg fixed top-0 right-0 z-20 p-4 transition-all bg-white"
        }
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <nav className="">
          <FiX
            className="md:hidden h-8 w-8 cursor-pointer mr-auto"
            onClick={() => setOpen((prev) => !prev)}
          />
          <ul className="flex flex-col gap-10">
            <Pages />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
