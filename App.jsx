import { useActionState, useId, useState } from 'react';

function App() {
  const [data, setdata] = useState(['Anil', 'Sam', 'Peter']);

  const [dataDetails, setdataDetails] = useState([
    { name: 'Anil', age: 29 },
    { name: 'Sam', age: 32 },
    { name: 'Peter', age: 42 },
  ]);
  const handleUser = (name) => {
    data[data.length - 1] = name;
    console.log(data);
    setdata([...data]);
  };

  const handleAge = (age) => {
    dataDetails[dataDetails.length - 1].age = age;
    setdataDetails([...dataDetails]);
  };

  const handleSubmit = async (prev, formdata) => {
    let name = formdata.get('name');
    let password = formdata.get('password');
    console.log('handleSubmit called', name, password);
    await new Promise((res) => setTimeout(res, 2000));

    if (name && password) {
      return { message: 'Form Submitted Successfully!', name, password };
    } else {
      return { Error: 'Error Occured, Try again!', name, password };
    }
  };

  const [info, action, pending] = useActionState(handleSubmit, undefined);

  return (
    <>
      <h1>Updating Array in state</h1>
      {data.map((name, indx) => (
        <p key={indx}>{name}</p>
      ))}
      <input
        type="text"
        placeholder="Enter last username"
        onChange={(e) => handleUser(e.target.value)}
      />
      <hr />
      <h2>Updating objects of Array in state</h2>
      <input
        type="text"
        placeholder="Enter user's updated age"
        onChange={(ev) => handleAge(ev.target.value)}
      />
      {dataDetails.map((det, idx) => (
        <p key={idx}>
          {det.name}:{det.age}
        </p>
      ))}
      <hr />
      <h2>useActionState Hook</h2>
      <form action={action}>
        <input
          defaultValue={info?.name}
          type="text"
          placeholder="Enter user name"
          name="name"
        />
        <br />
        <br />
        <input
          defaultValue={info?.password}
          type="password"
          placeholder="Enter password here"
          name="password"
        />
        <br />
        <br />
        <button disabled={pending}>Submit</button>
        <br />
        {info?.Error && <span style={{ color: 'red' }}>{info?.Error}</span>}
        {info?.message && (
          <span style={{ color: 'green' }}>{info?.message}</span>
        )}
      </form>
      <h4>Name:{info?.name}</h4>
      <h4>Password:{info?.password}</h4>
      <hr />
      <h2>UseId Hook</h2>
      <UserForm />
    </>
  );

  function UserForm() {
    const name = useId();
    const password = useId();
    const terms = useId();
    const user = useId();

    return (
      <>
        <form action="">
          <label htmlFor={name}>Enter user name</label>
          <input type="text" placeholder="Enter name" id={name} />
          <br /> <br />
          <label htmlFor={password}>Enter Password</label>
          <input
            type="password"
            placeholder="Enter password here.."
            id={password}
          />
          <br />
          <br />
          <label htmlFor={terms}>Terms and Conditions</label>
          <input type="checkbox" id={terms} />
        </form>
        <h3>Another way of using useID</h3>
        <form action="">
          <label htmlFor={user + 'name'}>Enter user name</label>
          <input type="text" placeholder="Enter name" id={user + 'name'} />
          <br /> <br />
          <label htmlFor={user + 'password'}>Enter Password</label>
          <input
            type="password"
            placeholder="Enter password here.."
            id={user + 'password'}
          />
          <br />
          <br />
          <label htmlFor={user + 'terms'}>Terms and Conditions</label>
          <input type="checkbox" id={user + 'terms'} />
        </form>
      </>
    );
  }
}
export default App;
