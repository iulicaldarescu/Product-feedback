import styles from "../styles/Header.module.css";
import hamburgerMenu from "../assets/shared/mobile/icon-hamburger.svg";
import closeMenu from "../assets/shared/mobile/icon-close.svg";
import { useReducer } from "react";

function Header({ filterValue, setFilterValue }: any) {
  // for the useReducer hook

  //  1. importam hookul useReducer
  //  2. creeam o functie reducer- nu stiu sigur dar tin minte ca un best practice e sa se scrie reducer ca nume de functie.
  //Functia ia 2 parametrii, obligatoriu, un state (ca in useState) si un action care la randul ei modifica state-ul cum vrem
  //3. folosim hook-ul useReducer, care ia din nou 2 parametrii, functia reducer pe care am creat-o si initial state.
  //4. Dupa asta, creem functiile ne trebuie (openModal, closeModal)
  //5. Punem aceste functii unde avem nevoie,

  const reducer = (state: boolean, action: { type: string }): boolean => {
    switch (action.type) {
      case "OPEN_MODAL":
        return true;
      case "CLOSE_MODAL":
        return false;

      default:
        return state;
    }
  };
  //teoretic, astea se pun intr-un fisier separat, si se da export/import - o sa facem si noi asta dupa ce intelegem pe deplin useReducer ( e mai usor sa-l avem in fata)

  const [isModalMenuOpen, dispatch] = useReducer(reducer, false);

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const closeModal = () => {
    // Trigger the slide-out animation by adding a class
    dispatch({ type: "CLOSE_MODAL" });
  };

  // filtering function
  const handleClickFilter = (e: any) => {
    setFilterValue(e.target.id);
    closeModal();
  };

  // ${styles["tablet-size-background"]}
  return (
    //header built - background is changing depending the screen size
    <>
      <div
        className={` flex justify-between items-center px-5 py-2 sm:grid sm:grid-cols-3 sm:justify-between sm:gap-6 sm-h-36`}
      >
        {/* de continuat aici */}
        <div
          className={`flex flex-col text-white sm:h-40 sm:basis-1/3 sm:${styles["tablet-size-background"]} sm:justify-end pb-6 px-4 h-full`}
        >
          <p className="font-bold text-lg">Frontend Mentor</p>
          <p>Feedback Board</p>
        </div>

        <div onClick={openModal} className="sm:hidden">
          <img src={hamburgerMenu}></img>
        </div>

        {/* categories */}
        <div className="hidden sm:block sm:bg-white h-full">
          <div className="">
            <div className="sm:flex sm:basis-1/3 justify-center items-center">
              <div
                className={`flex flex-wrap sm:gap-2 sm:p-2 sm:font-semibold sm:text-sm sm:rounded-lg sm:justify-start `}
              >
                <div className="flex bg-blue-400 items-center p-2 rounded-lg">
                  <p id="all" onClick={handleClickFilter} className="">
                    All
                  </p>
                </div>

                <div className="flex bg-blue-400 items-center p-2 rounded-lg">
                  <p id="ui" onClick={handleClickFilter}>
                    UI
                  </p>
                </div>

                <div className="flex bg-blue-400 items-center p-2 rounded-lg">
                  <p id="ux" onClick={handleClickFilter}>
                    UX
                  </p>
                </div>
                <div className="flex bg-blue-400 items-center p-2 rounded-lg">
                  <p id="enhancement" onClick={handleClickFilter}>
                    Enhancement
                  </p>
                </div>
                <div className="flex bg-blue-400 items-center p-2 rounded-lg">
                  <p id="bug" onClick={handleClickFilter}>
                    Bug
                  </p>
                </div>
                <div className="flex bg-blue-400 items-center p-2 rounded-lg">
                  <p id="feature" onClick={handleClickFilter}>
                    Feature
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* roadmap */}

        <div className="hidden sm:block sm:bg-white sm:rounded-lg sm:py-2 sm:px-4 sm:basis-1/3 h-full">
          <div className="flex justify-between pb-5 items-center">
            <p className="text-black font-bold">Roadmap</p>
            <p className="underline text-blue-600 text-sm">View</p>
          </div>

          <div className="flex flex-col list-disc list-inside">
            <div className="flex justify-between">
              <p>
                {" "}
                <span className="text-yellow-400 pr-1">&#8226;</span> Planned
              </p>
              <p>2</p>
            </div>

            <div className="flex justify-between">
              <p>
                {" "}
                <span className="text-yellow-400 pr-1">&#8226;</span>{" "}
                In-Progress
              </p>
              <p>3</p>
            </div>

            <div className="flex justify-between">
              <p>
                {" "}
                <span className="text-yellow-400 pr-1">&#8226;</span> Live
              </p>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>

      {/* modal menu  */}

      {isModalMenuOpen && (
        <div
          className={`absolute bg-violet-300 top-0 right-0 left-40 h-screen ${
            isModalMenuOpen
              ? styles["animate-slide-in"]
              : styles["animate-slide-out"]
          }`}
        >
          {/* //close button */}
          <button onClick={closeModal}>
            <img src={closeMenu} className={`pl-5 py-3 `}></img>
          </button>

          {/* container that holds the 2 blocks of menu like in the photo */}
          <div className="flex flex-col px-1 gap-3">
            {/* left block with all the filters */}
            <div
              className={`flex flex-wrap gap-4 ${styles["custom-filter-childs"]} bg-white p-2 font-semibold text-sm rounded-lg`}
            >
              <p id="all" onClick={handleClickFilter}>
                All
              </p>
              <p id="ui" onClick={handleClickFilter}>
                UI
              </p>
              <p id="ux" onClick={handleClickFilter}>
                UX
              </p>
              <p id="enhancement" onClick={handleClickFilter}>
                Enhancement
              </p>
              <p id="bug" onClick={handleClickFilter}>
                Bug
              </p>
              <p id="feature" onClick={handleClickFilter}>
                Feature
              </p>
            </div>
            {/* left block with roadmap etc */}
            <div className="bg-white rounded-lg py-2 px-4">
              <div className="flex justify-between pb-5 items-center">
                <p className="text-black font-bold">Roadmap</p>
                <p className="underline text-blue-600 text-sm">View</p>
              </div>

              <div className="flex flex-col list-disc list-inside">
                <div className="flex justify-between">
                  <p>
                    {" "}
                    <span className="text-yellow-400 pr-1">&#8226;</span>{" "}
                    Planned
                  </p>
                  <p>2</p>
                </div>

                <div className="flex justify-between">
                  <p>
                    {" "}
                    <span className="text-yellow-400 pr-1">&#8226;</span>{" "}
                    In-Progress
                  </p>
                  <p>3</p>
                </div>

                <div className="flex justify-between">
                  <p>
                    {" "}
                    <span className="text-yellow-400 pr-1">&#8226;</span> Live
                  </p>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
