# Frontend Assignment - Financial Market Interface

This project was created as part of a frontend development assignment to demonstrate React and modern CSS skills by implementing a financial market data interface.

## Assignment Overview

The task was to create a responsive web interface that displays financial market data with the following requirements:

1. Create a market data display interface using React
2. Implement responsive design principles
3. Match the provided design specifications exactly
4. Use modern CSS features for styling
5. Create reusable React components

## Project Structure

```
src/
  ├── components/
  │   ├── BottomNav/      # Bottom navigation with quotes, deals, etc.
  │   ├── Container/      # Main container wrapper
  │   ├── Header/         # App header with actions
  │   ├── ScriptSelector/ # Toggle switches for Pro/One Click Trade
  │   └── ScriptTable/    # Market data display table
  ├── App.jsx            # Main application component
  └── main.jsx          # Application entry point
```

## Technology Stack

- React
- Vite
- CSS3 with Modern Features
- SVG Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Implementation Details

### Components Created

- `Header` - Top navigation with menu and action buttons
- `ScriptSelector` - Toggle switches for Pro View and One Click Trade
- `ScriptTable` - Market data display with price information
- `BottomNav` - Bottom navigation bar with different sections
- `Container` - Layout wrapper component

### Technologies Used

- React + Vite
- Modern CSS features
- SVG icons for UI elements
- Responsive design principles

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
