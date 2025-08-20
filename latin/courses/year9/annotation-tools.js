// Annotation Tool for Classicalia Lessons
// Save this as: latin/courses/year9/annotation-tool.js

class AnnotationTool {
    constructor() {
        this.isActive = false;
        this.currentTool = 'highlighter';
        this.currentColor = '#ffeb3b'; // Yellow default
        this.annotations = [];
        this.isDrawing = false;
        this.canvas = null;
        this.ctx = null;
        this.startX = 0;
        this.startY = 0;
        
        this.colors = {
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
                <button class="tool-btn active" data-tool="highlighter" title="Highlighter">
                    <span class="tool-icon">🖍️</span>
                </button>
                <button class="tool-btn" data-tool="pen" title="Pen">
                    <span class="tool-icon">✏️</span>
                </button>
                <button class="tool-btn" data-tool="eraser" title="Eraser">
                    <span class="tool-icon">🧽</span>
                </button>
                
                <div class="tool-divider"></div>
                
                <div class="color-palette">
                    <button class="color-btn active" data-color="yellow" style="background: #ffeb3b" title="Yellow"></button>
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
                <button class="action-btn" id="closeAnnotations" title="Close">
                    <span class="tool-icon">❌</span>
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
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = document.documentElement.scrollHeight;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = document.documentElement.scrollHeight + 'px';
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
            
            if (e.target.closest('#closeAnnotations')) {
                this.toggle();
            }
        });

        // Canvas drawing events
        document.addEventListener('mousedown', (e) => this.startDrawing(e));
        document.addEventListener('mousemove', (e) => this.draw(e));
        document.addEventListener('mouseup', () => this.stopDrawing());
        
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
        const toolbar = document.getElementById('annotationToolbar');
        const canvas = document.getElementById('annotationCanvas');
        
        if (this.isActive) {
            toolbar.classList.remove('hidden');
            canvas.classList.remove('hidden');
            document.body.style.cursor = this.getCursor();
            this.resizeCanvas();
            console.log('Annotation mode activated');
        } else {
            toolbar.classList.add('hidden');
            canvas.classList.add('hidden');
            document.body.style.cursor = 'auto';
            console.log('Annotation mode deactivated');
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
        if (!this.isActive || e.target.closest('.annotation-toolbar')) return;
        
        this.isDrawing = true;
        const rect = this.canvas.getBoundingClientRect();
        this.startX = e.clientX - rect.left + window.scrollX;
        this.startY = e.clientY - rect.top + window.scrollY;
        
        this.ctx.beginPath();
        this.setupBrush();
    }

    draw(e) {
        if (!this.isDrawing || !this.isActive) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const currentX = e.clientX - rect.left + window.scrollX;
        const currentY = e.clientY - rect.top + window.scrollY;
        
        this.ctx.lineTo(currentX, currentY);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(currentX, currentY);
    }

    stopDrawing() {
        if (!this.isDrawing) return;
        this.isDrawing = false;
        this.ctx.beginPath();
    }

    setupBrush() {
        switch (this.currentTool) {
            case 'highlighter':
                this.ctx.globalCompositeOperation = 'multiply';
                this.ctx.strokeStyle = this.currentColor;
                this.ctx.lineWidth = 20;
                this.ctx.lineCap = 'round';
                this.ctx.globalAlpha = 0.5;
                break;
                
            case 'pen':
                this.ctx.globalCompositeOperation = 'source-over';
                this.ctx.strokeStyle = this.currentColor;
                this.ctx.lineWidth = 3;
                this.ctx.lineCap = 'round';
                this.ctx.globalAlpha = 1;
                break;
                
            case 'eraser':
                this.ctx.globalCompositeOperation = 'destination-out';
                this.ctx.lineWidth = 25;
                this.ctx.lineCap = 'round';
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
