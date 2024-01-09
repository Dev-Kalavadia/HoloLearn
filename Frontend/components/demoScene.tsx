// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// // import JSZip from 'jszip';

// import { OrbitControls } from '@react-three/drei';

// interface DemoSceneProps {
//     modelUrl: string;
// }

// const Model: React.FC<{ modelUrl: string }> = ({ modelUrl }) => {
//     let content;
//     const fileExtension = modelUrl.split('.').pop()?.toLowerCase();

//     console.log('fileExtension', fileExtension);

//     switch (fileExtension) {
//         case 'gltf':
//         case 'glb':
//             content = useLoader(GLTFLoader, modelUrl);
//             break;
//         case 'fbx':
//             content = useLoader(FBXLoader, modelUrl);
//             break;
//         // Add more cases for other supported file types
//         // case 'zip':
//         //     content = useLoader(GLTFLoader, modelUrl);
//         //     const zip = new JSZip();
//         //     const zipFile = await zip.loadAsync(modelUrl);
//         //     const gltf = await zipFile.file('model.gltf').async('string');
//         //     content = useLoader(GLTFLoader, gltf);
//         //     break;
//         default:
//             console.error('Unsupported file type:', fileExtension);
//             return null;
//     }

//     return content ? <primitive object={content.scene} dispose={null} /> : null;
// };

// const DemoScene: React.FC<DemoSceneProps> = ({ modelUrl }) => {
//     return (
//         <div style={{ height: '500px', width: '100%' }}>
//             <h1>Model Viewer</h1>

//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//                 <ambientLight intensity={0.5} />
//                 <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//                 <pointLight position={[-10, -10, -10]} />
//                 <Suspense fallback={null}>
//                     <Model modelUrl={modelUrl} />
//                 </Suspense>
//                 <OrbitControls />
//             </Canvas>
//         </div>
//     );
// };

// export default DemoScene;
