/* Shared page template - generates consistent HTML structure for topic pages */
/* This file is NOT loaded in the browser - it documents the HTML pattern used by all topic pages */

/*
Every topic page follows this HTML structure:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Page Title] - Late Republic - Classicalia</title>
    <link rel="icon" type="image/png" href="/images/favicon.png">
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto+Mono:ital,wght@0,400;0,500;1,400;1,500&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="bg-shapes">
        <div class="shape shape1"></div>
        <div class="shape shape2"></div>
        <div class="shape shape3"></div>
    </div>
    <button onclick="showInfoModal()" class="global-info-btn">i</button>

    <!-- Site Header -->
    <div class="site-header">
        <div class="header-content">
            <div class="logo"><a href="../../index.html">Classicalia</a></div>
            <div class="author">by Lawrence McNally</div>
            <div class="header-subtitle">Politics of the Late Republic</div>
        </div>
    </div>

    <!-- Topic Nav -->
    <nav class="topic-nav-bar" id="topic-nav"></nav>

    <!-- Page Header -->
    <div class="page-header">
        <div class="page-header-inner">
            <div class="page-eyebrow">POLITICS OF THE LATE REPUBLIC</div>
            <h1 class="page-title">[Title]</h1>
            <div class="page-chips">
                <span class="chip chip-date">[Date range]</span>
                <span class="chip chip-[figure]">[Figure name]</span>
            </div>
            <p class="page-key-question">[Key question in italic]</p>
            <div class="page-tabs">
                <button class="page-tab active" data-tab="overview">Overview</button>
                <button class="page-tab" data-tab="events">Events</button>
                <button class="page-tab" data-tab="sources">Sources</button>
                <button class="page-tab" data-tab="exam">Exam</button>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <div id="tab-overview" class="tab-content active">
            <div class="context-card">...</div>
            <div class="cards-grid" id="overview-cards"></div>
        </div>
        <div id="tab-events" class="tab-content">
            <div class="events-list" id="events-list"></div>
        </div>
        <div id="tab-sources" class="tab-content">
            <div id="sources-list"></div>
        </div>
        <div id="tab-exam" class="tab-content">
            <div id="exam-list"></div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" id="modal-overlay">
        <div class="modal">
            <div class="modal-accent"></div>
            <div class="modal-header">
                <button class="modal-close" onclick="closeModal()">✕</button>
                <div class="modal-title"></div>
                <div class="modal-date"></div>
            </div>
            <div class="modal-body"></div>
        </div>
    </div>

    <!-- Info Modal -->
    <div class="info-modal-overlay" id="info-modal" onclick="if(event.target===this)closeInfoModal()">
        <div class="info-modal">
            <button class="modal-close" onclick="closeInfoModal()">✕</button>
            <h3>About Classicalia</h3>
            <p>Thank you for checking out Classicalia! I'm Lawrence and I teach Latin and Classics in Bristol.</p>
            <p>I have a BA in Ancient History from King's College London, a PGCE in Latin with Classics from the University of Cambridge and an MEd (Transforming Practice) from Darwin College, Cambridge.</p>
            <p>If you have any feedback, thoughts or questions, please don't hesitate to get in touch!</p>
            <div class="contact-links">
                <a href="https://twitter.com/lfmcnally" target="_blank" rel="noopener">@lfmcnally on Twitter</a>
                <a href="https://www.tiktok.com/@classicalcivilisation" target="_blank" rel="noopener">@classicalcivilisation on TikTok</a>
                <a href="https://buymeacoffee.com/lfmcnally" target="_blank" rel="noopener">Buy me a coffee</a>
            </div>
        </div>
    </div>

    <script src="hub.js"></script>
    <script src="data/[slug]-data.js"></script>
    <script>renderPage();</script>
</body>
</html>
*/
