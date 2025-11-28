function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function PropFunction() {
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}

// Customizable URL

// function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return (
//     <button onClick={handleClick} style={buttonStyle}>
//       {text}
//     </button>
//   );
// }

// export default function PropFunction() {
//   const handleButtonClick = (url) => {
//     window.location.href = url;
//   };

//   return (
//     <div>
//       <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} />
//     </div>
//   );
// }
