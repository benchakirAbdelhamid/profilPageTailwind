import React, { useEffect, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Content = (props) => {
 

  const [infoUseru , setInfoUser] = useState([])

  useEffect(()=>{
    // console.log(props.infoUser[0])
    if(props.infoUser.length > 0){
      // console.log(props.infoUser.length)
      setInfoUser(props.infoUser[0])

    }
    // console.log(props.total_info_cammend_ticket.length)
},[props])

const handleInputChange = (e, id, field) => {
  const updatedTableData = {...infoUseru , [field]:e.target.value}
  setInfoUser(updatedTableData)
  // console.log(updatedTableData)
  // console.log(infoUseru)
};

const handleNewDataUpdated = ()=>{
  console.log('new data ==> ',infoUseru)
}


  return (
    <div
      style={{
        maxWidth: "80rem",
        margin: "auto",
        marginBottom: "50px",
        padding: "20px",
      }}
    >
      <h1 class=" mt-36 mb-32 text-lg  text-gray-900 dark:text-white">
        Hello{" "}
        {props.infoUser.length > 0 &&
          props.infoUser[0].userFirstName +
            " " +
            props.infoUser[0].userLastName}
      </h1>
      <ul class="grid max gap-6 md:grid-cols-2">
        <li>
          {/*  */}

          {/* card */}
          <div class=" mx-auto w-full p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={ props.infoUser[0].photoURL}
                alt=" image"
              />
              <div class="flex mt-4 mb-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  class=" px-4 py-2 text-sm font-medium text-center text-gray-900  focus:ring-gray-200 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  <b>{ props.total_info_cammend_ticket[0].total_number_orders}</b> Number Orders
                </a>
                <a
                  href="#"
                  class=" px-4 py-2 text-sm font-medium text-center text-gray-900  focus:ring-gray-200 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  <b>{ props.total_info_cammend_ticket[0].total_The_Amount_Paid} $</b> The Amount Paid
                </a>
                <a
                  href="#"
                  class=" px-4 py-2 text-sm font-medium text-center text-gray-900  focus:ring-gray-200 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  <b>{ props.total_info_cammend_ticket[0].total_ticket_quantity}</b> Ticket Quantity
                </a>
              </div>

              <span class="text-sm text-gray-500 dark:text-gray-400">
                02/02/2022
              </span>
            </div>
          </div>
        </li>
        <li>
          {/*  */}
          {/* form */}

          <form>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={ infoUseru.userFirstName}
                  onChange={(e) => handleInputChange(e, infoUseru.userId,'userFirstName')}

                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User First name
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={infoUseru.userLastName}
                  onChange={(e) => handleInputChange(e, infoUseru.userId,'userLastName')}
                  />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Last name
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_company"
                  id="floating_company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={ infoUseru.userEmail}
                  onChange={(e) => handleInputChange(e, infoUseru.userId,'userEmail')}
                  />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={ infoUseru.userPassord}
                  onChange={(e) => handleInputChange(e, infoUseru.userId,'userPassord')}
                />
                <label
                  for="floating_company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={ infoUseru.birthDate}
                disabled
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
               BirthDate
              </label>
            </div>

            <button
              type="button" onClick={handleNewDataUpdated}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit profile
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default Content;
