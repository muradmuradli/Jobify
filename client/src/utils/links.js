import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <AiOutlineBarChart />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "all-jobs",
    icon: <AiOutlineStock />,
  },
  {
    id: 3,
    text: "add job",
    path: "add-job",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
