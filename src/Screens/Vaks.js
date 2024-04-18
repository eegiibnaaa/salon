import kk from "./../images/sormuus.png";
import Photo from "../Components/photo";
import { useContext, useEffect, useState } from "react";
import { ProviderContext } from "../provider";
import { collection, getDocs } from "@firebase/firestore";
import firestore from "../firebase";

function Vaks() {
  const provider = useContext(ProviderContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const datas = [];
      const querySnapshot = await getDocs(collection(firestore, "vaks"));
      querySnapshot.forEach((doc) => {
        datas.push({ ...doc.data(), id: doc.id });
      });
      setProducts(datas);
    })();
  });

  return (
    <div>
      <Photo image={kk} />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 justify-center">
          {products.map((product) => {
            return (
              <div
                className="w-64 m-3 flex flex-col justify-center items-center"
                onClick={() => {
                  if (!localStorage.getItem("currentUser"))
                    window.location.replace("/login");
                  provider.setProduct(product);
                  provider.setCal(true);
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-64 h-64 rounded-t-md"
                />
                <div className="flex justify-between w-full bg-pink-200 p-2 rounded-b-md">
                  <div className="flex flex-col">
                    <div className="font-bold">{product.name}</div>
                    <div>{product.description}</div>
                  </div>
                  <div className="flex">₮{product.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Vaks;
