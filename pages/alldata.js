//
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function AllData() {
  //    const { email } = React.useContext(UserContext);
  const [data, setData] = useState({});
  let [headings, setHeadings] = useState([]);
  let [table, setTable] = useState([]);

  useEffect(() => {
    //fetch all accouts from api
    fetch("/api/alldata")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setHeadings(Object.keys(data[0]));

        console.log(` all data from db ${JSON.stringify(data)}`);
        console.log(`${Object.keys(data[0])} keys`);
      });
  }, []);

  // const getData = async (e) => {
  //   e.preventDefault()

  //   try {
  //     const res = await axios.get("/api/alldata", {
  //       setData(users)
  //     })
  //     return <DisplayTable/>
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  console.log(`${typeof data} outside`);

  function DisplayTable() {
    //get table to render users from data
    console.log(`data inside displayTable() ${data}`);
    if (typeof data == "object") {
      //map variable to get key:value pairs
      return (
        <>
          <tbody>
            {data.map((row, id) => {
              return (
                <tr key={id}>
                  {headings.map((key, id) => {
                    return <td key={row[key]}>{row[key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </>
      );
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log(headings);

  function Table() {
    return (
      <table>
        <thead>
          <tr>
            {headings.map((heading) => {
              return <th key={heading}>{capitalizeFirstLetter(heading)}</th>;
            })}
          </tr>
        </thead>
        {headings.length > 0 && <DisplayTable />}
      </table>
    );
  }

  return (
    <div
      className='table table-striped table-bordered table-hover table-dark'
      style={{ width: "fit-content" }}>
      <Table />
    </div>
  );
}
