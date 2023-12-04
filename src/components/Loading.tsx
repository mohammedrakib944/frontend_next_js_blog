const Loading = ({ title }: { title?: string }) => {
  return (
    <div className="w-fit mx-auto flex items-center gap-2 py-6">
      <span className="loading loading-spinner loading-md"></span>{" "}
      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
};

export default Loading;
