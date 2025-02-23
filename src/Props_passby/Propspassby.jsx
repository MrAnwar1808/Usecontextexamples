
function Parent() {
    const message = "Hello from Parent!"
    return <Child greeting={message} />
  }
  
  function Child(props) {
    return(
        <h1>{props.greeting}</h1>
    ) 
  }
  
  export default Parent;
  