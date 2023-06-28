import tour1 from '../assets/images/tour-1.jpeg';
import tour2 from '../assets/images/tour-2.jpeg';
import tour3 from '../assets/images/tour-3.jpeg';
import tour4 from '../assets/images/tour-4.jpeg';


export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
  { id: 5, href: "#gallery", text: "gallery" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    location: "China",
    duration: "6 Days",
    cost: "$2,100",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th, 2020",
    location: "indonesia",
    duration: "11 days",
    cost: "from $1400",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th, 2020",
    location: "Hong Kong",
    duration: "8 Days",
    cost: "$5,000",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2019",
    location: "Kenya",
    duration: "20 Days",
    cost: "$3,300",
    title: "Kenya Highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
];
