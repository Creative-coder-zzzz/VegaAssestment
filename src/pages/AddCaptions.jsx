import * as fabric from "fabric";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import image from "../assets/anotherSlice.png";

const AddCaption = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const location = useLocation();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const { state } = location;
    if (state && state.imageData) {
      setImageUrl(state.imageData);
    }
  }, [location]);

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      height: 500,
      width: 700,
    });
    setCanvas(fabricCanvas);

    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  console.log(imageUrl);

  useEffect(() => {
    if (canvas && imageUrl) {
      fabric.FabricImage.fromURL(imageUrl, (img) => {
        console.log("Image loaded:", img);

        img.set({
          left: 0,
          top: 0,
        });
        img.scaleToWidth(canvas.width);
        img.scaleToHeight(canvas.height);

        canvas.setBackgroundImage(img, () => {
          canvas.renderAll();
        });
      });
    }
  }, [canvas, imageUrl]);

  const addText = () => {
    const text = new fabric.Textbox("Editable Text", {
      left: 100,
      top: 100,
      fontSize: 20,
      fill: "black",
      editable: true,
    });
    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.renderAll();
  };

  const addShape = (shape) => {
    let newShape;
    switch (shape) {
      case "circle":
        newShape = new fabric.Circle({
          left: 100,
          top: 100,
          radius: 50,
          fill: "red",
        });
        break;
      case "rectangle":
        newShape = new fabric.Rect({
          left: 100,
          top: 100,
          width: 100,
          height: 50,
          fill: "blue",
        });
        break;
      case "triangle":
        newShape = new fabric.Triangle({
          left: 100,
          top: 100,
          width: 100,
          height: 100,
          fill: "green",
        });
        break;
      case "polygon":
        newShape = new fabric.Polygon(
          [
            { x: 100, y: 0 },
            { x: 0, y: 100 },
            { x: 100, y: 100 },
            { x: 200, y: 100 },
          ],
          {
            left: 100,
            top: 100,
            fill: "purple",
          }
        );
        break;
      default:
        return;
    }
    canvas.add(newShape);
    canvas.setActiveObject(newShape);
    canvas.renderAll();
  };

  const downloadImage = () => {
    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1,
    });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "modified-image.png";
    link.click();
  };

  return (
    <section
      className="w-full h-screen text-white overflow-x-hidden bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="  container mx-auto  p-4">
        <h1 className="text-2xl font-bold mb-4">Add Caption</h1>

        <div className="md:flex gap-3 ">
          <canvas
            ref={canvasRef}
            className="border border-gray-300 mb-6 bg-no-repeat bg-cover bg-center w-full h-64"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            {" "}
            <p>{imageUrl}</p>
          </canvas>
          <div className="mb-4 mt-4 flex flex-col">
            <button
              onClick={addText}
              className="bg-blue-500 mb-2 text-white rounded p-2 mr-2"
            >
              Add Text
            </button>
            <button
              onClick={() => addShape("circle")}
              className="bg-blue-500 mb-2 text-white rounded p-2 mr-2"
            >
              Add Circle
            </button>
            <button
              onClick={() => addShape("rectangle")}
              className="bg-blue-500 mb-2 text-white rounded p-2 mr-2"
            >
              Add Rectangle
            </button>
            <button
              onClick={() => addShape("triangle")}
              className="bg-blue-500 mb-2 text-white rounded p-2 mr-2"
            >
              Add Triangle
            </button>
            <button
              onClick={() => addShape("polygon")}
              className="bg-blue-500 text-white rounded p-2 mr-2"
            >
              Add Polygon
            </button>
          </div>
        </div>
        <button
          onClick={downloadImage}
          className="bg-green-500 text-white rounded p-2 mt-4"
        >
          Download Image
        </button>
      </div>
    </section>
  );
};

export default AddCaption;
