import { useState } from "react";
import Error from "./Error";

const CardLogin = () => {
  const [error, setError] = useState(true);

  return (
    <>
      <div className="absolute top-5 right-10">{error && <Error />}</div>
      <div className="w-full h-full flex flex-col py-8 px-10 rounded-[24px] bg-white shadow-2xl gap-6 z-30">
        <h1 className="text-[28px] font-semibold py-4">Masuk</h1>
        <h3 className="text-[12px]">
          Masukkan alamat email / nomor telepon dan kata sandi yang telah anda
          daftarkan.
        </h3>
        <div>
          <form className="flex w-full flex-col gap-4">
            <div className="w-full py-[14px] px-5 flex gap-[10px] rounded-full border-[1px] ">
              <img src="./person.png" alt="person" />
              <input
                type="text"
                name="username"
                id="username"
                className="border-none outline-none w-full"
              />
            </div>
            <div className="w-full py-[14px] px-5 flex gap-[10px] rounded-full border-[1px] ">
              <img src="./lock.png" alt="lock" />
              <input
                type="password"
                name="password"
                id="password"
                className="border-none outline-none w-full"
              />
            </div>
            <button className="w-full bg-[#f06623] py-4 px-16 text-white rounded-full text-center font-bold">
              Masuk Sekarang
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CardLogin;
