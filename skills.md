---
layout: default
title: Skills - Dinithi Gunawardena
permalink: /skills/
---

<div class="skills-header">
  <h1>Technical Skills</h1>
  <p>A comprehensive overview of my technical expertise and proficiency levels across various technologies and domains.</p>
</div>

<div class="skills-container">

  <div class="skill-category">
    <h2><i class="fas fa-code"></i> Programming Languages</h2>
    <div class="skill-grid">
      <div class="skill-item">
        <div class="skill-name">Java</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 90%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">Python</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 85%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">JavaScript</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 75%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">HTML/CSS</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 80%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">SQL</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 70%;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="skill-category">
    <h2><i class="fas fa-laptop-code"></i> Frameworks & Libraries</h2>
    <div class="skill-grid">
      <div class="skill-item">
        <div class="skill-name">Spring Framework</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 75%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">React.js</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 70%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">Pandas/NumPy</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 85%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">Matplotlib/Seaborn</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 80%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">Bootstrap</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 75%;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="skill-category">
    <h2><i class="fas fa-database"></i> Databases</h2>
    <div class="skill-grid">
      <div class="skill-item">
        <div class="skill-name">MySQL</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 80%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">PostgreSQL</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 70%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">MongoDB</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 65%;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="skill-category">
    <h2><i class="fas fa-tools"></i> Tools & Technologies</h2>
    <div class="skill-grid">
      <div class="skill-item">
        <div class="skill-name">Git/GitHub</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 85%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">Docker</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 65%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">IntelliJ IDEA</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 90%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">VS Code</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 85%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">Jupyter Notebook</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 80%;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="skill-category">
    <h2><i class="fas fa-brain"></i> Soft Skills</h2>
    <div class="skill-grid">
      <div class="skill-item">
        <div class="skill-name">Problem Solving</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 90%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">Team Collaboration</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 85%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">Communication</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 80%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">Time Management</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 85%;"></div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-name">Adaptability</div>
        <div class="skill-bar">
          <div class="skill-level" style="width: 90%;"></div>
        </div>
      </div>
    </div>
  </div>

</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Reset all skill levels to 0 width
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
      const originalWidth = level.style.width;
      level.style.width = '0%';
      
      // Use setTimeout to trigger the animation after a small delay
      setTimeout(() => {
        level.style.width = originalWidth;
      }, 300);
    });
    
    // Add animation to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
      category.style.opacity = '0';
      category.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        category.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        category.style.opacity = '1';
        category.style.transform = 'translateY(0)';
      }, 100 + (index * 150));
    });
  });
</script>

<div class="skills-footer">
  <div class="skills-cta">
    <h3>Want to know more about my work?</h3>
    <p>Check out my projects to see these skills in action or view my resume for a complete overview of my experience.</p>
    <div class="cta-buttons">
      <a href="/projects" class="btn primary"><i class="fas fa-project-diagram"></i> View Projects</a>
       <a href="/resume" class="btn secondary"><i class="fas fa-file-pdf"></i> View Resume</a>
      <a href="/" class="btn tertiary"><i class="fas fa-arrow-left"></i> Back to Home</a>
    </div>
  </div>
</div>

<style>
  .skills-footer {
    margin-top: 50px;
    padding-top: 30px;
    border-top: 1px solid #eaecef;
  }
  
  .skills-cta {
    text-align: center;
    background-color: #f8f9fa;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  
  .skills-cta h3 {
    color: #267CB9;
    margin-top: 0;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
  }
  
  .btn.primary {
    background-color: #267CB9;
    color: white;
  }
  
  .btn.primary:hover {
    background-color: #1c5a85;
  }
  
  .btn.secondary {
    background-color: #6c757d;
    color: white;
  }
  
  .btn.secondary:hover {
    background-color: #5a6268;
  }
  
  .btn.tertiary {
    background-color: #f8f9fa;
    color: #333;
    border: 1px solid #ddd;
  }
  
  .btn.tertiary:hover {
    background-color: #e2e6ea;
  }
  
  @media (max-width: 768px) {
    .cta-buttons {
      flex-direction: column;
    }
    
    .btn {
      width: 100%;
      text-align: center;
    }
  }
</style>