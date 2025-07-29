# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.0] - 2024-12-19

### Added
- **Mobile Navigation Sidebar**: Replaced dropdown menu with a full-height sidebar that slides in from the right
- **Enhanced Mobile Responsiveness**: Improved responsive design across all screen sizes
- **Better Touch Interactions**: Optimized tap targets and spacing for mobile devices
- **Accessibility Improvements**: Added proper ARIA attributes and keyboard navigation support
- **Body Scroll Lock**: Prevents background scrolling when mobile menu is open

### Changed
- **Mobile Menu UX**: Converted from dropdown to sidebar navigation for better mobile experience
- **Responsive Typography**: Adjusted font sizes and spacing for better readability on mobile
- **Button Layout**: Made buttons full-width on mobile and auto-width on larger screens
- **Grid Layouts**: Improved responsive grid breakpoints (1 column mobile, 2 tablet, 3 desktop)

### Fixed
- **Mobile Navigation**: Fixed non-functional mobile menu button
- **Event Handling**: Resolved inconsistent event handling syntax
- **CSS Warnings**: Removed unused CSS selectors and fixed accessibility warnings
- **Touch Targets**: Ensured all interactive elements are properly sized for mobile

### Technical
- **Svelte 5**: Updated to use latest Svelte 5 syntax and features
- **State Management**: Improved state handling for mobile menu toggle
- **Animation**: Added smooth slide-in animation for mobile sidebar
- **Performance**: Optimized mobile menu rendering and interactions

## [0.0.1] - Initial Release

### Added
- Initial project setup with SvelteKit
- Basic marketing website structure
- Responsive design foundation
- Navigation and routing
- Content sections (hero, features, testimonials, etc.) 