export const Hero = ({ leftImg, rightImg }) => {
  return (
    <div className="grid min-h-screen grid-cols-2 content-center ">
      <div className=" h-[100vh] relative">
        <img
          src={leftImg}
          alt=""
          className="w-full h-full object-cover object-[center_top]"
        />
        <div className="absolute bottom-10 left-5 z-10 text-2xl ">
          <h2 className="font-bold text-4xl text-[#FD607B]">
            WOMEN'S COLLECTION 2025
          </h2>
          <div>
            <p
              className="font-bold text-white"
              style={{
                WebkitTextStroke: "0.2px black",
              }}
            >
              La colección Women’s 2025 fusiona comodidad y diseño vanguardista.
              Piezas versátiles que se adaptan a cada momento: del día a la
              noche, del trabajo a la ciudad.
            </p>
          </div>
          <div>
            <button className="btn btn-error">DISCOVER</button>
          </div>
        </div>
      </div>
      <div className="h-[100vh] relative">
        <img
          src={rightImg}
          alt=""
          className="w-full h-full object-cover object-[center_top] "
        />
        <div className="absolute bottom-10 left-5 z-10 text-2xl ">
          <h2 className="font-bold text-4xl text-[#2f36d3]">
            MEN´S COLLECTION 2025
          </h2>
          <div>
            <p
              className="font-bold text-white"
              style={{
                WebkitTextStroke: "0.2px black",
              }}
            >
              Hecha para el hombre consciente. Tejidos responsables, líneas
              puras y un enfoque en la comodidad sin sacrificar el estilo. Moda
              que respira autenticidad.
            </p>
          </div>
          <div>
            <button className="btn bg-[#2f36d3] border-none">DISCOVER</button>
          </div>
        </div>
      </div>
    </div>
  );
};
