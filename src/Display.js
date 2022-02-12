import React, { useState } from "react";
import { Form } from "react-bootstrap";
function Display() {
  const [result, setResult] = useState("");
  const [resultColor, setResultColor] = useState("");

  /**
   * Check if the side is out of range
   * @param side - The side of the triangle.
   * @returns a boolean value.
   */
  function isOutOfRange(side) {
    return side < 0 || side > 20000;
  }

  /**
   * Given three side lengths, determine if the triangle is valid
   * @param side1 - The first side of the triangle.
   * @param side2 - the second side of the triangle
   * @param side3 - The third side of the triangle.
   * @returns a boolean value.
   */
  function InputValidation(side1, side2, side3) {
    let isValid = true;
    if (!/^\d+$/.test(side1) || !/^\d+$/.test(side2) || !/^\d+$/.test(side3)) {
      isValid = false;
    }
    if (isOutOfRange(side1) || isOutOfRange(side2) || isOutOfRange(side3))
      isValid = false;
    return isValid;
  }

  /**
   * Given sort three sides of a triangle, return the type of triangle
   * @param side1 - the length of the first side of the triangle
   * @param side2 - the second side of the triangle
   * @param side3 - The hypotenuse of the triangle.
   * @returns the type of triangle
   */
  function Calculation(side1, side2, side3) {
    const sortedSides = [side1, side2, side3].sort();
    const newSide1 = sortedSides[0];
    const newSize2 = sortedSides[1];
    const newSize3 = sortedSides[2];

    if (
      newSide1 === newSize2 &&
      newSide1 === newSize3 &&
      newSize2 === newSize3
    ) {
      setResultColor("#2FFF5D");
      return "สามเหลี่ยมด้านเท่า";
    } else if (
      newSide1 === newSize2 ||
      newSide1 === newSize3 ||
      newSize2 === newSize3
    ) {
      setResultColor("#2FFF5D");
      return "สามเหลี่ยมหน้าจั่ว";
    } else if (newSize3 ** 2 === newSide1 ** 2 + newSize2 ** 2) {
      setResultColor("#2FFF5D");
      return "สามเหลี่ยมมุมฉาก";
    } else if (
      newSide1 !== newSize2 &&
      newSide1 !== newSize3 &&
      newSize2 !== newSize3
    ) {
      setResultColor("#2FFF5D");
      return "สามเหลี่ยมด้านไม่เท่า";
    } else {
      setResultColor("#FF2F2F");
      return "คำนวนไม่ได้";
    }
  }

  /**
   * It takes the user input and checks if it is valid. If it is valid, it will calculate the result
   * and display it. If it is not valid, it will display an error message.
   * @param e - The event object that contains information about the event.
   */
  function handleSubmit(e) {
    e.preventDefault();
    const newSize1 = e.currentTarget.side1.value;
    const newSize2 = e.currentTarget.side2.value;
    const newSize3 = e.currentTarget.side3.value;
    if (InputValidation(newSize1, newSize2, newSize3)) {
      const calcResult = Calculation(newSize1, newSize2, newSize3);
      setResult(calcResult);
    } else {
      setResultColor("#FF2F2F");
      setResult("คำนวนไม่ได้");
    }
  }
  return (
    <main>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>
          <u style={{ textDecorationColor: "#afeaea" }}>Enter</u> the length of
          sides
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group d-flex flex-column justify-content-center align-items-center ">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ paddingBottom: "20px", paddingTop: "20px" }}
            >
              <h5
                htmlFor="side1"
                style={{ whiteSpace: "nowrap", paddingRight: "20px" }}
              >
                Side 1
              </h5>
              <Form.Control
                className="form-control border-top-0 border-left-0 border-right-0 border-grey bg-transparent form-control shadow-none text-white"
                type="number"
                id="side1"
                placeholder="0 - 20000"
              />
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ paddingBottom: "20px" }}
            >
              <h5
                htmlFor="side2"
                style={{ whiteSpace: "nowrap", paddingRight: "20px" }}
              >
                Side 2
              </h5>
              <Form.Control
                className="form-control border-top-0 border-left-0 border-right-0 border-grey bg-transparent form-control shadow-none text-white"
                type="number"
                id="side2"
                placeholder="0 - 20000"
              />
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ paddingBottom: "20px" }}
            >
              <h5
                htmlFor="side2"
                style={{ whiteSpace: "nowrap", paddingRight: "20px" }}
              >
                Side 3
              </h5>
              <Form.Control
                className="form-control border-top-0 border-left-0 border-right-0 border-grey bg-transparent form-control shadow-none text-white"
                type="number"
                id="side3"
                placeholder="0 - 20000"
              />
            </div>
            <button
              type="submit"
              className="btn px-4 text-white"
              style={{
                paddingBottom: "10px",
                marginBottom: "20px",
                background: " #333E41",
                border: "1.59238px solid #AFEAEA",
                boxSizing: "border-box",
                borderRadius: "13.2698px",
              }}
            >
              <span className="mr-2">Enter</span>
              <img src="/enter.png" alt="" style={{ width: "20px" }} />
            </button>
          </Form.Group>
        </Form>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ paddingBottom: "10px" }}
        >
          <h5
            htmlFor="result"
            style={{
              whiteSpace: "nowrap",
              paddingRight: "20px",
              paddingTop: "5px",
            }}
          >
            Result
          </h5>
          <input
            className="form-control bg-transparent border-info"
            type="text"
            id="result"
            style={{ color: resultColor }}
            value={result}
            disabled
            readOnly
          />
        </div>
      </div>
    </main>
  );
}

export default Display;
