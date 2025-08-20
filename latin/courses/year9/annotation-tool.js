// Annotation Tool for Classicalia Lessons
// Save this as: latin/courses/year9/annotation-tool.js

class AnnotationTool {
    constructor() {
        this.isActive = false;
        this.toolbarVisible = false;
        this.currentTool = 'pointer';
        this.currentColor = '#333333'; // Black default
        this.annotations = [];
        this.isDrawing = false;
        this.canvas = null;
        this.ctx = null;
        this.startX = 0;
        this.startY = 0;
        this.lastX = 0;
        this.lastY = 0;
        
        this.colors = {
            black: '#333333',
            yellow: '#ffeb3b',
            green: '#4caf50',
            blue: '#2196f3',
            red: '#f44336',
            orange: '#ff9800',
            purple: '#9c27b0'
        };
        
        this.init();
    }

    init() {
        this.createToolbar();
        this.createCanvas();
        this.bindEvents();
        console.log('Annotation tool initialized');
    }

    createToolbar() {
        const toolbar = document.createElement('div');
        toolbar.id = 'annotationToolbar';
        toolbar.className = 'annotation-toolbar hidden';
        toolbar.innerHTML = `
            <div class="annotation-tools">
                <button class="tool-btn active" data-tool="pointer" title="Pointer (Normal Interaction)">
                    <span class="tool-icon">👆</span>
                </button>
                <button class="tool-btn" data-tool="pen" title="Pen">
                    <span class="tool-icon">✏️</span>
                </button>
                <button class="tool-btn" data-tool="eraser" title="Eraser">
                    <span class="tool-icon">🧽</span>
                </button>
                
                <div class="tool-divider"></div>
                
                <div class="color-palette">
                    <button class="color-btn active" data-color="black" style="background: #333333" title="Black"></button>
                    <button class="color-btn" data-color="yellow" style="background: #ffeb3b" title="Yellow"></button>
                    <button class="color-btn" data-color="green" style="background: #4caf50" title="Green"></button>
                    <button class="color-btn" data-color="blue" style="background: #2196f3" title="Blue"></button>
                    <button class="color-btn" data-color="red" style="background: #f44336" title="Red"></button>
                    <button class="color-btn" data-color="orange" style="background: #ff9800" title="Orange"></button>
                    <button class="color-btn" data-color="purple" style="background: #9c27b0" title="Purple"></button>
                </div>
                
                <div class="tool-divider"></div>
                
                <button class="action-btn" id="clearAll" title="Clear All">
                    <span class="tool-icon">🗑️</span>
                </button>
                <button class="action-btn" id="hideToolbar" title="Hide Toolbar">
                    <span class="tool-icon">👁️</span>
                </button>
            </div>
        `;
        
        document.body.appendChild(toolbar);
    }

    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = 'annotationCanvas';
        canvas.className = 'annotation-canvas hidden';
        document.body.appendChild(canvas);
        
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        this.resizeCanvas();
        
        // Resize canvas when window resizes
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        if (!this.canvas) return;
        
