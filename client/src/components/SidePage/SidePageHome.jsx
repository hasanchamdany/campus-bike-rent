import * as React from "react"
import button from "../../assets/Images/button.svg"
import riders from "../../assets/Images/riders.svg"
import viewMore from "../../assets/Images/viewMore.svg"

export default function SideCard() {
  return (
    <div className="flex-col">
      {/* main start */}
      <div className="flex justify-center content-center pt-24 pb-16">
        {/* page left start */}
        <div className="w-full flex flex-col justify-center items-center content-center lg:w-1/3">
          {/*div BISA - logo*/}
          <div className="pt-16 text-8xl font-bold font-Inter justify-left lg:ml-24">
            B<span className=" text-orange">i</span>SA
            <div className="text-2xl">Bike Sharing App</div>
          </div>
          <div id="button rent" className="mt-6 lg:ml-24 h-f14 w-64 my-40">
            <button>
              <a href="/rent">
                <img
                  src={button}
                  alt="rent now"
                  className="hover:scale-[1.02] ease-in-out rounded-xl w-9/12 h-9/12 m-auto"
                ></img>
              </a>
            </button>
          </div>
        </div>
        {/* page left end */}
        {/* riders start */}
        <div className="hidden m-auto lg:flex lg:w-2/3">
          <img
            src={riders}
            alt="bike hello"
            className="rounded-xl w-9/12 h-9/12 m-auto"
          ></img>
        </div>
        {/* riders end */}
      </div>
      {/* main end */}
      <div>
        <div className="flex justify-center mt-24 mb-8">
          <button>
            <img
              src={viewMore}
              alt="view more"
              className="hover:scale-[1.02] ease-in-out rounded-xl w-9/12 h-9/12 m-auto mb-16"
            ></img>
          </button>
        </div>
      </div>
    </div>
  )
}
