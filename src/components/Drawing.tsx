const HEAD = (
  <div className="border-[6px] border-gray-800 rounded-full h-10 w-10 absolute top-10 right-[-17px]" />
);

const BODY = (
  <div className="h-20 w-[6px] absolute top-20 right-0 bg-gray-800" />
);

const ARM_LEFT = (
  <div
    className="h-[6px] w-20 absolute top-28 bg-gray-800 right-[6px]"
    style={{ rotate: "30deg", transformOrigin: "right bottom" }}
  />
);

const ARM_RIGHT = (
  <div
    className="h-[6px] w-20 absolute top-28 bg-gray-800 right-[-80px]"
    style={{ rotate: "-30deg", transformOrigin: "left bottom" }}
  />
);

const LEG_RIGHT = (
  <div
    className="h-[6px] w-20 absolute top-[154px] bg-gray-800 right-[-74px]"
    style={{ rotate: "60deg", transformOrigin: "left bottom" }}
  />
);

const LEG_LEFT = (
  <div
    className="h-[6px] w-20 absolute top-[154px] bg-gray-800 right-0"
    style={{ rotate: "-60deg", transformOrigin: "right bottom" }}
  />
);

function Drawing() {
  return (
    <div className="relative outline-red-500 outlinex">
      {HEAD}
      {BODY}
      {ARM_RIGHT}
      {ARM_LEFT}
      {LEG_RIGHT}
      {LEG_LEFT}
      <div className="h-10 w-[6px] bg-gray-800 absolute top-0 right-0" />
      <div className="h-[6px] w-28 sm:w-40 bg-gray-800 ml-[109px]" />
      <div className="h-80 sm:h-96 w-[6px] bg-gray-800 ml-[109px]" />
      <div className="h-[6px] w-56 bg-gray-800" />
    </div>
  );
}

export default Drawing;
