function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  };

  return (
    <button style={buttonStyle}>{props.text}</button>
  );
}

export default function Prop() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
}

// Prop destructuring

// function Button({ text, color, fontSize }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return <button style={buttonStyle}>{text}</button>;
// }

// export default function Prop() {
//   return (
//     <div>
//       <Button text="Click Me!" color="blue" fontSize={12} />
//       <Button text="Don't Click Me!" color="red" fontSize={12} />
//       <Button text="Click Me!" color="blue" fontSize={20} />
//     </div>
//   );
// }

// Default props

// function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return <button style={buttonStyle}>{text}</button>;
// }

// export default function Prop() {
//   return (
//     <div>
//       <Button />
//       <Button text="Don't Click Me!" color="red" />
//       <Button fontSize={20} />
//     </div>
//   );
// }
