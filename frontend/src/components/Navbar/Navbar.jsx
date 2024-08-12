import React from "react";



function Navbar() {
    return (


        <div class="relative w-full bg-green-400 ">
            <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div class="inline-flex items-center space-x-2">
                    <span>
                        <img
                            src="./src/assets/logo.png"
                            alt="logo"

                        />

                    </span>
                    <span class="font-bold">Flipit</span>
                </div>
            
                <div >
                    <button
                        type="button"
                        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Admin Login
                    </button>
                </div>

            </div>
        </div>



    );
}

export default Navbar;
