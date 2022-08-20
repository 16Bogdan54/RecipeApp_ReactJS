import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "/src/components/Button";
import { ButtonGroup } from "/src/components/ButtonGroup";
import { SocialMediaLink } from "/src/components/SocialMediaLink";
import { SocialMediaLinks } from "/src/components/SocialMediaLinks";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import "/src/assets/Global.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  console.log(import.meta.env.VITE_APP_API_KEY);
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className=" h-100 d-flex flex-column align-items-center justify-content-center text-center">
        <h2 className="fs-1 fw-bold">
          Wanna prepare delicious meal? Check our recipes!
        </h2>
        <p className="lead">
          We collected different recipes from more than 100 cuisines, don't lose
          an opportunity to surprise your family with a tasty masterpiece!
        </p>
        <ButtonGroup>
          <Button buttonTypeClass="primary" to="pages/recipes/Recipes.jsx">
            Recipes
          </Button>
          <Button to="pages/reviews/Reviews.jsx">Reviews</Button>
        </ButtonGroup>
        <SocialMediaLinks>
          <SocialMediaLink link="#" icon={<BsTwitter />} />
          <SocialMediaLink link="#" icon={<BsGithub />} />
        </SocialMediaLinks>
      </Container>
    </motion.div>
  );
};
