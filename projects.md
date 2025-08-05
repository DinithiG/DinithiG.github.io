---
layout: default
title: Projects - Dinithi Gunawardena
permalink: /projects/
---

# Projects

<div class="projects-container">
  <div class="project-card">
    <div class="project-image">
      <img src="/images/wavspoof.png" alt="WavSpoof Project Screenshot"/>
    </div>
    <div class="project-content">
      <h2>🧠 WavSpoof – Audio Deepfake Detection</h2>
      <p>An advanced audio deepfake detection system designed to enhance speaker verification security using neural networks and signal processing.</p>
      <div class="project-tech">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">PyTorch</span>
        <span class="tech-tag">LCNN</span>
        <span class="tech-tag">HuBERT</span>
      </div>
      <div class="project-links">
        <a href="/projects/wavspoof" class="btn primary">View Details</a>
        <a href="https://github.com/DinithiG/WavSpoof" class="btn secondary" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  </div>
  
  <div class="project-card">
    <div class="project-image">
      <img src="/images/intellipm.png" alt="IntelliPM Project Screenshot"/>
    </div>
    <div class="project-content">
      <h2>🤖 IntelliPM – Multi-Agent Project Management Tool</h2>
      <p>An innovative multi-agent system designed to optimize project workflows and enhance team collaboration through AI-driven coordination.</p>
      <div class="project-tech">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">LangChain</span>
        <span class="tech-tag">LangGraph</span>
        <span class="tech-tag">LLMs</span>
      </div>
      <div class="project-links">
        <a href="/projects/intellipm" class="btn primary">View Details</a>
        <a href="https://github.com/DinithiG/IntelliPM" class="btn secondary" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  </div>
  
  <div class="project-card">
    <div class="project-image">
      <img src="/images/stock-analysis.png" alt="Stock Analysis Project Screenshot"/>
    </div>
    <div class="project-content">
      <h2>📈 Stock Analysis using Multi-Agent AI</h2>
      <p>A sophisticated multi-agent system for stock market analysis and prediction that simulates expert collaboration through AI agents.</p>
      <div class="project-tech">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">TensorFlow</span>
        <span class="tech-tag">Multi-Agent Systems</span>
        <span class="tech-tag">Financial APIs</span>
      </div>
      <div class="project-links">
        <a href="/projects/stock-analysis" class="btn primary">View Details</a>
        <a href="https://github.com/DinithiG/StockAnalysisAI" class="btn secondary" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  </div>
  
  <div class="project-card">
    <div class="project-image">
      <img src="/images/hr-chatbot.png" alt="HR Chatbot Screenshot"/>
    </div>
    <div class="project-content">
      <h2>💬 Copilot HR Chatbot</h2>
      <p>An intelligent HR assistant built with Microsoft Copilot Studio that streamlines employee inquiries and HR processes.</p>
      <div class="project-tech">
        <span class="tech-tag">Microsoft Copilot</span>
        <span class="tech-tag">Azure</span>
        <span class="tech-tag">Power Platform</span>
        <span class="tech-tag">SharePoint</span>
      </div>
      <div class="project-links">
        <a href="/projects/hr-chatbot" class="btn primary">View Details</a>
        <a href="https://github.com/DinithiG/HRChatbot" class="btn secondary" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  </div>
</div>

<div class="home-link">
  <a href="/" class="btn"><i class="fas fa-arrow-left"></i> Back to Home</a>
</div>

<style>
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
  }
  
  .project-card {
    display: flex;
    background-color: #f9f9f9;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
  
  .project-image {
    flex: 0 0 40%;
    overflow: hidden;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .project-card:hover .project-image img {
    transform: scale(1.05);
  }
  
  .project-content {
    flex: 1;
    padding: 25px;
    display: flex;
    flex-direction: column;
  }
  
  .project-content h2 {
    margin-top: 0;
    color: #267CB9;
    font-size: 1.5rem;
  }
  
  .project-content p {
    color: #555;
    margin-bottom: 15px;
    flex-grow: 1;
  }
  
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }
  
  .tech-tag {
    background-color: #e9f2fa;
    color: #267CB9;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: bold;
  }
  
  .project-links {
    display: flex;
    gap: 10px;
  }
  
  .btn {
    display: inline-block;
    padding: 8px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  
  .btn.primary {
    background-color: #267CB9;
    color: white;
  }
  
  .btn.primary:hover {
    background-color: #1c5a85;
  }
  
  .btn.secondary {
    background-color: #f1f1f1;
    color: #333;
  }
  
  .btn.secondary:hover {
    background-color: #ddd;
  }
  
  .home-link {
    text-align: center;
    margin-top: 40px;
  }
  
  .home-link .btn {
    background-color: #6c757d;
    color: white;
  }
  
  .home-link .btn:hover {
    background-color: #5a6268;
  }
  
  @media (max-width: 768px) {
    .project-card {
      flex-direction: column;
    }
    
    .project-image {
      flex: 0 0 200px;
    }
    
    .project-links {
      flex-direction: column;
    }
    
    .btn {
      text-align: center;
    }
  }
</style>