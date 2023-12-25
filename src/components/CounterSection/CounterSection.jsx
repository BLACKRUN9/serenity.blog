// components/CounterComponent.js
"use client"
import { useEffect } from 'react';

const CounterComponent = () => {
    useEffect(() => {
      const loadCountUpScript = async () => {
        try {
          // Create a script element
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/motion-tailwind/scripts/plugins/countup.min.js';
          script.async = true;
  
          // Set up a callback for when the script is loaded
          script.onload = () => {
            let numbers = document.querySelectorAll("[countTo]");
  
            numbers.forEach((number) => {
              let ID = number.getAttribute("id");
              let value = number.getAttribute("countTo");
  
              let options = {};
              if (number.hasAttribute("data-decimal")) {
                options = {
                  decimalPlaces: 1,
                };
              }
  
              const countUp = new window.CountUp(ID, value, options);
  
              if (!countUp.error) {
                countUp.start();
              } else {
                console.error(countUp.error);
                number.innerHTML = value;
              }
            });
          };
  
          // Append the script element to the document body
          document.body.appendChild(script);
        } catch (error) {
          console.error('Error loading CountUp script:', error);
        }
      };
  
      loadCountUpScript();
    }, []);
  return (
    <div className="py-8 px-4  xl:gap-16 sm:py-16 xl:px-16 ">
      <div className="w-full draggable bg-transparent border border-4 border-b-appFuchsia-100 border-s-appFuchsia-100 border-e-appVeronica-100 border-t-appVeronica-100 shadow-lg hover:shadow-lg shadow-appFuchsia-100 hover:shadow-appCyan-100 rounded-md dark:drop-shadow-lg ring-2 ring-black dark:ring-white ring-offset-4 ring-offset-slate-50 dark:ring-offset-appSmoky-900">
        <div className="container flex flex-col items-center gap-12 mx-auto my-24">
          <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-4">
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center hover:text-appRed-100  dark:text-appCyan-100  text-appRed-100">
                <span id="countto1" countTo="1283"></span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-appVeronica-100">Folowesrs</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center hover:text-appRed-100 dark:text-appCyan-100  text-appRed-100">
                <span id="countto2" countTo="12"></span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-appFuchsia-100">Content</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center hover:text-appRed-100 dark:text-appCyan-100  text-appRed-100">
                <span id="countto3" countTo="3568" data-decimal="1"></span>k+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-appVeronica-100">Visitor</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center hover:text-appRed-100 dark:text-appCyan-100  text-appRed-100">
                <span id="countto4" countTo="5"></span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-appFuchsia-100"> Available Service</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default CounterComponent;
