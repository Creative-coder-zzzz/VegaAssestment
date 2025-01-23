# Vega Assestment 

Image Search and canvas editor App 

How to use? 

Preview : (https://vega-assestment.vercel.app)

Steps:

1.  Go to home page (default page)
2.  Search for any image you want
3.  The image list appears
4.  click on add captions
5.  add-caption page appears
6.  click buttons to add rectangle, circle etc
7.  click on download to download the png file 

#TECHNOLOGIES USED

1. react
2. react-router-dom
3. fabric.js
4. tailwind css (for layout and styling)
5. javascript (for logic building)
6. API from pixabay


#PROS
1. responsive
2. fast
3. simple
4. user friendly

#Designed in figma 



Here’s a structured design process for your **React "Load Image and Add Caption" project** to ensure clarity and smooth development:

---

### **1. Project Definition and Requirements**
   - **Objective**: Allow users to load images, add captions, and interact with a canvas to manipulate elements.
   - **Core Features**:
     - Load images from a URL or local storage.
     - Display the loaded image on a canvas.
     - Add editable captions or text over the image.
     - Add shapes or elements (e.g., circles, rectangles) to the canvas.
     - Save the edited canvas as an image.
   - **Target Audience**: Users who need basic image editing capabilities for captions and annotations.

---

### **2. Architecture Design**
   - **Frontend Technology**: React.js with functional components and hooks for state management.
   - **Canvas Library**: `fabric.js` for managing the canvas and its objects.
   - **State Management**: Use React's `useState` and `useEffect` hooks for handling application state.
   - **External APIs**:
     - For image search: Pixabay or similar image APIs.
   - **File Management**: Use browser `localStorage` for saving and retrieving image URLs.

---

### **3. User Interface (UI) Design**
   - **Main Components**:
     1. **Search Bar**: To input keywords and fetch images from an API.
     2. **Image Results Section**: Display fetched images in a grid for user selection.
     3. **Canvas Area**: Display the selected image with added elements (e.g., captions, shapes).
     4. **Toolbar**:
        - Add text.
        - Add shapes (circle, rectangle, etc.).
        - Save or download the final canvas image.
     5. **Download Button**: To export the final canvas as an image file.

   - **Design Principles**:
     - Keep the layout clean and intuitive.
     - Use prominent buttons for key actions like “Add Text” or “Save Image.”
     - Ensure responsive design for usability across devices.

---

### **4. Functional Design**
   - **Load Image**:
     - Allow users to search for images via an API or upload an image directly.
     - Validate and set the image URL dynamically as the canvas background.
   - **Add Caption**:
     - Implement a feature to add text boxes at user-selected positions.
     - Make captions editable (font size, color, alignment).
   - **Add Shapes**:
     - Include basic shapes (circle, rectangle, triangle).
     - Provide options for customization (e.g., fill color, border).
   - **Download Edited Image**:
     - Convert the canvas content to a PNG image using `toDataURL` and trigger a download.

---

### **5. Implementation Plan**
   - **Step 1: Project Setup**
     - Initialize a React project using `create-react-app`.
     - Install dependencies: `fabric.js` and any UI library (e.g., Tailwind CSS or Material-UI).
   - **Step 2: Image Loading**
     - Implement image fetching using Pixabay API or a local file input.
     - Dynamically set the image as a canvas background.
   - **Step 3: Caption and Shape Addition**
     - Use `fabric.Textbox` for captions.
     - Add functionality to insert and manipulate shapes using `fabric.js`.
   - **Step 4: Save and Retrieve from LocalStorage**
     - Serialize the canvas state and store it in localStorage.
     - Allow reloading the saved canvas state on page load.
   - **Step 5: Export Canvas**
     - Convert the canvas to a downloadable image using `toDataURL`.
   - **Step 6: Final UI Enhancements**
     - Add responsive styling and optimize UX.

---

### **6. Testing and Debugging**
   - **Functional Testing**:
     - Verify that images load correctly from URLs and local files.
     - Test caption addition, editing, and deletion.
     - Ensure all shapes render properly and can be customized.
     - Confirm that the final canvas can be downloaded as an image.
   - **Edge Cases**:
     - Handle invalid image URLs gracefully.
     - Ensure compatibility across browsers and devices.
   - **Performance Testing**:
     - Check canvas rendering performance with large images.

---

### **7. Deployment Plan**
   - **Hosting Platform**: Use platforms like Vercel or Netlify for deployment.
   - **Build Optimization**:
     - Optimize the React build for production using `react-scripts build`.
     - Ensure image assets are compressed for faster loading.
   - **API Key Management**:
     - Use environment variables to secure any API keys used for image fetching.

---

### **8. Future Enhancements**
   - Add support for:
     - Image cropping and resizing.
     - Filters and basic image editing tools (e.g., brightness, contrast).
     - Multiple font styles for captions.
     - Drag-and-drop interface for image uploads.

---








