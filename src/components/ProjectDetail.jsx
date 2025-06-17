// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { data } from "../data/data";
// import { FaExternalLinkAlt } from "react-icons/fa";

// const ProjectDetail = () => {
//   const { id } = useParams();
//   const project = data.find((p) => p.id === Number(id));

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black text-white">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
//           <Link to="/" className="text-purple-400 underline">Go Back</Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-screen min-h-screen bg-black text-gray-200 flex flex-col items-center justify-start">
//       <h1 className="text-5xl font-bold text-white mt-10 mb-8 text-center w-full">{project.name}</h1>
//       {/* UI Screenshots */}
//       {project.images && project.images.length > 0 && (
//         <div className="w-full flex overflow-x-auto gap-6 px-4 mb-8 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
//           {project.images.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`${project.name} screenshot ${idx + 1}`}
//               className="h-[80vh] max-w-none rounded-2xl object-contain shadow-lg bg-gray-800"
//               style={{ minWidth: '320px' }}
//             />
//           ))}
//         </div>
//       )}
//       {/* fallback for single image */}
//       {(!project.images || project.images.length === 0) && (
//         <img
//           src={project.image}
//           alt={project.name}
//           className="h-[80vh] rounded-2xl object-contain shadow-lg bg-gray-800 mb-8"
//           style={{ minWidth: '320px' }}
//         />
//       )}
//       <div className="w-full max-w-3xl px-4 mx-auto">
//         <p className="text-xl text-gray-300 mb-10 whitespace-pre-line text-center">{project.desc}</p>
//         <div className="flex flex-wrap gap-2 justify-center mb-10">
//           {project.stack.split(', ').map((tech, idx) => (
//             <span key={idx} className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">
//               {tech}
//             </span>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <a
//             href={project.live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-lg"
//           >
//             <FaExternalLinkAlt />
//             Live Demo
//           </a>
//         </div>
//         <div className="text-center mt-8">
//           <Link to="/" className="text-purple-400 underline text-lg">Back to Work</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;
import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../data/data";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = data.find((p) => p.id === Number(id));

  const [fullscreenImg, setFullscreenImg] = React.useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-purple-400 underline">Go Back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-black text-gray-200 flex flex-col items-start justify-start px-0 md:px-10 py-10">
      {/* Fullscreen Image Modal */}
      {fullscreenImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out transition-all duration-200"
          onClick={() => setFullscreenImg(null)}
        >
          <img
            src={fullscreenImg}
            alt="Full Screen Preview"
            className="max-w-screen max-h-screen object-contain rounded-2xl shadow-2xl mx-auto"
          />
        </div>
      )}

      {/* Project Title */}
      <h1 className="text-6xl font-extrabold text-white mt-8 mb-10 md:mb-16 md:text-left text-center w-full tracking-tight leading-tight">
        {project.name}
      </h1>

      {/* Project Overview Section */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-bold text-purple-400 mb-5 md:text-left text-center uppercase tracking-widest">Project Overview</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed md:text-left text-center whitespace-pre-line mb-4">
          {(() => {
            // Bold both 'Weight Loss Workout App' and 'Key Features:' if present
            let desc = project.desc;
            // Replace 'Weight Loss Workout App' with bold span
            desc = desc.replace(
              /Weight Loss Workout App/g,
              '<span class="font-bold text-white">Weight Loss Workout App</span>'
            );
            // Replace 'Key Features:' with bold span
            desc = desc.replace(
              /Key Features:/g,
              '<span class="font-bold text-white">Key Features:</span>'
            );
            // Render as HTML
            return <span dangerouslySetInnerHTML={{ __html: desc }} />;
          })()}
        </p>
      </section>

      {/* UI Screens Section */}
      <section className="w-full mb-16">
        <h2 className="text-3xl font-bold text-purple-400 mb-5 md:text-left text-center uppercase tracking-widest">UI Screens</h2>
        {project.images && project.images.length > 0 ? (
          <div className="flex overflow-x-auto gap-8 pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 w-full">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.name} screenshot ${idx + 1}`}
                className="h-[70vh] rounded-xl object-contain shadow-lg cursor-zoom-in transition-transform hover:scale-105 mx-auto"
                style={{ minWidth: '400px', background: 'transparent', border: 'none' }}
                onClick={() => setFullscreenImg(img)}
              />
            ))}
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.name}
            className="h-[70vh] rounded-xl object-contain shadow-lg mx-auto mb-8 cursor-zoom-in"
            style={{ minWidth: '400px', background: 'transparent', border: 'none' }}
            onClick={() => setFullscreenImg(project.image)}
          />
        )}
      </section>

      {/* Tech Stack Section */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-3xl font-extrabold text-purple-400 mb-5 md:text-left text-center uppercase tracking-widest drop-shadow-lg">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 md:justify-start justify-center">
          {project.stack.split(', ').map((tech, idx) => (
            <span key={idx} className="px-4 py-2 text-base bg-purple-500/20 text-purple-300 rounded-full font-medium">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="w-full max-w-4xl mb-8">
        <h2 className="text-3xl font-extrabold text-purple-400 mb-5 md:text-left text-center uppercase tracking-widest drop-shadow-lg">Live Demo</h2>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-lg md:ml-0 ml-auto"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>
      </section>

      {/* Back Link */}
      <div className="w-full max-w-4xl">
        <Link to="/" className="text-purple-400 underline text-lg">Back to Work</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
