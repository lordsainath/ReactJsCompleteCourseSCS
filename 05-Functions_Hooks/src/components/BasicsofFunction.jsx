import React from 'react'

const BasicsofFunction = () => {
     function btnClicked() {
    // console.log("Hello Sainath")
    const tooltip = document.createElement("p");
    tooltip.innerHTML = "Form submitted";
    tooltip.style.top = "10px";
    tooltip.style.right = "10px";
    tooltip.style.position = "absolute";
    tooltip.classList = "px-5 py-2 bg-green-300 text-black rounded-md";

    document.body.appendChild(tooltip);
    // const btn1 = document.getElementById("btn1");
    // btn1.appendChild(tooltip)

    setTimeout(() => {
      document.body.removeChild(tooltip);
    }, 1000);
  }
  return (
      <button
        id="btn1"
        onClick={btnClicked}
        className="bg-yellow-300 text-black cursor-pointer px-5 py-2 rounded-md m-10"
      >
        Hello Sainath
      </button>
  )
}

export default BasicsofFunction