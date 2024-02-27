import { useEffect, useState } from "react";
import { getDataFromServer } from '../services/menu'
import ExpenseTracker from "./ExpenseTracker";
function ShowData() {
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState();
  const [rahulspent, setRahulspent] = useState();
  const [rameshspent, setRameshspent] = useState();
  const [showform, setShowForm] = useState();

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getDataFromServer();
      setItems(data);
      const reduceFunc = (result, v) => {
        return result = result + v.price
      }

      setSum(data.reduce(reduceFunc, 0));
      fetchShares(data);
    }
    fetchMenu();

  });

  const fetchShares = (data) => {

    let a = 0, b = 0;
    console.log(data);
    for (let eachObj of data) {

      if (eachObj.payeeName === 'Rahul') {
        a += eachObj.price;
      } else {
        b += eachObj.price;
      }
    }
    setRahulspent(a);
    setRameshspent(b);
  }

  const success = () => {
    setShowForm(true);
  }

  const cancel = () => {
    setShowForm(false);
  }

  return (
    // <div className="">
    //   <h1>Show Data Page</h1>
    //   {items.map((each) => (
    //     <li>{each.payeeName}</li>
    //   ))}
    //   <h1>Rahul :- {rahul}</h1>
    //   <h1>Ramesh :- {ramesh}</h1>
    //   <h1>Sum :- {sum}</h1>

    // </div>

    <>
      <header id="page-Header">Expense Tracker</header>
      <button id="Add-Button" onClick={() => setShowForm(true)}>Add</button>
      {showform && (
        <div className="form">
          <ExpenseTracker onTrue={success} onClose={cancel} />
        </div>
      )}

      <>
        <div className="use-inline date header-color">Date</div>
        <div className="use-inline header-color">Product Purchased</div>
        <div className="use-inline price header-color">Price</div>
        <div className="use-inline header-color" style={{ width: 112 }}>
          Payee
        </div>
      </>
      {items &&
        items.map((user, idx) => (
          <div key={idx}>
            <div className="use-inline date">{user.setDate}</div>
            <div className="use-inline">{user.product}</div>
            <div className="use-inline price">{user.price}</div>
            <div className={`use-inline ${user.payeeName}`}>
              {user.payeeName}
            </div>
          </div>
        ))}``
      <hr />
      <div className="use-inline ">Total: </div>
      <span className="use-inline total">{sum}</span> <br />
      <div className="use-inline ">Rahul paid: </div>
      <span className="use-inline total Rahul">{rahulspent}</span> <br />
      <div className="use-inline ">Ramesh paid: </div>
      <span className="use-inline total Ramesh">{rameshspent}</span> <br />
      <span className="use-inline payable">
        {rahulspent > rameshspent ? "Pay Rahul " : "Pay Ramesh"}
      </span>
      <span className="use-inline payable price">
        {" "}
        {Math.abs((rahulspent - rameshspent) / 2)}
      </span>``
    </>



  );
}

export default ShowData;
