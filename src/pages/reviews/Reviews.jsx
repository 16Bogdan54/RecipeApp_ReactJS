import useFetch from "/src/hooks/useFetch.js";
import { ReviewCard } from "./ReviewCard";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import "/src/assets/Global.css";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Reviews = () => {
  const url = "https://tasty.p.rapidapi.com/tips/list?id=3562&from=0&size=12";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_APP_API_KEY}`,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const { data: reviews, isLoading, error } = useFetch(url, options);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) alert("Error", error);

  if (reviews !== null) {
    return (
      <motion.div
        className="reviews d-flex flex-column align-items-center justify-content-center "
        style={{ minHeight: "90vh" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container className="text-center">
          <h2 className="fs-2 mb-4">Our users say:</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopedSlides={6}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {Object.values(reviews.results).map((card, index) => {
              return (
                <SwiperSlide style={{ height: "30rem" }} key={index}>
                  <ReviewCard
                    avatarUrl={card.author_avatar_url}
                    username={card.author_username}
                    review={card.tip_body}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </motion.div>
    );
  }
};
