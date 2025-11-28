// Menggunakan conditional statements

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

// Menggunakan operator ternary

// function List(props) {
//   return (
//     <>
//       {!props.animals ? (
//         <div>Loading...</div>
//       ) : props.animals.length > 0 ? (
//         <ul>
//           {props.animals.map((animal) => {
//             return <li key={animal}>{animal}</li>;
//           })}
//         </ul>
//       ) : (
//         <div>There are no animals in the list!</div>
//       )}
//     </>
//   );
// }

// Menggunakan operator &&

// function List(props) {
//   return (
//     <>
//       {!props.animals && <div>Loading...</div>}
//       {props.animals && props.animals.length > 0 && (
//         <ul>
//           {props.animals.map((animal) => {
//             return <li key={animal}>{animal}</li>;
//           })}
//         </ul>
//       )}
//       {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
//     </>
//   );
// }

function RenderConditionals() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default RenderConditionals;
