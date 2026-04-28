// import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Toaster } from "sonner";
import { NAVLINKS } from "../constant/nav-link";
import { Check } from "lucide-react";
import { Button, Buttons } from "../../../components/ui/buttons";

const UserRecordslayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateDetails = (action: "next" | "prev") => {
    const currentLoc = location.pathname;
    const currentNavLink = NAVLINKS.findIndex((li) => {
      return currentLoc.endsWith(li.link);
    });
    const NextNavLink =
      action === "next"
        ? NAVLINKS[currentNavLink + 1]
        : NAVLINKS[currentNavLink - 1];

    navigate(NextNavLink.link);
  };

  return (
    <div className="text-white h-dvh flex">
      <div className="bg-[#042A0B] w-[40%] text-white  px-10 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-white ">
          AY LOANIFY
        </h1>
        <p className=" pt-5">Submit Details</p>

        <div className="space-y-3 pt-8 ">
          {NAVLINKS.map((link, i) => {
            const isActive = location.pathname == `/user-records/${link.link}`;
            return (
              <div key={link.id} className="flex gap-3">
                <div className="flex items-center flex-col gap-3">
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-gray-800 shadow-white/50 shadow-sm font-bold ${isActive ? "bg-green-950" : "bg-green-200"}`}
                  >
                    {isActive ? <Check className="text-white" /> : i + 1}
                  </div>
                  {i != NAVLINKS.length - 1 && (
                    <div
                      className={`h-9 w-0.5  ${isActive ? "bg-green-600" : "bg-green-200"}`}
                    ></div>
                  )}
                </div>
                <p>{link.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full p-8">
        <main>
          <Toaster position="top-right" />
          <div className="h-[85vh] overflow-y-scroll">
            <Outlet />
          </div>
          <hr className="bg-green-200  h-1" />
          <div className="flex justify-end gap-2 mt-3.5">
            <Buttons
              text="Prev"
              variant="primary"
              onClick={() => navigateDetails("prev")}
            />
            <Buttons
              text="Next"
              variant="primary"
              onClick={() => navigateDetails("next")}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserRecordslayout;
