import { Routes, Route, Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </>
  );
}

function Home() {
  const [sellerData, setSellerData] = useState({
    fname: "",
    email: ""
  })

  const [carData, setCarData] = useState({
    seller: "",
    carModel: "",
    year: null,
  })

  function onChangeHandler1(e) {
    setSellerData({ ...sellerData, [e.target.name]: e.target.value })
  }


  function onChangeHandler2(e) {
    setCarData({ ...carData, [e.target.name]: e.target.value })
  }

  async function onSubmitHandler1(e) {
    try {
      e.preventDefault()
      let res = await axios.post("api/seller/signup", sellerData)
      alert("Seller Successfully Added")
    } catch (error) {
      console.log(error)
      alert("an error occured")
    }
  }

  async function onSubmitHandler2(e) {
    try {
      e.preventDefault()
      let res = await axios.post("api/cars/add", carData)
      alert("Car details Successfully Added")
    } catch (error) {
      console.log(error)
      alert("an error occured")
    }
  }


  return (
    <>
      <center>
        <h2>Seller Signup</h2>
        <form onSubmit={onSubmitHandler1}>
          <label htmlFor="fname">First Name : </label>
          <input type="text" name="fname" value={sellerData.fname} onChange={onChangeHandler1} /> <br /> <br />
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" value={sellerData.email} onChange={onChangeHandler1} /> <br /> <br />
          <input type="submit" value="Add Seller" />
        </form>

        <br /><br /><br /><br />

        <h2>Car Sale</h2>
        <form onSubmit={onSubmitHandler2}>
          <label htmlFor="seller">Seller ID : </label>
          <input
            type="text"
            name="seller"
            value={carData.seller}
            onChange={onChangeHandler2}
          />
          <br />
          <br />
          <label htmlFor="model">Car model : </label>
          <input
            type="text"
            name="carModel"
            value={carData.carModel}
            onChange={onChangeHandler2}
          />{" "}
          <br /> <br />
          <label htmlFor="year">Year : </label>
          <input
            type="number"
            name="year"
            value={carData.year}
            onChange={onChangeHandler2}
          />{" "}
          <br /> <br />
          <input type="submit" value="Add Car" />
        </form>
        <Link to="/cars">Go to Cars</Link>
      </center>
    </>
  )
}

function Cars() {
  const [cars, setCars] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("api/cars")
        setCars(res.data.carData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <div>
        <h1>List of Cars</h1>
        <hr />
        {cars.map((car, i) => {
          return (
            <ul key={i}>
              <li>Car Model Name : {car.carModel}</li>
              <li>Year : {car.year}</li>
              <li>
                <h5>Seller Info</h5>
                <ul>
                  <li> Seller Name : {car.seller.fname}</li>
                  <li>Seller Email : {car.seller.email}</li>
                </ul>
              </li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default App;