import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

const index = () => {
  return (
    <>
      <Header />
      <div className="w-full h-screen sticky top-0 flex items-center justify-center ">
        <div className="w-[50%] h-[100%] flex flex-col justify-center gap-10 pl-10">
          <div className="text-[50px] font-[500]">This is Heading</div>
          <div className="w-[90%] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            nostrum eaque assumenda, enim sapiente id dolor rerum officia
            repellendus. Qui repellat ipsa incidunt perferendis optio obcaecati
            facilis, est nisi temporibus?
          </div>
        </div>
        <div className="w-[50%] h-[100%] flex items-center justify-center">
          <img
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/blazer/f/t/l/40-supreme-black-darbar-in-original-imagdczhnrtudw6c-bb.jpeg?q=70"
            className="w-[60%]"
          />
        </div>
      </div>
      <div className="w-full h-screen sticky top-0 flex items-center justify-center bg-white">
        <div className="w-[50%] h-[100%] flex items-center justify-center">
          <img
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/y/m/z/-original-imags7jvrkxnfege.jpeg?q=70"
            className="w-[60%]"
          />
        </div>
        <div className="w-[50%] h-[100%] flex flex-col justify-center gap-10 pl-10">
          <div className="text-[50px] font-[500]">This is Heading</div>
          <div className="w-[90%] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            nostrum eaque assumenda, enim sapiente id dolor rerum officia
            repellendus. Qui repellat ipsa incidunt perferendis optio obcaecati
            facilis, est nisi temporibus?
          </div>
        </div>
      </div>
      <div className="w-full h-screen sticky top-0 flex items-center justify-center bg-white">
        <div className="w-[50%] h-[100%] flex flex-col justify-center gap-10 pl-10">
          <div className="text-[50px] font-[500]">This is Heading</div>
          <div className="w-[90%] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            nostrum eaque assumenda, enim sapiente id dolor rerum officia
            repellendus. Qui repellat ipsa incidunt perferendis optio obcaecati
            facilis, est nisi temporibus?
          </div>
        </div>
        <div className="w-[50%] h-[100%] flex items-center justify-center">
          <img
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/h/t/l-0822-sh360-01-the-indian-garage-co-original-imagmnqjmkdytdmj.jpeg?q=70"
            className="w-[60%]"
          />
        </div>
      </div>
      <div className="w-[full] h-[60vh] sticky top-[40vh] flex items-center justify-center bg-white">
        <Footer />
      </div>
    </>
  );
};

export default index;
