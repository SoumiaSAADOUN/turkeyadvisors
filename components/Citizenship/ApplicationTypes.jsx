import React from "react";

const ApplicationTypes = () => {
  const types = [
    {
      title: "Acquire an immovableasset of at least",
      price: "400.000 $",
      href: "#first-one",
    },
    {
      title: "Acquire government bonds of min",
      price: "500.000 $",
      href: "#second-one",
    },
    {
      title: "Deposit in a turkish bank at least",
      price: "500.000 $",
      href: "#third-one",
    },
  ];
  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center w-full gap-8">
        {types.map((type, index) => (
          <div
            className="flex flex-col items-center justify-center h-full py-8 rounded shadow-md md:basis-1/4 grow basis-full "
            key={`step-${index}`}
          >
            <div className="flex flex-col p-4 border rounded-xl border-LIGHT_GREY group-hover:border-SECONDARY_COLOR w-fit group-hover:text-SECONDARY_COLOR ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 40 40.305"
                className="fill-SECONDARY_COLOR"
              >
                <defs></defs>
                <g transform="translate(0 -0.003)">
                  <path
                    className="a"
                    d="M1.342,40.308H5.383a1.339,1.339,0,0,0,1.342-1.342V37.624h15.2a18.013,18.013,0,0,0,17.74-14.881l.292-1.649a2.529,2.529,0,0,0-2.042-2.932,2.493,2.493,0,0,0-1.59.233V15.419H37a.679.679,0,0,0,.671-.671.739.739,0,0,0-.19-.481L32.081,8.9a.669.669,0,0,0-.948,0l-1.546,1.546V1.312A.679.679,0,0,0,28.916.64H22.19a.679.679,0,0,0-.671.671v7.4H18.791a11.145,11.145,0,0,0-1.2-2.159L19.3,2.391A1.153,1.153,0,0,0,18.674.874,1.167,1.167,0,0,0,17.711.9l-1.269.642L15.64.48A1.165,1.165,0,0,0,14.006.247c-.058.015-.088.058-.131.088L12.853,1.355l-.671-.89A1.18,1.18,0,0,0,10.548.232c-.044.029-.088.073-.131.1l-1.284,1.3-1.94-.554a1.161,1.161,0,0,0-1.444.8,1.145,1.145,0,0,0,.1.875L7.878,6.505c-1.43,1.284-3.166,4.917-3.166,8.214v2.057a4.05,4.05,0,0,0,4.041,4.041H34.562l-1.415,2.845-3.706,1.59a3.344,3.344,0,0,0-3.21-2.407H16.544a18.652,18.652,0,0,0-9.818,2.787V24.187a1.339,1.339,0,0,0-1.342-1.342H1.342A1.317,1.317,0,0,0,0,24.173V38.966A1.339,1.339,0,0,0,1.342,40.308ZM8.856,2.96a1.163,1.163,0,0,0,1.138-.292l1.225-1.225.686.89a1.18,1.18,0,0,0,1.634.233.834.834,0,0,1,.117-.1l1.021-1.021.773,1.021a1.175,1.175,0,0,0,1.459.35l.977-.5L16.369,6.024H14.531L15.392,4.3l-1.2-.6-1.167,2.32H11.861l-.948-1.955L9.7,4.652l.657,1.371H9.147L7.236,2.493Zm6.609,6.419V19.46H8.739a2.687,2.687,0,0,1-2.684-2.684V14.719c0-3.6,2.232-6.959,2.859-7.353h7.616A7.269,7.269,0,0,1,17.3,8.708H16.136A.679.679,0,0,0,15.464,9.379Zm1.342.671h4.712v9.41H16.807Zm14.793.277,3.749,3.749H27.836ZM22.861,1.983h5.383v9.8L25.75,14.281a.669.669,0,0,0,0,.948.649.649,0,0,0,.481.19H26.9V19.46H22.861Zm5.383,13.451H34.97v4.041H33.628v-2.7a.679.679,0,0,0-.671-.671H30.272a.679.679,0,0,0-.671.671V19.46H28.259V15.434Zm4.041,4.027H30.929V17.447h1.342V19.46ZM16.544,24.173h9.687a2.013,2.013,0,1,1,0,4.027H15.464v1.342H26.231a3.337,3.337,0,0,0,3.312-2.9L33.89,24.8a.653.653,0,0,0,.336-.321L36.4,20.132a1.186,1.186,0,0,1,1.59-.525,1.2,1.2,0,0,1,.642,1.269l-.292,1.649A16.654,16.654,0,0,1,21.927,36.282H6.726v-9.06A17.356,17.356,0,0,1,16.544,24.173Zm-15.2,0H5.383V38.966H1.342Z"
                    transform="translate(0 0)"
                  ></path>
                  <path
                    className="a"
                    d="M1.84,17.95H3.013v1.76H1.84Z"
                    transform="translate(0.506 8.409)"
                  ></path>
                  <path
                    className="a"
                    d="M16.59,2.28h.587V3.453H16.59Z"
                    transform="translate(7.665 0.626)"
                  ></path>
                  <path
                    className="a"
                    d="M17.98,2.28h.587V3.453H17.98Z"
                    transform="translate(8.308 0.626)"
                  ></path>
                  <path
                    className="a"
                    d="M16.59,5.97h.587V7.143H16.59Z"
                    transform="translate(7.665 2.776)"
                  ></path>
                  <path
                    className="a"
                    d="M17.98,5.97h.587V7.143H17.98Z"
                    transform="translate(8.308 2.776)"
                  ></path>
                  <path
                    className="a"
                    d="M12.19,7.92h.587V9.093H12.19Z"
                    transform="translate(5.632 3.683)"
                  ></path>
                  <path
                    className="a"
                    d="M13.57,7.92h.587V9.093H13.57Z"
                    transform="translate(6.27 3.683)"
                  ></path>
                  <path
                    className="a"
                    d="M12.19,9.76h.587v1.173H12.19Z"
                    transform="translate(5.632 4.539)"
                  ></path>
                  <path
                    className="a"
                    d="M13.57,9.76h.587v1.173H13.57Z"
                    transform="translate(6.27 4.539)"
                  ></path>
                  <path
                    className="a"
                    d="M9.856,7.477H9.269V6.89H8.1v.587H7.509a.593.593,0,0,0-.587.587V9.836a.593.593,0,0,0,.587.587h1.76v.587H6.91V11.6a.593.593,0,0,0,.587.587h.587v.587H9.256v-.587h.587a.593.593,0,0,0,.587-.587V9.836a.593.593,0,0,0-.587-.587H8.1v-.6h2.346V8.063A.593.593,0,0,0,9.856,7.477Z"
                    transform="translate(3.314 3.414)"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="px-4 py-4 text-xl font-semibold text-center text-PRIMARY_COLOR">
              {type.title.toUpperCase()}
            </div>
            <div className="w-[200px] p-4 text-center rounded-sm shadow-md">
              <a
                href={type.href}
                className="text-xl font-bold text-center text-PRIMARY_COLOR"
              >
                {type.price}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ApplicationTypes;
