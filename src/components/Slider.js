import React from "react";

const Slider = props => {
  const { children, onChangeHandler, sliderVal, name, min, max } = props;

  return (
    <div className="slider-wrapper">
      <strong>{children}</strong>
      <div className="control">
        <div className="slider">
          <input
            type="range"
            name={name}
            value={sliderVal}
            onChange={e =>
              onChangeHandler({
                name: e.target.name,
                value: Number(e.target.value)
              })
            }
            min={min}
            max={max}
          />
          <p className="ranges">
            <span>${min}</span>
            <span>${max}</span>
          </p>
        </div>
        <span>$ {sliderVal}</span>
      </div>
    </div>
  );
};

export default Slider;