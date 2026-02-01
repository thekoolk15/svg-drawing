/**
 * SVG Drawing Canvas
 * Interactive drawing using SVG polylines with mouse/touch events
 */

// DOM Elements
const svg = document.getElementById('drawingCanvas');
const clearBtn = document.getElementById('clearBtn');
const colorPicker = document.getElementById('colorPicker');
const strokeWidthSlider = document.getElementById('strokeWidth');
const strokeValueDisplay = document.getElementById('strokeValue');

// Drawing State
let isDrawing = false;
let currentPolyline = null;
let points = [];

/**
 * Get SVG coordinates from mouse/touch event
 * Converts client coordinates to SVG coordinate space
 */
function getSVGCoordinates(event) {
    const rect = svg.getBoundingClientRect();
    
    // Handle both mouse and touch events
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    
    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
}

/**
 * Start drawing when mouse/touch is pressed
 */
function startDrawing(event) {
    event.preventDefault();
    isDrawing = true;
    svg.classList.add('drawing');
    
    // Get starting coordinates
    const coords = getSVGCoordinates(event);
    points = [`${coords.x},${coords.y}`];
    
    // Create a new polyline element
    currentPolyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    currentPolyline.setAttribute('fill', 'none');
    currentPolyline.setAttribute('stroke', colorPicker.value);
    currentPolyline.setAttribute('stroke-width', strokeWidthSlider.value);
    currentPolyline.setAttribute('stroke-linecap', 'round');
    currentPolyline.setAttribute('stroke-linejoin', 'round');
    currentPolyline.setAttribute('points', points.join(' '));
    
    svg.appendChild(currentPolyline);
}

/**
 * Continue drawing as mouse/touch moves
 */
function draw(event) {
    if (!isDrawing || !currentPolyline) return;
    
    event.preventDefault();
    
    // Get current coordinates
    const coords = getSVGCoordinates(event);
    points.push(`${coords.x},${coords.y}`);
    
    // Update polyline points
    currentPolyline.setAttribute('points', points.join(' '));
}

/**
 * Stop drawing when mouse/touch is released
 */
function stopDrawing(event) {
    if (!isDrawing) return;
    
    isDrawing = false;
    svg.classList.remove('drawing');
    currentPolyline = null;
    points = [];
}

/**
 * Clear all drawings from the canvas
 */
function clearCanvas() {
    // Add a nice animation before clearing
    const polylines = svg.querySelectorAll('polyline');
    
    if (polylines.length === 0) return;
    
    // Fade out animation
    polylines.forEach((polyline, index) => {
        polyline.style.transition = 'opacity 0.3s ease-out';
        polyline.style.opacity = '0';
    });
    
    // Remove after animation
    setTimeout(() => {
        svg.innerHTML = '';
    }, 300);
}

/**
 * Update stroke width display
 */
function updateStrokeDisplay() {
    strokeValueDisplay.textContent = `${strokeWidthSlider.value}px`;
}

// ========================================
// Event Listeners
// ========================================

// Mouse Events
svg.addEventListener('mousedown', startDrawing);
svg.addEventListener('mousemove', draw);
svg.addEventListener('mouseup', stopDrawing);
svg.addEventListener('mouseleave', stopDrawing);

// Touch Events for mobile support
svg.addEventListener('touchstart', startDrawing, { passive: false });
svg.addEventListener('touchmove', draw, { passive: false });
svg.addEventListener('touchend', stopDrawing);
svg.addEventListener('touchcancel', stopDrawing);

// Button Events
clearBtn.addEventListener('click', clearCanvas);

// Slider Events
strokeWidthSlider.addEventListener('input', updateStrokeDisplay);

// Initialize
updateStrokeDisplay();

// Prevent context menu on canvas (for better drawing experience)
svg.addEventListener('contextmenu', (e) => e.preventDefault());

console.log('🎨 SVG Drawing Canvas initialized!');
