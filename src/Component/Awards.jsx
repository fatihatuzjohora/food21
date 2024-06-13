import { CiDeliveryTruck } from "react-icons/ci";
import { ImSpoonKnife } from "react-icons/im";
import { GiForkKnifeSpoon } from "react-icons/gi";




const Awards = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 mb-5">
      <div className="mt-5 mb-5">
        <h1 className="text-orange-400 text-center">Services</h1>
        <h1 className="text-xl text-center font-semibold">
          Why Choose Our Favorite Food{" "}
        </h1>
      </div>

      <div className="flex gap-5">
        <div className="card bg-base-100 border hover:shadow-xl p-4">
          <div className="flex items-center justify-center">
          <h1>
             
             <GiForkKnifeSpoon  className="w-[50px] rounded-full h-[50px] bg-orange-100 text-orange-400 p-2" />

             </h1>
          </div>
          <div className="card-body">
            <h2 className="font-bold text-center">Qualityfull Food</h2>
            <p className="text-center">
              But I must explain to you how all this mistaken idea of denouncing
              pleasur and prasising pain was bron.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 border hover:shadow-xl p-4">
          <div className="flex items-center justify-center">
          <h1>
             
             <ImSpoonKnife  className="w-[50px] rounded-full h-[50px] bg-orange-50 text-orange-400 p-2" />

             </h1>
          </div>
          <div className="card-body">
            <h2 className="font-bold text-center">Healthy Food</h2>
            <p className="text-center">
              But I must explain to you how all this mistaken idea of denouncing
              pleasur and prasising pain was bron.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 border hover:shadow-xl p-4">
          <div className="flex items-center justify-center">
            <h1>
             
              <CiDeliveryTruck  className="w-[50px] rounded-full h-[50px] bg-orange-50 text-orange-400 p-2" />

              </h1>
          </div>
          <div className="card-body">
            <h2 className="font-bold text-center">Fast Delivery</h2>
            <p className="text-center">
              But I must explain to you how all this mistaken idea of denouncing
              pleasur and prasising pain was bron.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
