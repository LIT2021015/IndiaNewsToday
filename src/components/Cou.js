import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";

const useStyles = makeStyles((theme) => ({
  carosel: {
   
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
  },
  carosel1: {
   width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
  },
  sliderimg: {
    // width: "100%",
    // height: "50%",
    objectFit: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Cou = (props) => {
  const [trending, setTer] = useState([]);
  const classes = useStyles();
 

  console.log(props.page);
  useEffect(() => {
    // fet();
    const fet = async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=cf3406f893f04512b1cfcdc04452f56c&page=${props.page}&pagesize=6`
      );
      setTer(data.articles);
      
    };
    fet();
  }, [props]);

  const items = trending.map((coin) => {
    return (
      <>
        <img
          src={coin.urlToImage}
          alt={coin.title}
          className={classes.carosel1}
        ></img>
        <h5 className={classes.carosel}>{coin.title}</h5>
      </>
    );
  });

  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      autoPlay
      responsive
      items={items}
    />
  );
};

export default Cou;
