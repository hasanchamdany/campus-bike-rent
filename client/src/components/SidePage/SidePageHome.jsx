import * as React from "react"
import button from "../../assets/Images/button.svg"
import riders from "../../assets/Images/riders.svg"
import viewMore from "../../assets/Images/viewMore.svg"

export default function SideCard() {
  return (
    <div className="flex-col">
      <div className="flex justify-center">
        <div className="block mt-40 ml-40">
          {/*div BISA - button*/}
          <div className=" pt-16 text-8xl font-bold font-Inter justify-left ml-24">
            B<span className=" text-orange">i</span>SA
            <div className="text-2xl">Bike Sharing App</div>
          </div>
          <div id="button rent" className="mt-6 ml-24 h-f14 w-64 my-40">
            <button>
              <a href="/profile">
                <img
                  src={button}
                  alt="rent now"
                  className="hover:scale-[1.02] ease-in-out rounded-xl w-9/12 h-9/12 m-auto"
                ></img>
              </a>
            </button>
          </div>
        </div>
        <div className="flex m-auto">
          <img
            src={riders}
            alt="bike hello"
            className="rounded-xl w-9/12 h-9/12 m-auto"
          ></img>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <button>
            <img
              src={viewMore}
              alt="view more"
              className="hover:scale-[1.02] ease-in-out rounded-xl w-9/12 h-9/12 m-auto"
            ></img>
          </button>
        </div>
      </div>
    </div>
  )
}
