import Photo from "./../Components/Sormuus/photo";
import photo1 from "./../images/sormuus/1.jpg";
import photo2 from "./../images/sormuus/2.jpg";
import photo3 from "./../images/sormuus/3.jpg";
import photo4 from "./../images/sormuus/4.jpg";
import photo5 from "./../images/sormuus/5.jpg";
import photo6 from "./../images/sormuus/6.jpg";
import photo7 from "./../images/sormuus/7.jpg";

const products = [
  {
    id: 1,
    name: "Sormuus",
    price: 1000,
    desciption: "hhe",
    image: photo1,
  },
  {
    id: 2,
    name: "Sormuus",
    desciption: "hhe",
    price: 1000,
    image: photo2,
  },
  {
    id: 3,
    desciption: "hhe",
    name: "Sormuus",
    price: 1000,
    image: photo3,
  },
  {
    id: 4,
    desciption: "hhe",
    name: "Sormuus",
    price: 1000,
    image: photo4,
  },
  {
    id: 5,
    desciption: "hhe",
    name: "Sormuus",
    price: 1000,
    image: photo5,
  },
];

function Sormuus() {
  return (
    <div>
      <Photo />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 space-y-5 w-[80vw] my-10">
          {products.map((product) => {
            return (
              <div>
                {/* <div className="aspect-square"> */}
                <img
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                />
                <div className="flex justify-between w-[250px] bg-pink-200 p-5">
                  <div className="flex flex-col">
                    <div className="font-bold">{product.name}</div>
                    <div>{product.desciption}</div>
                  </div>
                  <div className="flex items-center">{product.price}</div>
                </div>
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sormuus;
