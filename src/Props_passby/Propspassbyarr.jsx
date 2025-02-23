

function Parent() {
        const items = ['Apple', 'Banana', 'Cherry'];
        return <Child fruits={items} />;
  }
  
 
  function Child({ fruits }) {
    return (
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    );
  }
  