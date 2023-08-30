import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Button,
  Container,

  HStack,

  RadioGroup,
  Radio,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      display={isVisible ? "block" : "none"}
      onClick={scrollToTop}
      cursor="pointer"
      zIndex="999"
    >
      <IconButton
        icon={<FaArrowUp />}
        aria-label="Scroll to top"
        size="lg"
        colorScheme="blue"
      />
    </Box>
  );
};

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error)
    return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"4"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}> ₹ INR</Radio>
              <Radio value={"eur"}> € EUR</Radio>
              <Radio value={"usd"}> $ USD</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                rank={i.trust_score_rank}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
          <ScrollToTop />
        </>
      )}
    </Container>
  );
};

export default Coins;
