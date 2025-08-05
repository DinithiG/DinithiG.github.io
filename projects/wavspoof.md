---
layout: default
title: WavSpoof - Audio Deepfake Detection | Dinithi Gunawardena
permalink: /projects/wavspoof/
---

# 🧠 WavSpoof – Audio Deepfake Detection

<div class="project-detail">
  <div class="project-header">
    <img src="/images/wavspoof.png" alt="WavSpoof Project Screenshot" class="project-image"/>
    
    <div class="project-links">
      <a href="https://github.com/DinithiG/WavSpoof" class="btn" target="_blank"><i class="fab fa-github"></i> View on GitHub</a>
      <a href="/projects/" class="btn secondary"><i class="fas fa-arrow-left"></i> Back to Projects</a>
    </div>
  </div>
  
  <div class="project-section">
    <h2>Overview</h2>
    <p>
      WavSpoof is an advanced audio deepfake detection system designed to enhance speaker verification security. This project combines cutting-edge neural network architectures with specialized audio processing techniques to identify manipulated voice recordings with high accuracy. The research was presented at AICCoNS 2025.
    </p>
  </div>
  
  <div class="project-section">
    <h2>Technologies Used</h2>
    <div class="tech-tags">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Light CNN (LCNN)</span>
      <span class="tech-tag">HuBERT</span>
      <span class="tech-tag">MFCC</span>
      <span class="tech-tag">CQT</span>
      <span class="tech-tag">PyTorch</span>
    </div>
  </div>
  
  <div class="project-section">
    <h2>Key Features</h2>
    <ul class="feature-list">
      <li><span class="feature-icon">✓</span> High-accuracy detection of synthetic and manipulated audio</li>
      <li><span class="feature-icon">✓</span> Robust against various deepfake generation techniques</li>
      <li><span class="feature-icon">✓</span> Low computational overhead for real-time applications</li>
      <li><span class="feature-icon">✓</span> Comprehensive feature extraction pipeline</li>
      <li><span class="feature-icon">✓</span> Explainable AI components for detection reasoning</li>
    </ul>
  </div>
  
  <div class="project-section">
    <h2>Implementation Details</h2>
    <p>
      The system employs a multi-stage approach to deepfake detection:
    </p>
    <ol class="implementation-steps">
      <li>
        <h3>Audio Preprocessing</h3>
        <p>Normalization and segmentation of audio inputs to ensure consistent analysis</p>
      </li>
      <li>
        <h3>Feature Extraction</h3>
        <p>Using MFCC and CQT to capture spectral characteristics that differentiate real from synthetic audio</p>
      </li>
      <li>
        <h3>Representation Learning</h3>
        <p>HuBERT for contextual audio understanding and semantic feature extraction</p>
      </li>
      <li>
        <h3>Classification</h3>
        <p>LCNN architecture for efficient pattern recognition with reduced computational requirements</p>
      </li>
      <li>
        <h3>Post-processing</h3>
        <p>Decision fusion and confidence scoring to minimize false positives and negatives</p>
      </li>
    </ol>
  </div>
  
  <div class="project-section">
    <h2>Research Impact</h2>
    <p>
      This project addresses the growing threat of audio deepfakes in security-critical applications like banking verification systems and voice authentication. The research contributes novel techniques for detecting increasingly sophisticated voice manipulation methods.
    </p>
    <p>
      The findings from this research were presented at AICCoNS 2025, where they received significant interest from the security and AI research communities. The project continues to evolve with ongoing improvements to detection accuracy and computational efficiency.
    </p>
  </div>
  
  <div class="project-section">
    <h2>Future Directions</h2>
    <p>
      Ongoing development of WavSpoof includes:
    </p>
    <ul>
      <li>Integration with mobile platforms for on-device detection</li>
      <li>Expansion of the training dataset to include emerging deepfake techniques</li>
      <li>Development of real-time API for third-party integration</li>
      <li>Exploration of transfer learning approaches to improve generalization</li>
    </ul>
  </div>
</div>

<style>
  .project-detail {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .project-header {
    margin-bottom: 30px;
  }
  
  .project-image {
    width: 100%;
    max-width: 800px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    margin-bottom: 20px;
  }
  
  .project-links {
    display: flex;
    gap: 15px;
    margin-top: 20px;
  }
  
  .project-section {
    margin-bottom: 40px;
    background-color: #f9f9f9;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .project-section h2 {
    color: #267CB9;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
    margin-top: 0;
  }
  
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
  }
  
  .tech-tag {
    background-color: #267CB9;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
  }
  
  .feature-list {
    list-style-type: none;
    padding-left: 0;
  }
  
  .feature-list li {
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
  }
  
  .feature-icon {
    color: #267CB9;
    font-weight: bold;
    margin-right: 10px;
    font-size: 18px;
  }
  
  .implementation-steps {
    counter-reset: step-counter;
    list-style-type: none;
    padding-left: 0;
  }
  
  .implementation-steps li {
    position: relative;
    margin-bottom: 25px;
    padding-left: 50px;
  }
  
  .implementation-steps li:before {
    content: counter(step-counter);
    counter-increment: step-counter;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #267CB9;
    color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  
  .implementation-steps h3 {
    margin-top: 0;
    color: #333;
  }
  
  .btn {
    display: inline-block;
    background-color: #267CB9;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #1c5a85;
  }
  
  .btn.secondary {
    background-color: #6c757d;
  }
  
  .btn.secondary:hover {
    background-color: #5a6268;
  }
  
  @media (max-width: 768px) {
    .project-links {
      flex-direction: column;
    }
    
    .tech-tags {
      flex-direction: column;
    }
    
    .implementation-steps li {
      padding-left: 40px;
    }
  }
</style>