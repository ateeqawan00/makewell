import loaderImg from "../assets/images/loaderImg.gif";
const MainLoader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <img src={loaderImg} alt="loader image" />
    </div>
  );
};

export default MainLoader;
