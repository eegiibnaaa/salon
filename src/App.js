import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/Footer";
import Sormuus from "./Screens/Sormuus";
import Manicure from "./Screens/Manicure";
import Vaks from "./Screens/Vaks";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Zahialga from "./Screens/Zahialga";
import Home from "./Screens/HomeScreen";
import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { ProviderContext } from "./provider";
import { Button, Input, Modal, ModalBody } from "reactstrap";
import firestore from "./firebase";
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import SalonHome from "./Screens/SalonHome";
import moment from "moment";
import toast from "react-hot-toast";

const user = localStorage.getItem("currentUser");

const router = createBrowserRouter(
  user === "salon@dagina.mn"
    ? [
        {
          path: "/sormuus",
          element: <Sormuus />,
        },
        {
          path: "/manicure",
          element: <Manicure />,
        },
        {
          path: "/vaks",
          element: <Vaks />,
        },
        {
          path: "/zahialga",
          element: user && <Zahialga />,
        },
        {
          path: "/",
          element: <SalonHome />,
        },
      ]
    : user
    ? [
        {
          path: "/sormuus",
          element: <Sormuus />,
        },
        {
          path: "/manicure",
          element: <Manicure />,
        },
        {
          path: "/vaks",
          element: <Vaks />,
        },
        {
          path: "/zahialga",
          element: user && <Zahialga />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ]
    : [
        {
          path: "/sormuus",
          element: <Sormuus />,
        },
        {
          path: "/manicure",
          element: <Manicure />,
        },
        {
          path: "/vaks",
          element: <Vaks />,
        },
        {
          path: "/login",
          element: !user && <Login />,
        },
        {
          path: "/sign-up",
          element: !user && <SignUp />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ]
);
const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

function App() {
  const provider = useContext(ProviderContext);
  const toggle = () => provider.setCal(!provider.cal);
  const user = localStorage.getItem("currentUser");
  const [availableTimes, setAvailableTimes] = useState([]);
  // const []

  const submit = async () => {
    await addDoc(collection(firestore, "zahialga"), {
      name: provider.product.name,
      desciption: provider.product.description,
      price: provider.product.price,
      image: provider.product.image,
      tsag: provider.tsag,
      udur: moment().format("YYYY-MM-DD"),
      user: user,
    });
    toast("Та амжилттай Захиаллаа.");
    provider.clear();
  };

  useEffect(() => {
    console.log(provider.product);
    (async () => {
      const sth = await getDocs(
        query(
          collection(firestore, "zahialga"),
          where("udur", "==", moment().format("YYYY-MM-DD"))
        )
      );

      const occupiedTimes = [];
      sth.forEach((result) => {
        occupiedTimes.push(result.data().tsag);
      });

      const time = times
        .map((time) => {
          return parseInt(provider.product.startTime) <=
            parseInt(time.slice(0, 2)) &&
            parseInt(time.slice(0, 2)) <= parseInt(provider.product.endTime)
            ? time
            : null;
        })
        .filter((time) => time !== null)
        .filter((time) => !occupiedTimes.includes(time));

      setAvailableTimes(time);
    })();
  }, [provider.calval, setAvailableTimes, provider.product]);

  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
      <Modal isOpen={provider.cal} toggle={toggle} className="w-[380px]">
        <ModalBody className="pr-0 ">
          <Calendar
            onChange={provider.setCalVal}
            value={provider.calval}
            minDate={new Date()}
          />

          <div className="flex justify-between">
            <Input
              type="select"
              onChange={(e) => {
                console.log(e.target.value);
                provider.setTsag(e.target.value);
              }}
            >
              <option key={null} value={0}>
                Select a Time
              </option>
              {availableTimes &&
                availableTimes.map((time) => {
                  return (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  );
                })}
            </Input>
            <div className="flex items-end pr-5">
              <Button
                className="p-0 px-2 h-10"
                onClick={submit}
                disabled={!provider.calval || provider.tsag === "0"}
              >
                Хадгалах
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default App;
