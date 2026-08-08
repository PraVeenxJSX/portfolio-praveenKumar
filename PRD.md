# Product Requirements Document (PRD)

## Build Prompt

I already have a React + Vite + javascript portfolio website.  
I want you to implement a premium 3D character hero section with scroll-driven animation, similar in experience to modern interactive developer portfolios.

Important constraints:
- Keep my existing site structure and content.
- Use plain CSS only (no Tailwind, no UI libraries).
- Use Three.js ecosystem for 3D: React Three Fiber and Drei.
- Use GSAP + ScrollTrigger for scroll-based animation sequencing.
- Optimize for smooth performance on desktop and mobile.
- Do not break existing sections.

What to build:
1. Add a full-screen 3D character scene in the landing/hero area.
2. Character behavior:
- Idle animation on load.
- Subtle head/body follow with mouse movement.
- Scroll-driven animation states (for example: idle -> turn/look -> action pose -> return).
- Smooth blend between animation clips.
3. Camera behavior:
- Gentle intro motion on load.
- Scroll-synced camera movement and framing.
- Maintain composition across screen sizes.
4. Page interactions:
- Smooth reveal transitions between sections.
- Scroll-triggered text/content entrance animations coordinated with the 3D scene.
- Optional custom cursor interaction if performance allows.
5. Loading experience:
- Create a loading overlay with progress bar while model/textures/anims load.
- Fade out loader into the hero scene.
6. Responsiveness and fallback:
- On low-end/mobile devices, reduce effects (pixel ratio, shadows, postprocessing).
- If WebGL is unavailable, show a static hero fallback without errors.
7. Performance:
- Use compressed textures where possible.
- Use DRACO/GLTF optimization best practices.
- Avoid unnecessary re-renders and memory leaks.
- Target stable 60fps on mid-range devices.

Implementation requirements:
- First inspect my current project files and reuse existing components/styles where possible.
- Create clean, modular components and utilities for:
  - scene setup
  - lighting
  - animation controller
  - mouse interaction
  - resize handling
  - loading management
- Keep naming consistent with my project.
- Add clear comments only where logic is non-obvious.

Output format I need from you:
1. Exact dependency install commands.
2. Exact file-by-file code changes with complete contents for each changed file.
3. Any new assets/folder structure I must add.
4. Final integration steps to run and test locally.
5. A short performance checklist and troubleshooting notes.

If my current character model is missing animations:
- set up a temporary rigged GLB workflow
- include where to place animation files
- implement logic so replacing with my final model is plug-and-play.

Now start implementation directly in my existing project and provide the changes in a production-ready way.
