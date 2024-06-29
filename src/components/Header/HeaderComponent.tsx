export const HeaderComponent = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
        Movie<span className="text-indigo-600">App</span>
      </h2>
      <h3 className="text-xl md:tWSext-3xl mt-10">Come On</h3>
      <p className="text-md md:text-xl mt-10">
        <a className="hover:underline" href="#">
          MovieApp
        </a>{" "}
        is a website that helps you choose the best movies ranked by users on
        the internet.
      </p>
    </div>
  );
};
