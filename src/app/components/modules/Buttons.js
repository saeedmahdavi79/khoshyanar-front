const ButtonAfra = ({
  onClick,
  showLoad,
  onClick3,
  text,
  type,
  icon,
  disable,
}) => {
  return (
    <>
      {type == "green" ? (
        <button
          disabled={disable}
          className="w-full text-center gap-3 justify-center flex items-center h-[40px] xl:h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 text-[12px] xl:text-[16px] bg-[var(--color-green)] font-normal rounded-lg text-white border-2 border-[var(--color-green)]"
          onClick={onClick}
        >
          {showLoad ? (
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-300 fill-gray-50"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            ""
          )}
          {text}
        </button>
      ) : (
        ""
      )}

      {type == "blue" ? (
        <button
          className="w-full text-center gap-3 justify-center flex items-center h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 sm:text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[14px] bg-[var(--color-blue)] font-normal rounded-lg text-white border-2 border-[var(--color-blue)]"
          onClick={onClick}
        >
          {showLoad ? (
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-300 fill-gray-50"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            ""
          )}
          {text}
        </button>
      ) : (
        ""
      )}

      {type == "blue-dark" ? (
        <button
          className="w-full text-center justify-center flex items-center h-[40px] xl:h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 text-[12px] xl:text-[16px] bg-[var(--color-gray-bc)]  font-normal rounded-lg text-[var(--color-blue-dark)] "
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "blue-dark-2" ? (
        <button
          className="w-full text-center justify-center flex items-center h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 sm:text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[14px] bg-[var(--color-gray-bc)]  font-bold rounded-sm text-white border-2 border-[var(--color-gray-bc)]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}

      {type == "blue-animated" ? (
        <button
          className="w-full animate-bounce h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 text-[14px] bg-[var(--color-blue)] font-bold rounded-sm text-white border-2 border-[var(--color-blue)]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}

      {type == "sabz" ? (
        <button
          className="w-full h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 text-[14px] bg-[#52c41a] font-bold rounded-sm text-white border-2 border-[#52c41a]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "white-green-2" ? (
        <button
          className="w-full  justify-center sm:text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[14px] flex items-center h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 text-[14px] bg-[var(--color-gray-bc)]  text-gray-400 font-bold rounded-sm  "
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}

      {type == "white-xlx" ? (
        <button
          className="w-full h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 text-[14px] bg-[var(--color-slate-2)]  text-[var(--color-slate)] font-normal rounded-sm  "
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "green-xlx" ? (
        <button
          className="w-fit flex gap-2 justify-center items-center h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 text-[14px] bg-[var(--color-slate-2)]  text-[var(--color-slate)] font-normal rounded-sm  "
          onClick={onClick}
        >
          {icon}
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "orange" ? (
        <button
          className="w-full p-3  text-[12px] bg-[#FB8230] font-bold rounded-[20px] text-white border-2 border-[#FB8230]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "purple" ? (
        <button
          className="w-full p-3 text-[12px] bg-[var(--color-purple)] font-bold rounded-[20px] text-white border-2 border-[var(--color-purple)]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "red" ? (
        <button
          disabled={disable}
          className="w-full text-center gap-3 justify-center flex items-center h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 sm:text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[14px] bg-[#FF4A4A] font-normal rounded-lg text-white border-2 border-[#FF4A4A]"
          onClick={onClick}
        >
          {showLoad ? (
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-300 fill-gray-50"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            ""
          )}
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "white-purple" ? (
        <button
          className="w-full p-3 text-[12px] bg-white rounded-[20px] font-bold text-[var(--color-green)] hover:bg-[var(--color-green)] hover:text-white border-2 border-[var(--color-green)]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "white-orange" ? (
        <button
          className="w-full p-3 text-[12px] bg-white rounded-[20px] font-bold text-[var(--color-orange)] border-2 border-[var(--color-orange)]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "white-red" ? (
        <button
          className="w-full p-3 text-[12px] bg-white rounded-[20px] font-bold text-[var(--color-red)] border-2 hover:bg-[var(--color-red)] hover:text-white border-[var(--color-red)]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "white" ? (
        <button
          className="w-full p-3 text-[12px] bg-white rounded-[20px] font-bold text-[var(--color-slate-buttons)] border-2 border-[var(--color-slate-buttons)]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "3" ? (
        <button
          className="w-full p-3 text-[12px] h-[55px] mt-[7px] bg-[var(--color-slate-buttons)] font-bold rounded-[20px] text-white"
          onClick={onClick3}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "4" ? (
        <button
          className="w-full p-3 text-[12px] h-[55px] mt-[7px] bg-white rounded-[20px] font-bold text-[var(--color-slate-buttons)] border-2 border-[var(--color-slate-buttons)]"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "green-icon" ? (
        <button
          className="w-full flex justify-center gap-2 items-center p-2 text-[12px] bg-[var(--color-slate)] font-bold rounded-[20px] text-white "
          onClick={onClick}
        >
          {icon}
          {text}
        </button>
      ) : (
        ""
      )}
      {type == "orange-icon" ? (
        <button
          className="w-full p-2 flex justify-center gap-2 items-center text-[12px] bg-[#FB8230] font-bold rounded-[20px] text-white border-2 border-[#FB8230]"
          onClick={onClick}
        >
          {icon}
          {text}
        </button>
      ) : (
        ""
      )}

      {type == "blue-icon" ? (
        <button
          className="w-full flex justify-center gap-2 items-center  hover:scale-95 transition-all duration-300  py-3 text-[12px] bg-[var(--color-gray-bc)] font-bold rounded-sm text-blacl border-2  border-[var(--color-gray-bc)]"
          onClick={onClick}
        >
          {icon}
          {text}
        </button>
      ) : (
        ""
      )}

      {type == "red-icon" ? (
        <button
          className="w-full flex justify-center gap-2 items-center p-2 text-[12px] bg-[var(--color-red)] font-bold rounded-[20px] text-white border-2 border-[var(--color-red)]"
          onClick={onClick}
        >
          {icon}
          {text}
        </button>
      ) : (
        ""
      )}

      {type == "send" ? (
        <button
          disabled={disable}
          className="w-full text-center justify-center flex items-center h-[45px] px-2 py-2 hover:scale-95 transition-all duration-300 sm:text-[12px] md:text-[14px] lg:text-[14px] 2xl:text-[14px] xl:text-[14px] bg-[var(--color-slate-buttons)] font-bold rounded-sm text-white border-2 border-[var(--color-slate-buttons)]"
          onClick={onClick}
        >
          {icon}
          {text}
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default ButtonAfra;
