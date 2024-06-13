import { CiStar } from "react-icons/ci";
const Expreience = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mt-5 mb-5">
        <h1 className="text-orange-400 text-center">Product</h1>
        <h1 className="text-xl text-center font-semibold">
          Most Popular Items
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/RbCxH3t/download-4.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Gyro Sandwhic</h1>
              <h1 className="flex items-center gap-2">
                {" "}
                <CiStar className="text-orange-400" />
                4.9
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="bg-orange-400 text-white rounded-3xl p-2">
                Add To Cart
              </h1>
              <h1>$ 15.00</h1>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/5FsKt35/download-5.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold"> Enchilade</h1>
              <h1 className="flex items-center gap-2">
                {" "}
                <CiStar className="text-orange-400" />
                5.9
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="bg-orange-400 text-white rounded-3xl p-2">
                Add To Cart
              </h1>
              <h1>$ 25.00</h1>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-[180px]"
              src="https://i.ibb.co/P5rWJs6/best-green-beans-recipe-2-2.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Green Beans</h1>
              <h1 className="flex items-center gap-2">
                {" "}
                <CiStar className="text-orange-400" />
                4.9
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="bg-orange-400 text-white rounded-3xl p-2">
                Add To Cart
              </h1>
              <h1>$ 12.00</h1>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/DgYQ3gt/download-2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Pizza</h1>
              <h1 className="flex items-center gap-2">
                {" "}
                <CiStar className="text-orange-400" />
                5.0
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="bg-orange-400 text-white rounded-3xl p-2">
                Add To Cart
              </h1>
              <h1>$ 18.50</h1>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/jM6Rtm5/download-6.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Chicken Pot Pie</h1>
              <h1 className="flex items-center gap-2">
                {" "}
                <CiStar className="text-orange-400" />
                4.9
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="bg-orange-400 text-white rounded-3xl p-2">
                Add To Cart
              </h1>
              <h1>$ 25.00</h1>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/vBxR2dW/download-7.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Green Salad</h1>
              <h1 className="flex items-center gap-2">
                {" "}
                <CiStar className="text-orange-400" />
                4.9
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="bg-orange-400 text-white rounded-3xl p-2">
                Add To Cart
              </h1>
              <h1>$ 15.00</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-orange-400 p-2 rounded-3xl text-white mt-5 ">
          {" "}
          See More Products{" "}
        </button>
      </div>
    </div>
  );
};

export default Expreience;
