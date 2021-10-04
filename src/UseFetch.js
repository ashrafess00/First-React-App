// import React, { useEffect, useState, useCallback } from "react";

// export const useFetch = (url) => {
//   const [shorlink, setshorlink] = useState("");
//   const link = "https://api.shrtco.de/v2/shorten?url=" + url;
//   console.log(link);

//   const useme = useCallback(async () => {
//     const response = await fetch(link);
//     const products = await response.json();
//     setshorlink(products);
//   }, [url]);

//   useEffect(() => {
//     useme();
//   }, [url]);
//   console.log(shorlink);

//   return shorlink;
// };
