

function Parentdata() {
    return <Child name="Anwar"
                  role= "React Developer"
                  company= "khkr" />;
  }
  
 
  function Childdata({ name, role, company }) {
    return <p>Myself {name}, I am a {role} from {company}.</p>;
  }
  
  