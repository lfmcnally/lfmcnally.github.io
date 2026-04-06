/* ═══════════════════════════════════════════════
   Classicalia — Constellation Theme Injector
   Transforms vocab pages to match the hub design
   ═══════════════════════════════════════════════ */
(function(){

  /* ── 1. Inject constellation canvas ── */
  var canvas = document.createElement('canvas');
  canvas.id = 'constellation-bg';
  document.body.insertBefore(canvas, document.body.firstChild);

  var ctx = canvas.getContext('2d');
  var pts = [], bgPts = [], shooters = [];

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', function(){ resize(); pts=[]; bgPts=[]; initPts(); });

  function initPts(){
    for(var i=0;i<60;i++){
      var spd=Math.random()*0.12+0.02;
      pts.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,
        r:Math.random()*1.4+0.3,vx:(Math.random()-0.5)*spd,vy:(Math.random()-0.5)*spd,
        o:Math.random()*0.4+0.1,pulse:Math.random()*Math.PI*2,ps:Math.random()*0.006+0.002});
    }
    for(var j=0;j<30;j++){
      var spd2=Math.random()*0.03+0.006;
      bgPts.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,
        r:Math.random()*2+0.8,vx:(Math.random()-0.5)*spd2,vy:(Math.random()-0.5)*spd2,
        o:Math.random()*0.08+0.02,pulse:Math.random()*Math.PI*2,ps:Math.random()*0.003+0.001});
    }
  }
  initPts();

  function spawnShooter(){
    var ang=(Math.random()*0.4+0.1)*Math.PI,spd=Math.random()*6+5;
    shooters.push({x:Math.random()*canvas.width*0.7,y:Math.random()*canvas.height*0.3,
      vx:Math.cos(ang)*spd,vy:Math.sin(ang)*spd,
      len:Math.random()*80+40,life:1.0,decay:Math.random()*0.02+0.012});
    setTimeout(spawnShooter,Math.random()*8000+8000);
  }
  setTimeout(spawnShooter,Math.random()*5000+3000);

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    bgPts.forEach(function(p){
      p.pulse+=p.ps;var o=p.o*(0.6+0.4*Math.sin(p.pulse));
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(120,150,220,'+o+')';ctx.fill();
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<-10)p.x=canvas.width+10;if(p.x>canvas.width+10)p.x=-10;
      if(p.y<-10)p.y=canvas.height+10;if(p.y>canvas.height+10)p.y=-10;
    });
    for(var i=0;i<pts.length;i++){
      for(var j=i+1;j<pts.length;j++){
        var dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y;
        var dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<130){
          ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);
          ctx.strokeStyle='rgba(130,170,255,'+(1-dist/130)*0.15+')';
          ctx.lineWidth=0.5;ctx.stroke();
        }
      }
    }
    pts.forEach(function(p){
      p.pulse+=p.ps;var o=p.o*(0.65+0.35*Math.sin(p.pulse));
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(160,190,255,'+o+')';ctx.fill();
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<-10)p.x=canvas.width+10;if(p.x>canvas.width+10)p.x=-10;
      if(p.y<-10)p.y=canvas.height+10;if(p.y>canvas.height+10)p.y=-10;
    });
    for(var s=shooters.length-1;s>=0;s--){
      var sh=shooters[s];
      var spd=Math.sqrt(sh.vx*sh.vx+sh.vy*sh.vy);
      var tx=sh.x-sh.vx*(sh.len/spd),ty=sh.y-sh.vy*(sh.len/spd);
      var grad=ctx.createLinearGradient(tx,ty,sh.x,sh.y);
      grad.addColorStop(0,'rgba(255,255,255,0)');
      grad.addColorStop(1,'rgba(220,235,255,'+(sh.life*0.8)+')');
      ctx.beginPath();ctx.moveTo(tx,ty);ctx.lineTo(sh.x,sh.y);
      ctx.strokeStyle=grad;ctx.lineWidth=1.2;ctx.stroke();
      ctx.beginPath();ctx.arc(sh.x,sh.y,1,0,Math.PI*2);
      ctx.fillStyle='rgba(255,255,255,'+(sh.life*0.9)+')';ctx.fill();
      sh.x+=sh.vx;sh.y+=sh.vy;sh.life-=sh.decay;
      if(sh.life<=0)shooters.splice(s,1);
    }
    requestAnimationFrame(draw);
  }
  draw();

  /* ── 2. Replace header with constellation nav ── */
  var oldHeader = document.querySelector('header');
  if(!oldHeader) return;

  // Extract page title from old header or <title> tag
  var titleEl = oldHeader.querySelector('.header-title, h1, h2');
  var pageTitle = titleEl ? titleEl.textContent.trim() : document.title.replace(' - Classicalia','').replace(' — Classicalia','');

  // Detect subject from path
  var path = window.location.pathname;
  var isGreek = path.indexOf('/greek/') !== -1;
  var subject = isGreek ? 'Greek' : 'Latin';
  var homeHref = oldHeader.querySelector('a[href*="index"]');
  var homePath = homeHref ? homeHref.getAttribute('href') : (isGreek ? '../index.html' : '../index.html');

  // Detect auth paths
  var depth = (path.match(/\//g)||[]).length;
  var authPrefix = depth >= 3 ? '../../' : '../';

  // Build new nav
  var nav = document.createElement('nav');
  nav.className = 'cv-nav';
  nav.innerHTML =
    '<div class="cv-nav-left">' +
      '<a href="' + homePath + '" class="cv-nav-logo">Classicalia</a>' +
      '<div class="cv-nav-sep"></div>' +
      '<div class="cv-nav-crumb">' +
        '<a href="' + homePath + '" class="cv-crumb-link">Home</a>' +
        '<span class="cv-crumb-sep">\u203A</span>' +
        '<span class="cv-crumb-cur">' + pageTitle + '</span>' +
      '</div>' +
    '</div>' +
    '<div class="cv-nav-right">' +
      '<a href="' + authPrefix + 'auth/login.html" class="cv-nav-btn">Log in</a>' +
      '<a href="' + authPrefix + 'auth/register.html" class="cv-nav-btn cv-nav-btn-p">Sign up</a>' +
    '</div>';

  oldHeader.parentNode.replaceChild(nav, oldHeader);

  // Hide old background shapes
  var shapes = document.querySelector('.bg-shapes');
  if(shapes) shapes.style.display = 'none';

})();
