function Button() {
  return (
    <button>Click Me!</button>
  );
}

export default function NoProp() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  );
}

// function Button() {
//   return (
//     <button>Click Me!</button>
//   );
// }

// function Button2() {
//   return (
//     <button>Don't Click Me!</button>
//   );
// }

// export default function NoProp() {
//   return (
//     <div>
//       <Button />
//       <Button2 />
//       <Button />
//     </div>
//   );
// }
