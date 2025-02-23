
function Grandparent() {
    const data = "Data from Grandparent!";
    return <Parent data={data} />;
  }
  
  function Parent(props) {
    return <Child data={props.data} />;
  }
  
  function Child(props) {
    return <h1>{props.data}</h1>;
  }
  
  export default Grandparent;
  