import axios from "axios";

function SparkCard(props) {
  console.log(props);
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md">
      <div className="p-7 text-xl italic ">{props.item.quote}</div>
      <div className="flex my-3 mb-0  px-7  items-center py-5 bg-purple-100">
        <div>
          <div className="text-xl">{props.item.name}</div>
          <div className="text-sm">{props.item.gender}</div>
        </div>
        <div className="w-1/5 ml-auto ">
          <img className="rounded-full" src={props.item.dp} alt="" />
        </div>
      </div>
      <div
        onClick={() => {
          axios
            .post("http://localhost:5000/spark", {
              username: localStorage.getItem("username"),
              spark: props.item.username,
            })
            .then((res) => {
              if (res.data.status === "ok") alert("sparked");
            });
        }}
        className="flex  gap-3 bg-purple-600 rounded-b-xl hover:bg-purple-700"
      >
        <div className="rounded-full mb-3 mt-3  w-full text-center transition-all cursor-pointer p-3 text-white font-bold ">
          ⚡ Spark
        </div>
      </div>
    </div>
  );
}

export default SparkCard;
