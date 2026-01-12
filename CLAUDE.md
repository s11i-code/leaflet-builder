# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a leaflet creation tool that enables users to design and print folded leaflets. The application displays four editable A4 pages in a 2x2 grid layout. When printed, the pages are arranged to print two pages per physical sheet (front and back), which can then be folded in the middle to create a properly sequenced four-page leaflet. The print order (1, 2, 4, 3) ensures that when the printed sheet is folded, pages appear in the correct reading order.

Built with Next.js 16.1 using the App Router architecture with React 19, TypeScript, and Tailwind CSS v4. The project uses Biome for linting and formatting, and has the React Compiler enabled.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Development server runs at http://localhost:3000 with hot-reload enabled.

### Building
```bash
npm run build
```
Creates an optimized production build.

### Production Server
```bash
npm run start
```
Runs the production build (requires `npm run build` first).

### Linting and Formatting
```bash
npm run lint      # Run Biome linter
npm run format    # Format code with Biome
```

## Application Functionality

### Leaflet Editor
- **Page Layout**: 2x2 grid displaying four A4-sized pages with light gray separators
- **Content Editing**: Each page uses `contentEditable` for in-place text editing
- **State Management**: All page content is managed in lifted state at the root page component
- **Responsive Design**: Single column on mobile, 2x2 grid on desktop

### Print Workflow
- **Print Order**: Pages print in sequence 1, 2, 4, 3 (not the visual 1, 2, 3, 4)
- **Layout**: Two pages per physical sheet (front and back)
- **Folding**: Printed sheets can be folded in half to create a properly ordered leaflet
- **Print Styles**: Custom CSS removes browser margins/headers and enforces A4 dimensions (210mm × 297mm)

### Component Structure
```
src/app/page.tsx - Main page with state management
src/components/
  ├── Header.tsx - App header with title
  ├── PrintButton.tsx - Triggers window.print()
  ├── LeafletGrid.tsx - 2x2 grid layout manager
  └── EditablePage.tsx - Individual editable A4 page
```

## Architecture

### Next.js App Router Structure
- Uses Next.js 16 App Router (`src/app/` directory)
- TypeScript with strict mode enabled
- Path alias: `@/*` maps to `./src/*`

### Key Configuration
- **React Compiler**: Enabled in `next.config.ts` (`reactCompiler: true`)
- **TypeScript**: Target ES2017, strict mode, JSX set to `react-jsx`
- **Biome**:
  - Formatting: 2-space indentation
  - Auto-organize imports on save
  - Next.js and React recommended rules enabled
  - `noUnknownAtRules` disabled for CSS compatibility

### Styling
- Tailwind CSS v4 with PostCSS
- Global styles in `src/app/globals.css`
- Dark mode support built into the base template
- Uses Geist Sans and Geist Mono fonts from Google Fonts

## Important Notes

- The project uses Biome instead of ESLint/Prettier for all linting and formatting
- React Compiler is enabled, which optimizes React components automatically
- TypeScript path aliases are configured (`@/*` for `src/*`)
- All dependencies are pinned to specific versions in package.json
