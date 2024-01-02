import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getAllCars } from "../redux/actions/carsActions";
// Create the Home component
function Home() {
  // Access the cars array from the Redux store
  const { cars } = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars()); ///get all cars from api
    // console.log(cars);
  }, [dispatch]);
  // Render the component with the data
  return (
    <DefaultLayout>
      <h1>Hello from HomePage</h1>
      <h1>The length of cars is {cars.length}</h1>
    </DefaultLayout>
  );
}

// Export the Home component
export default Home;
