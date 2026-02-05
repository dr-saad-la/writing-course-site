(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=c(e);fetch(e.href,i)}})();const n=()=>`
  <header class="header">
    <div class="container">
      <div class="header-content">
        <h1 class="logo">Scientific Writing Using LaTeX</h1>
        <nav class="nav">
          <ul class="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#curriculum">Curriculum</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
`,l=()=>`
  <section class="hero" id="home">
    <div class="container">
      <div class="hero-content">
        <h2 class="hero-title">Master Scientific Writing Using LaTeX</h2>
        <p class="hero-subtitle">Complete guide to research paper writing and professional LaTeX documentation</p>
        <p class="hero-author">By Dr. Saad Laouadi</p>
        <div class="hero-cta">
          <a href="#pricing" class="btn btn-primary">View Pricing</a>
        </div>
      </div>
    </div>
  </section>
`,o=()=>`
  <section class="about" id="about">
    <div class="container">
      <h2 class="section-title">About This Course</h2>
      <div class="about-content">
        <p>This comprehensive course teaches you how to write high-quality research papers and academic documents using LaTeX. Learn both the art of academic writing and the technical skills needed to produce professional publications.</p>
        <p>Perfect for researchers, graduate students, and academics who want to master scientific paper writing while leveraging the power of LaTeX for creating publication-ready documents.</p>
      </div>
    </div>
  </section>
`,u=()=>`
  <section class="curriculum" id="curriculum">
    <div class="container">
      <h2 class="section-title">Course Curriculum</h2>
      <div class="curriculum-grid">
        <!-- Module 1: Article Structure -->
        <div class="curriculum-item">
          <h3 class="curriculum-number">Module 1</h3>
          <h4 class="curriculum-title">Article Structure</h4>
          <p class="curriculum-description">Understanding IMRAD structure, choosing article types, journal formatting requirements, and article flow logic.</p>
        </div>
        
        <!-- Module 2: Title and Authors -->
        <div class="curriculum-item">
          <h3 class="curriculum-number">Module 2</h3>
          <h4 class="curriculum-title">Title & Authors</h4>
          <p class="curriculum-description">Crafting effective titles, LaTeX formatting for titles, managing author affiliations, and ORCID integration.</p>
        </div>
        
        <!-- Module 3: Abstract -->
        <div class="curriculum-item">
          <h3 class="curriculum-number">Module 3</h3>
          <h4 class="curriculum-title">Abstract Writing</h4>
          <p class="curriculum-description">Abstract structure, writing each IMRAD component, keyword selection, and avoiding common mistakes.</p>
        </div>
        
        <!-- Module 4: Introduction -->
        <div class="curriculum-item">
          <h3 class="curriculum-number">Module 4</h3>
          <h4 class="curriculum-title">Introduction Section</h4>
          <p class="curriculum-description">Funnel structure, literature context and citations, identifying research gaps, and formulating hypotheses.</p>
        </div>
        
        <!-- Module 5: Literature Review -->
        <div class="curriculum-item">
          <h3 class="curriculum-number">Module 5</h3>
          <h4 class="curriculum-title">Literature Review</h4>
          <p class="curriculum-description">Organizing literature by themes, synthesizing sources, citation styles with BibLaTeX, and reference management tools.</p>
        </div>
        
        <!-- Module 6: Methods -->
        <div class="curriculum-item">
          <h3 class="curriculum-number">Module 6</h3>
          <h4 class="curriculum-title">Methods Section</h4>
          <p class="curriculum-description">Methods structure, materials and procedures, statistical analysis, computational methods, and reproducibility standards.</p>
        </div>
        
        <!-- Module 7: Results -->
        <div class="curriculum-item">
          <h3 class="curriculum-number">Module 7</h3>
          <h4 class="curriculum-title">Results Section</h4>
          <p class="curriculum-description">Results organization, professional tables and figures, statistical reporting, narrative writing, and supplementary materials.</p>
        </div>
        
        <!-- Module 8: Discussion -->
        <div class="curriculum-item">
          <h3 class="curriculum-number">Module 8</h3>
          <h4 class="curriculum-title">Discussion Section</h4>
          <p class="curriculum-description">Discussion structure, interpreting results, comparing with literature, addressing limitations, and implications for future work.</p>
        </div>
        
        <!-- Module 9: Conclusion -->
        <div class="curriculum-item">
          <h3 class="curriculum-number">Module 9</h3>
          <h4 class="curriculum-title">Conclusion Section</h4>
          <p class="curriculum-description">Conclusion structure, differentiating from abstract, and writing effective conclusions with examples.</p>
        </div>
      </div>
    </div>
  </section>
`,d=()=>`
  <section class="features">
    <div class="container">
      <h2 class="section-title">Why Choose This Course</h2>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">📝</div>
          <h3 class="feature-title">Complete IMRAD Guide</h3>
          <p class="feature-description">Master every section of research papers: from title and abstract to discussion and conclusion.</p>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">⚙️</div>
          <h3 class="feature-title">LaTeX Integration</h3>
          <p class="feature-description">Learn LaTeX tools for professional formatting, citations, tables, and figures in your papers.</p>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">📊</div>
          <h3 class="feature-title">Practical Examples</h3>
          <p class="feature-description">Real research paper examples across disciplines with step-by-step writing exercises.</p>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">🎓</div>
          <h3 class="feature-title">Publication-Ready</h3>
          <p class="feature-description">Create journal-quality papers following academic standards and formatting requirements.</p>
        </div>
      </div>
    </div>
  </section>
`,p=()=>`
  <section class="pricing" id="pricing">
    <div class="container">
      <h2 class="section-title">Course Pricing</h2>
      <div class="pricing-grid">
        <!-- Algerian Students -->
        <div class="pricing-card">
          <div class="pricing-header">
            <h3 class="pricing-title">Algerian Students</h3>
            <div class="pricing-amount">
              <span class="price-currency">DZD</span>
              <span class="price-value">7,000</span>
            </div>
          </div>
          <ul class="pricing-features">
            <li>✓ 9 Comprehensive Modules</li>
            <li>✓ Complete IMRAD Writing Guide</li>
            <li>✓ LaTeX Document Preparation</li>
            <li>✓ Real Research Paper Examples</li>
            <li>✓ Hands-on Writing Exercises</li>
            <li>✓ Publication-Ready Templates</li>
          </ul>
          <a href="https://forms.gle/SmDSriWMKxckgddB6" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block">Register Now</a>
        </div>
        
        <!-- International Students -->
        <div class="pricing-card pricing-card-featured">
          <div class="pricing-badge">Most Popular</div>
          <div class="pricing-header">
            <h3 class="pricing-title">International Students</h3>
            <div class="pricing-amount">
              <span class="price-currency">$</span>
              <span class="price-value">75</span>
            </div>
          </div>
          <ul class="pricing-features">
            <li>✓ 9 Comprehensive Modules</li>
            <li>✓ Complete IMRAD Writing Guide</li>
            <li>✓ LaTeX Document Preparation</li>
            <li>✓ Real Research Paper Examples</li>
            <li>✓ Hands-on Writing Exercises</li>
            <li>✓ Publication-Ready Templates</li>
          </ul>
          <a href="https://forms.gle/SmDSriWMKxckgddB6" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block">Register Now</a>
        </div>
      </div>
      <p class="pricing-note">Click Register Now to fill out the Google Form. Questions? Contact us at <a href="mailto:qcversity.info@gmail.com">qcversity.info@gmail.com</a></p>
    </div>
  </section>
`,m=()=>`
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-content">
        <p class="contact-intro">Have questions about the course? Feel free to reach out.</p>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <a href="mailto:qcversity.info@gmail.com" class="contact-link">qcversity.info@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
`,h=()=>`
  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 Dr. Saad Laouadi. All rights reserved.</p>
    </div>
  </footer>
`;console.log("Scientific Writing with LaTeX - Course by Dr. Saad Laouadi");const f=()=>{const r=document.getElementById("app");r.innerHTML=`
        ${n()}
        ${l()}
        ${o()}
        ${d()}
        ${u()}
        ${p()}
        ${m()}
        ${h()}
    `};document.addEventListener("DOMContentLoaded",()=>{f(),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",c=>{c.preventDefault();const s=t.getAttribute("href"),e=document.querySelector(s);e&&e.scrollIntoView({behavior:"smooth"})})})});
