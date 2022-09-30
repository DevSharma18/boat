import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SingleProductBox } from "../SingleProductBox";
import { SailWithBoat } from "./data";

export function SailWthBoat() {
  return (
    <>
      <Box color="white" h={"auto"} bg="black" pb={"30px"}>
        <Flex>
          <Text
            width={"21.5%"}
            p="2.5rem"
            fontSize="2rem"
            textAlign={"center"}
            cursor={"pointer"}
            _hover={{ textDecoration: "underline" }}
          >
            SAIL WITH boAt
          </Text>
          <Spacer />
          <Text
            width={"9%"}
            fontSize="1rem"
            textAlign={"center"}
            cursor={"pointer"}
            margin={"auto"}
            mt={"4rem"}
            mr={"4rem"}
            p={"2px"}
            textDecoration="underline"
            _hover={{ color: "red" }}
          >
            View All
          </Text>
        </Flex>

        <Box>
          <Slider
            style={{
              width: "95%",
              marginLeft: "35px",
              height: "470px",
              margin: "auto",
              marginTop: "-20px",
            }}
            infinite={true}
            speed={200}
            slidesToShow={4}
            slidesToScroll={4}
            centerMode={true}
            swipeToSlide={true}
            autoplay={true}
            autoplaySpeed={2000}
            centerPadding={"10px"}
          >
            {SailWithBoat.map((item) => {
              return (
                <SingleProductBox
                  key={item.id}
                  name={item.pname}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  id={item.id}
                  strp={item.strprice}
                  dec={item.dec}
                  item={item}
                />
              );
            })}
          </Slider>
        </Box>
      </Box>
    </>
  );
}
