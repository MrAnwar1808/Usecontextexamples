

function Parentbtn() {
    const handleClick = () => {
        console.log("Button clicked")
      alert("Button clicked!");
    };
    
    return <Child onButtonClick={handleClick} />;
  }
  
 
  function Child({ onButtonClick }) {
    return <button onClick={onButtonClick}>Click Me</button>;
  }

  export default Parentbtn
  