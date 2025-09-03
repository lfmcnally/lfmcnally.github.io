/* FILE 3: style.css - Complete file with exercise styles */

/* Lesson 1-1 Specific Styles: Introduction to Ancient Religion */

/* Comparison Section */
.comparison-section {
    margin-bottom: 2rem;
}

.comparison-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.comparison-card {
    background: white;
    border: 2px solid rgba(0, 102, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.comparison-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 102, 255, 0.15);
    border-color: #0066ff;
}

.comparison-card.active {
    border-color: #0066ff;
    background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
    box-shadow: 0 6px 20px rgba(0, 102, 255, 0.2);
}

.comparison-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #0066ff;
    margin-bottom: 1rem;
    text-align: center;
}

.comparison-features {
    list-style: none;
    padding: 0;
}

.comparison-features li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding-left: 1.5rem;
}

.comparison-features li:before {
    content: "•";
    position: absolute;
    left: 0;
    font-size: 1.2rem;
    color: #0066ff;
}

/* Transaction Flow */
.transaction-section {
    background: #f8f9fa;
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 2rem;
}

.transaction-flow {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0;
}

.transaction-step {
    background: white;
    border: 2px solid rgba(0, 102, 255, 0.1);
    padding: 1.5rem;
    border-radius: 12px;
    flex: 1;
    margin: 0 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
}

.transaction-step:hover {
    transform: translateY(-3px);
    border-color: #0066ff;
    box-shadow: 0 6px 16px rgba(0, 102, 255, 0.2);
}

.transaction-step.active {
    border-color: #0066ff;
    background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
}

.transaction-step h4 {
    margin-top: 0;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #0066ff;
}

.transaction-step p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
}

.arrow {
    font-size: 2rem;
    color: #0066ff;
}

/* Terms Grid */
.terms-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin: 1.5rem 0;
}

.term-card {
    background: linear-gradient(135deg, #f0f7ff 0%, #e1f0ff 100%);
    border-left: 4px solid #0066ff;
    padding: 1.5rem;
    border-radius: 0 12px 12px 0;
    transition: all 0.3s ease;
}

.term-card:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 102, 255, 0.15);
}

.term-card h4 {
    color: #0066ff;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.term-card p {
    color: #555;
    line-height: 1.6;
}

/* Differences Grid */
.differences-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 1.5rem 0;
}

.difference-card {
    background: white;
    border: 2px solid rgba(0, 102, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
}

.difference-card:hover {
    border-color: #0066ff;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 102, 255, 0.2);
}

.difference-card.active {
    border-color: #0066ff;
    background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
}

.difference-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
}

.difference-subtitle {
    color: #666;
    font-size: 0.85rem;
    font-style: italic;
}

/* Detail Box */
.detail-box {
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    border: 1px solid rgba(0, 102, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    margin-top: 1.5rem;
    animation: fadeIn 0.3s ease;
}

.detail-box h4 {
    color: #0066ff;
    margin-bottom: 1rem;
}

.detail-box p {
    color: #555;
    line-height: 1.7;
    margin-bottom: 1rem;
}

.detail-box ul {
    margin-left: 1.5rem;
    color: #555;
}

.detail-box li {
    margin-bottom: 0.5rem;
}

/* Interactive Text Elements */
.key-term {
    background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
    border: 1px solid #ffc107;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 600;
    color: #856404;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-block;
}

.key-term:hover {
    background: linear-gradient(135deg, #ffeaa7 0%, #ffd93d 100%);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(255, 193, 7, 0.3);
}

.key-figure {
    background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
    border: 1px solid #17a2b8;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 600;
    color: #0c5460;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-block;
}

.key-figure:hover {
    background: linear-gradient(135deg, #bee5eb 0%, #9dd7e5 100%);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(23, 162, 184, 0.3);
}

.key-concept {
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    border: 1px solid #28a745;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 600;
    color: #155724;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-block;
}

.key-concept:hover {
    background: linear-gradient(135deg, #c3e6cb 0%, #a8dab5 100%);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(40, 167, 69, 0.3);
}

/* Primary Source Quote */
.primary-source {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-left: 4px solid #6c757d;
    padding: 1.5rem;
    margin: 1.5rem 0;
    font-style: italic;
    border-radius: 0 12px 12px 0;
    position: relative;
}

.primary-source::before {
    content: '"';
    font-size: 4rem;
    color: #6c757d;
    position: absolute;
    top: -10px;
    left: 10px;
    opacity: 0.3;
}

.source-citation {
    font-size: 0.85rem;
    color: #6c757d;
    margin-top: 1rem;
    font-weight: 600;
    font-style: normal;
}

/* Sample elements in sidebar */
.sample-term {
    background: #fff3cd;
    padding: 2px 4px;
    border-radius: 3px;
    font-weight: 600;
    color: #856404;
}

.sample-figure {
    background: #d1ecf1;
    padding: 2px 4px;
    border-radius: 3px;
    font-weight: 600;
    color: #0c5460;
}

.sample-concept {
    background: #d4edda;
    padding: 2px 4px;
    border-radius: 3px;
    font-weight: 600;
    color: #155724;
}

/* Info Panel Content */
#info-content {
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    margin-top: 1rem;
}

#info-content h4 {
    color: #0066ff;
    margin-bottom: 0.5rem;
}

#info-content p {
    color: #555;
    line-height: 1.5;
    margin-bottom: 0.5rem;
}

/* Exercise Styles */
.exercise-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    margin: 2rem 0;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
    transition: all 0.3s ease;
}

.exercise-container:hover {
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
    transform: translateY(-2px);
}

/* Exercise Header */
.exercise-header {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    cursor: pointer;
    user-select: none;
    transition: background 0.3s ease;
}

.exercise-header:hover {
    background: rgba(255, 255, 255, 0.1);
}

.exercise-icon {
    font-size: 1rem;
    color: white;
    margin-right: 1rem;
    transition: transform 0.3s ease;
    display: inline-block;
}

.exercise-title {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    flex-grow: 1;
}

.exercise-badge {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}

/* Exercise Content */
.exercise-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(255, 255, 255, 0.95);
}

.exercise-content.open {
    max-height: 3000px;
}

.exercise-instructions {
    padding: 1.5rem;
    background: rgba(102, 126, 234, 0.1);
    border-bottom: 1px solid rgba(102, 126, 234, 0.2);
    color: #4a5568;
    font-style: italic;
}

/* Questions */
.question-item {
    padding: 1.5rem;
    border-bottom: 1px solid rgba(102, 126, 234, 0.1);
    transition: background 0.3s ease;
}

.question-item:hover {
    background: rgba(102, 126, 234, 0.03);
}

.question-item:last-of-type {
    border-bottom: none;
}

.question-number {
    font-weight: 600;
    color: #667eea;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.question-text {
    color: #2d3748;
    line-height: 1.7;
    margin-bottom: 1rem;
    white-space: pre-wrap;
}

/* Answer Space */
.answer-space {
    margin-top: 1rem;
}

.answer-space textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid rgba(102, 126, 234, 0.2);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    line-height: 1.6;
    resize: vertical;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    background: white;
}

.answer-space textarea:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.answer-space textarea::placeholder {
    color: #a0aec0;
    font-style: italic;
}

/* Exercise Actions */
.exercise-actions {
    padding: 1.5rem;
    background: rgba(102, 126, 234, 0.05);
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

.check-answers-btn,
.save-progress-btn {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.check-answers-btn {
    background: #667eea;
    color: white;
}

.check-answers-
