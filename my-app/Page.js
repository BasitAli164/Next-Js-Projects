import React from 'react';

const ExampleComponent = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Example Component</h2>

      {/* 1. Backdrop Filters (e.g., blur) */}
      <div className="backdrop-blur-sm bg-white/30 p-4 rounded-lg mb-4">
        This text has a backdrop blur effect.  The background behind it is blurred.
      </div>

      {/* 2. `aspect-ratio` utility (for maintaining aspect ratios) */}
      <div className="aspect-video mb-4"> {/* Maintains 16:9 aspect ratio */}
        <iframe
          title="Example Video"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example URL
          className="w-full h-full"  // Important for aspect-ratio to work
          allowFullScreen
        ></iframe>
      </div>

      {/* 3. `line-clamp` (truncating text to a certain number of lines) */}
      <div className="line-clamp-3 text-gray-700 mb-4">
        This is some long text that will be truncated to three lines.  Any overflow beyond three lines will be hidden with an ellipsis (...).  This is very useful for displaying summaries or previews of longer content.
      </div>

      {/* 4. `decoration-*` utilities (underline, overline, line-through) */}
      <p className="decoration-clone underline decoration-sky-500 mb-4">
        This text has an underline with a sky-blue color.
      </p>

       <p className="decoration-wavy line-through decoration-red-500 mb-4">
        This text has a wavy line-through with a red color.
      </p>

      {/* 5. `will-change` (for performance optimization - use with caution) */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded will-change-transform transition-transform duration-200 hover:scale-105"
      >
        Button (will-change example)
      </button>
      <p className="text-sm mt-2">The `will-change-transform` utility hints to the browser that the transform property will be animated, which can improve performance in some cases. However, overuse can be detrimental, so use with care.</p>



      {/* 6. `peer-*` utilities (for styling based on sibling element state) */}
      <div className="relative">
        <input type="checkbox" id="myCheckbox" className="peer" />
        <div className="hidden peer-checked:block text-green-500">
          This content is only visible when the checkbox is checked.
        </div>
      </div>

    </div>
  );
};

export default ExampleComponent;