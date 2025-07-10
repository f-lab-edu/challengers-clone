import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";

import { GoHomeFill } from "react-icons/go";
import { MdAutoGraph } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
const DEFAULT_SIZE = 24;

export const GlobalMenus = {
  "/home": {
    title: "Challengers",
    firstIcon: <IoSearch size={DEFAULT_SIZE} />,
    secondIcon: <FiHeart size={DEFAULT_SIZE} />,
  },
  "/challenge": {
    title: "챌린지",
    firstIcon: <IoSearch size={DEFAULT_SIZE} />,
    secondIcon: <FiHeart size={DEFAULT_SIZE} />,
  },
  "/certification": {
    title: "챌린지 인증",
    firstIcon: "",
    secondIcon: "",
  },
  "/mypage": {
    title: "마이페이지",
    firstIcon: <FaRegBell size={DEFAULT_SIZE} />,
    secondIcon: <FiSettings size={DEFAULT_SIZE} />,
  },
};

export const BottomMenus = [
  {
    url: "/home",
    title: "홈",
    icon: <GoHomeFill size={DEFAULT_SIZE} />,
  },
  {
    url: "/challenge",
    title: "챌린지",
    icon: <MdAutoGraph size={DEFAULT_SIZE} />,
  },
  {
    url: "/certification",
    title: "인증",
    icon: <MdOutlineCameraAlt size={DEFAULT_SIZE} />,
  },
  {
    url: "/mypage",
    title: "마이페이지",
    icon: <FaRegUser size={DEFAULT_SIZE} />,
  },
];
