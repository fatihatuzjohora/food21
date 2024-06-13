import React from "react";

const MyProtfully = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mt-5 mb-5">
        <h1 className="text-orange-400 text-center">Testimonials</h1>
        <h1 className="text-xl text-center font-semibold">
          Our Happy Client Says
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-48 ">
        <div className="card card-compact bg-base-100 shadow-xl ">
          <div className="flex justify-center items-center gap-2">
            <div>
              <img
                className="rounded-full w-[50px] h-[50px]"
                src="https://i.ibb.co/pddb1jm/download-3.jpg"
                alt=""
              />
            </div>

            <div>
              <h1>Willians Jhone</h1>
              <h1>CEO & Co-Founder</h1>
            </div>
          </div>

          <div className="card-body">
            <p>
              If ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
              eos corporis ipsam quidem reiciendis esse consequuntur ad totam
              hic error, eveniet ea fugit necessitatibus, laborum assumenda
              impedit atque veritatis quas. assumenda impedit atque veritatis
              quas. assumenda impedit atque veritatis quas.
            </p>
          </div>
        </div>

        <div className="w-[300px] ">
          <img
            className="w-full"
            src="https://i.ibb.co/m6thyh6/images-2-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MyProtfully;
