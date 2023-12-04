const formateDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};

export default formateDate;
