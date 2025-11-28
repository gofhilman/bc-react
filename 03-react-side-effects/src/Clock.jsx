import { useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  setInterval(() => {
    setCounter(count => count + 1)
  }, 1000);

  return (
    <p>{counter} seconds have passed.</p>
  );
}

// // Menggunakan useEffect

// import { useEffect, useState } from "react";

// export default function Clock() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCounter(count => count + 1)
//     }, 1000);
//   })

//   return (
//     <p>{counter} seconds have passed.</p>
//   );
// }

// // Dependency array

// import { useEffect, useState } from "react";

// export default function Clock() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCounter(count => count + 1)
//     }, 1000);
//   }, [])

//   return (
//     <p>{counter} seconds have passed.</p>
//   );
// }

// // Clean-up function

// import { useEffect, useState } from "react";

// export default function Clock() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const key = setInterval(() => {
//       setCounter(count => count + 1)
//     }, 1000);

//     return () => {
//       clearInterval(key);
//     };
//   }, [])

//   return (
//     <p>{counter} seconds have passed.</p>
//   );
// }
