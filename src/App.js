import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [Data, setData] = useState();
  const [isError, setisError] = useState("");
  const [Load, setLoad] = useState();

  const getapidata = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(`your data is not get ${error}`);
      setisError(error.message);

      // if (error) {
      //   console.log(`your data is not get ${error}`);
      //   setisError(error.message);
      // } else {
      //   console.log("loading your data");
      //   setLoad(Load);
      // }
    } finally {
      console.log("loading your data");
      <div className="load">Loading....</div>;
      setLoad(Load);
    }
  };

  useEffect(() => {
    // axios
    //   .get("https://dummyjson.com/users")
    //   .then((res) => setData(res.data))
    //   .then((res) => console.log(res.data))
    //   .catch((error) => setisError(error.message));
    getapidata();
  }, []);

  return (
    <>
      <h1 className="head">Dummy Data Getting Using The Axios Api</h1>

      <div className="details">
        {Data ? (
          Data.users &&
          Data.users.map((post) => {
            const { id, firstName, lastName, maidenName, age } = post;
            return (
              <>
                <div className="card">
                  <p>Id: {id}</p>
                  <p>FirstName: {firstName}</p>
                  <p>LastName: {lastName}</p>
                  <p>MaidenName: {maidenName}</p>
                  <p>Age: {age}</p>
                </div>
                {/* <div className="load">Loading....</div> */}
              </>
            );
          })
        ) : (
          <>
            {isError !== "" && (
              <h2 className="err">{`User data is not get ${isError}`}</h2>
            )}
          </>
        )}
        {Load ? <div className="load">Loading....</div> : null}
      </div>
    </>
  );
}

export default App;
