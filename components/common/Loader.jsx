import { TbLoader } from "react-icons/tb";

const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center gap-1 my-10">
      <TbLoader className="animate-spin text-3xl" />{" "}
      <span className="font-semibold">Loading...</span>
    </div>
  );
};

export default Loader;
