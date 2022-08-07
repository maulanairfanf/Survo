import React, { useEffect, useState } from "react";

export default function History() {
  const [data, setData] = useState();
  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://survo-app.herokuapp.com/api/v1/transaction/1",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNjU5ODQzOTEwLCJpc3MiOiJBdXRoU2VydmljZSJ9.W4Gf-tQUQc-noM8pM272DMt1muSwf1UgBoj0O1dnrA4",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1 className="font-bold text-red-75 text-2xl">History Transaksi</h1>
      {data ? (
        <div>
          <h1>Status : {data.Status ? data.status : "Null"}</h1>
          <h1>Amount : {data.Amount ? data.Amount : "Null"}</h1>
          <h1>Created At : {data.User ? data.User.CreatedAt : "Null"}</h1>
        </div>
      ) : (
        <h1>Memuat Data...</h1>
      )}
    </div>
  );
}
