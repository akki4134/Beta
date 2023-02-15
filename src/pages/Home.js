import React, { useState } from "react";
import "./Styles.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Items } from "./data";

const card = {
  hidden: {
    y: "200vw",
    opacity: 0,
    scale: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
  hover: {
    scale: 1.2,
    originX: 1,
    transition: {
      type: "spring",
      stiffness: 200,
    },
    boxShadow: "0px 0px 20px rgb(255,255,255)",
  },
};

export default function Home() {
  const [isselectedId, setisselectedId] = useState(
    "https://www.nbc.ca/content/dam/fragment/images/img-woman-holding-canadian-flag-1020x680.jpg"
  );
  const navigate = useNavigate();

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${isselectedId})`,
      }}
    >
      <div className="head">
        <div className="headcenter">
          <motion.div
            className="logo"
            initial={{
              x: "200vw",
            }}
            animate={{
              x: "0",
            }}
            transition={{
              type: "spring",
              delay: "0.5",
            }}
          >
            Free Aider
          </motion.div>
        </div>
        <div className="headend">
          <motion.button
          whileHover={{
            scale: 1.2,
            originX: 0,
          }}
          
          className="loginbutton">Login</motion.button>
        </div>
      </div>

      <div className="body">
        <motion.div className="card-list">
          {Items.map((item) => (
            <motion.div
              variants={card}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="card"
              key={item.id}
              onMouseEnter={() => {
                setisselectedId(item.image);
              }}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={() => navigate("/" + item.name)}
            >
              <motion.div className="h2" key={item.id}>
                {item.name}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
