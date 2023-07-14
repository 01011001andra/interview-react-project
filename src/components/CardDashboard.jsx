import { useSelector } from "react-redux";

const CardDashboard = () => {
  const { username } = useSelector((state) => state.auth);
  console.log(username);
  return (
    <div className="w-full h-full flex flex-col py-8 px-10 rounded-[24px] bg-white shadow-2xl gap-6 z-30">
      <h1 className="text-[28px] font-semibold py-4">Dashboard</h1>
      <h3 className="text-[12px]">Selamat datang {username}</h3>
      <div className="w-full flex flex-col gap-6">
        <h3 className="text-[12px] ">Daftar makanan:</h3>
        <ul className="list-disc pl-4">
          <li className="text-[12px]">Ayam Goreng [Rp. 15.000]</li>
          <li className="text-[12px]">Rendang [Rp. 20.000]</li>
        </ul>
      </div>
      <button className="w-full bg-[#f06623] py-4 px-16 text-white rounded-full text-center font-bold">
        Keluar
      </button>
    </div>
  );
};

export default CardDashboard;
