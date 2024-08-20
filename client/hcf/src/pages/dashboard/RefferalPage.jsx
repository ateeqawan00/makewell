import { FaAngleLeft } from "react-icons/fa6";

const RefferalPage = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary flex items-center justify-center rounded-md">
          <FaAngleLeft color="#fff" />
        </div>
        <h1 className="text-primary font-semibold">Refferal</h1>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="text-primary font-semibold">
          Refer Friends and Get Reward{" "}
        </h1>

        <form className="max-w-[900px]">
          <label
            htmlFor="default-refferal"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Refferal Link
          </label>
          <div className="relative">
            <input
              type="refLink"
              id="default-refLink"
              value={"http://www.figma.com/file/akshfKUAHFLAJF;LJFDAIFAPOD...."}
              className="block w-full p-4 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
              disabled
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-primary focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Copy Link{" "}
            </button>
          </div>
        </form>
        <ProjectTable />
      </div>
    </div>
  );
};

export default RefferalPage;

const projects = [
  {
    id: 1,
    name: "Ali Khan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_to5_OmUXVAZRZ92_FOJAbkfRY_zRZghbJDE2-3nS5Q&s",
    dateTime: "24/12/12",
    reward: "$10",
    status: "Paid",
  },
  {
    id: 1,
    name: "Ali Khan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_to5_OmUXVAZRZ92_FOJAbkfRY_zRZghbJDE2-3nS5Q&s",
    dateTime: "24/12/12",
    reward: "$10",
    status: "Paid",
  },
  {
    id: 1,
    name: "Ali Khan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_to5_OmUXVAZRZ92_FOJAbkfRY_zRZghbJDE2-3nS5Q&s",
    dateTime: "24/12/12",
    reward: "$10",
    status: "Paid",
  },
  {
    id: 1,
    name: "Ali Khan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_to5_OmUXVAZRZ92_FOJAbkfRY_zRZghbJDE2-3nS5Q&s",
    dateTime: "24/12/12",
    reward: "$10",
    status: "Paid",
  },
];

const ProjectTable = () => {
  return (
    <div className="flex flex-wrap -mx-3 mb-5">
      <div className="w-full max-w-full px-3 mb-6 mx-auto">
        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
            {/* card body  */}
            <div className="flex-auto block py-8 pt-6 px-9">
              <div className="overflow-x-auto">
                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                  <thead className="align-bottom">
                    <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                      <th className="pb-3 text-start min-w-[175px]">Name</th>
                      <th className="pb-3 text-end min-w-[100px]">Date/Time</th>
                      <th className="pb-3 text-end min-w-[100px]">Reward</th>
                      <th className="pb-3 pr-12 text-end min-w-[175px]">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr
                        key={project.id}
                        className="border-b border-dashed last:border-b-0"
                      >
                        <td className="p-3 pl-0">
                          <div className="flex items-center">
                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                              <img
                                src={project.image}
                                className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col justify-start">
                              <a
                                href="javascript:void(0)"
                                className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                              >
                                {project.name}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            {project.dateTime}
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end">
                          <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none  bg-success-light rounded-lg">
                            {project.reward}
                          </span>
                        </td>
                        <td className="p-3 pr-12 text-end">
                          <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                            {project.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