        // Set actual canvas size for high DPI displays
        const dpr = window.devicePixelRatio || 1;
        const rect = { width: window.innerWidth, height: document.documentElement.scrollHeight };
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        // Scale the drawing context so everything draws at the correct size
        this.ctx.scale(dpr, dpr);
    }

    bindEvents() {
        // Tool selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.tool-btn')) {
                const btn = e.target.closest('.tool-btn');
                const tool = btn.dataset.tool;
                this.selectTool(tool);
            }
            
            if (e.target.closest('.color-btn')) {
                const btn = e.target.closest('.color-btn');
                const color = btn.dataset.color;
                this.selectColor(color);
            }
            
            if (e.target.closest('#clearAll')) {
                this.clearAll();
            }
            
            if (e.target.closest('#hideToolbar')) {
                this.hideToolbar();
            }
        });

        // Canvas drawing events
        document.addEventListener('mousedown', (e) => this.startDrawing(e));
        document.addEventListener('mousemove', (e) => this.draw(e));
        document.addEventListener('mouseup', () => this.stopDrawing());
        
        // Prevent context menu when right-clicking during drawing
        document.addEventListener('contextmenu', (e) => {
            if (this.isDrawing || (this.toolbarVisible && this.currentTool !== 'pointer')) {
                e.preventDefault();
            }
        });
        
        // Prevent text selection during drawing
        document.addEventListener('selectstart', (e) => {
            if (this.isDrawing || (this.toolbarVisible && this.currentTool !== 'pointer')) {
                e.preventDefault();
            }
        });
        
        // Keyboard shortcut (A key to toggle)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'a' || e.key === 'A') {
                if (!e.target.matches('input, textarea')) {
                    e.preventDefault();
                    this.toggle();
                }
            }
            
            // Escape to close
            if (e.key === 'Escape' && this.isActive) {
                this.toggle();
            }
        });
    }

    toggle() {
        this.isActive = !this.isActive;
        this.toolbarVisible = this.isActive;
        const toolbar = document.getElementById('annotationToolbar');
        const canvas = document.getElementById('annotationCanvas');
        
        if (this.isActive) {
            toolbar.classList.remove('hidden');
            canvas.classList.remove('hidden');
            // Set initial tool state
            document.body.setAttribute('data-annotation-tool', this.currentTool);
            this.updateCursor();
            this.resizeCanvas();
            console.log('Annotation mode activated');
        } else {
            // Only hide toolbar, keep canvas visible
            toolbar.classList.add('hidden');
            this.toolbarVisible = false;
            // Remove tool state - allows all clicks through
            document.body.removeAttribute('data-annotation-tool');
            // Canvas stays visible with annotations
            document.body.style.cursor = 'auto';
            console.log('Toolbar hidden, annotations remain visible');
        }
    }

    hideToolbar() {
        const toolbar = document.getElementById('annotationToolbar');
        toolbar.classList.add('hidden');
        this.toolbarVisible = false;
        this.currentTool = 'pointer';
        // Remove tool state to allow clicks through
        document.body.setAttribute('data-annotation-tool', 'pointer');
        document.body.style.cursor = 'auto';
        console.log('Toolbar hidden, switched to pointer mode');
    }

    showToolbar() {
        if (this.isActive || document.getElementById('annotationCanvas').classList.contains('hidden') === false) {
            const toolbar = document.getElementById('annotationToolbar');
            toolbar.classList.remove('hidden');
            this.toolbarVisible = true;
            // Restore tool state
            document.body.setAttribute('data-annotation-tool', this.currentTool);
            this.updateCursor();
            console.log('Toolbar shown');
        }
    }

    selectTool(tool) {
        this.currentTool = tool;
        
        // Update active button
        document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-tool="${tool}"]`).classList.add('active');
        
        // Update cursor
        if (this.isActive) {
            document.body.style.cursor = this.getCursor();
        }
        
        console.log('Selected tool:', tool);
    }

    selectColor(color) {
        this.currentColor = this.colors[color];
        
        // Update active button
        document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-color="${color}"]`).classList.add('active');
        
        console.log('Selected color:', color);
    }

    getCursor() {
        switch (this.currentTool) {
            case 'highlighter': return 'crosshair';
            case 'pen': return 'crosshair';
            case 'eraser': return 'crosshair';
            default: return 'auto';
        }
    }

    startDrawing(e) {
        if (!this.toolbarVisible || e.target.closest('.annotation-toolbar')) return;
        if (this.currentTool === 'pointer') return; // Don't draw in pointer mode
        
        this.isDrawing = true;
        this.startX = e.clientX;
        this.startY = e.clientY + window.scrollY;
        this.lastX = this.startX;
        this.lastY = this.startY;
        
        this.setupBrush();
        this.ctx.beginPath();
        this.ctx.moveTo(this.startX, this.startY);
    }

    draw(e) {
        if (!this.isDrawing || !this.toolbarVisible) return;
        if (this.currentTool === 'pointer') return; // Don't draw in pointer mode
        
        const currentX = e.clientX;
        const currentY = e.clientY + window.scrollY;
        
        this.ctx.lineTo(currentX, currentY);
        this.ctx.stroke();
        
        this.lastX = currentX;
        this.lastY = currentY;
    }

    stopDrawing() {
        if (!this.isDrawing) return;
        this.isDrawing = false;
        this.ctx.beginPath();
    }

    setupBrush() {
        switch (this.currentTool) {
            case 'pen':
                this.ctx.globalCompositeOperation = 'source-over';
                this.ctx.strokeStyle = this.currentColor;
                this.ctx.lineWidth = 3;
                this.ctx.lineCap = 'round';
                this.ctx.lineJoin = 'round';
                this.ctx.globalAlpha = 1;
                // Enable smooth scaling
                this.ctx.imageSmoothingEnabled = true;
                this.ctx.imageSmoothingQuality = 'high';
                break;
                
            case 'eraser':
                this.ctx.globalCompositeOperation = 'destination-out';
                this.ctx.lineWidth = 25;
                this.ctx.lineCap = 'round';
                this.ctx.lineJoin = 'round';
                this.ctx.globalAlpha = 1;
                break;
        }
    }

    clearAll() {
        if (confirm('Clear all annotations?')) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            console.log('All annotations cleared');
        }
    }
}

// Auto-initialize when DOM is ready
let annotationTool;

function initAnnotationTool() {
    annotationTool = new AnnotationTool();
    console.log('Annotation tool ready - Press "A" to toggle');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnnotationTool);
} else {
    initAnnotationTool();
}
