import React, { useState, useEffect } from "react";

  
      function WordField() {
        // const [data, setData] = useState( {wordPairList: []});
        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);

        // const GetApi = null;
        // const randomWordPair = {};
        // const GetApi = null;

        useEffect(() => {
          setTimeout(() =>{
            // GetApi = () => {
              fetch("http://localhost:9080/api/EN/list")
                .then((res) => res.json())
                .then((json) => {
                  console.log(json);
                  setData(json);
                  setIsPending(false);
                });
                console.log("data: " + data);
                console.log("setData: " + setData);

                // const array = data.wordPairList;
                // const randomNumber = Math.floor(Math.random() * array.length);
                // randomWordPair = array[randomNumber];
                // console.log(array)
                // console.log(randomWordPair);
            // };
          }, 5000);
        },[]);


       

// const array = data.wordPairList;
// const randomNumber = Math.floor(Math.random() * array.length);
// const randomWordPair = array[randomNumber];
// console.log(array)
// console.log(randomWordPair);

  return (
    
    <div className="word">
      {/* {isPending && <button onClick={GetApi}>Submit</button>} */}
      
      <h3 className="wordfield-text">Woord dat vertaald moet worden</h3>
      <div className="wordfield">
        <div>
        {isPending && <div>Loading...</div>}
          {data &&<h3>{data.wordPairList.question}</h3>}
          {/* {randomWordPair &&<h3>{randomWordPair.question}</h3>} */}
          {/* <h3>{data.wordPairList[0].question}</h3> */}
          {/* <h3>{data.wordPairList[0].question}</h3> */}

          {/* {data.wordPairList.map((item) => (
            <h3>{item.question}</h3>
            
          ))} */}
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
