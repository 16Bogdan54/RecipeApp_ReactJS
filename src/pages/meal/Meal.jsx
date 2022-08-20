import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Instruction } from "./Instruction";
import { Nutrition } from "./Nutrition";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import useFetch from "../../hooks/useFetch";

export const Meal = () => {
  const params = useParams();

  const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${params.id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_APP_API_KEY}`,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const { data: meal, isLoading, error } = useFetch(url, options);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) alert(error);

  if (meal !== null) {
    return (
      <motion.div
        className="meal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container className="py-4">
          <Card>
            <Card.Img
              variant="top"
              src={meal?.thumbnail_url}
              alt={meal?.name}
              style={{
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
            <Card.Body>
              <h2>{meal.name}</h2>
              <Card.Text className="w-100">
                {meal.description
                  ? meal.description.replace(/(<([^>]+)>)/gi, "")
                  : "Description wasn't provided"}
              </Card.Text>
              <Instruction instruction={meal.instructions} />
              <Nutrition nutrition={meal.nutrition} />
            </Card.Body>
          </Card>
        </Container>
      </motion.div>
    );
  }
};
