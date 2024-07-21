import React, { useState } from "react";
import ReferralModal from "../components/miscellaneous/ReferralModal";

const Refer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-screen h-[90%] gap-4 bg-[#EEF5FF] mt-4 p-4">
      <h1 className="text-2xl font-semibold text-black text-center p-4">
        How Do I <span className="text-[#1A73E8]">Refer?</span>
      </h1>
      <img
        src="./Refer.png"
        alt="Refer Image"
        className="w-[95%] lg:h-[300px] xl:h-[500px] object-contain object-center"
        draggable={false}
      />
      <button
        onClick={() => setModalOpen(true)}
        className="mt-6 bg-[#1A73E8] hover:bg-[#005bd2] rounded-md flex py-2 px-6 text-white cursor-pointer"
      >
        Refer Now
      </button>

      <ReferralModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Refer;
