import React, { useState } from "react";

function WordField() {
  const [data, setData] = useState([]);
  const GetApi = () => {
    fetch("http://localhost:8000/wordPairList")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return (
    <div className="word">
      <button onClick={GetApi}>Submit</button>
      <h3 className="wordfield-text">Woord dat vertaald moet worden</h3>
      <div className="wordfield">
        {/* <h3>{JSON.stringify(data)}</h3> */}
        <div>
          {data.map((item) => (
            <h3>{item.question}</h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WordField;

// Orgineel
// function WordField() {
//   return (
//     <div className="word">
//       <h3 className="wordfield-text">Woord dat vertaald moet worden</h3>
//       <div className="wordfield">
//         <h3>Vuurtoren</h3>
//       </div>
//     </div>
//   );
// }

// export default WordField;
