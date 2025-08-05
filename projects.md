---
layout: default
title: Projects - Dinithi Gunawardena
permalink: /projects/
---

# Projects

<div class="project-card" id="wavspoof">
  <h2>🧠 WavSpoof – Audio Deepfake Detection</h2>
  <img src="/images/wavspoof.png" alt="WavSpoof Project Screenshot" style="max-width: 600px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
  
  <h3>Overview</h3>
  <p>
    WavSpoof is an advanced audio deepfake detection system designed to enhance speaker verification security. This project combines cutting-edge neural network architectures with specialized audio processing techniques to identify manipulated voice recordings with high accuracy. The research was presented at AICCoNS 2025.
  </p>
  
  <h3>Technologies Used</h3>
  <ul>
    <li>Python</li>
    <li>Light CNN (LCNN) architecture</li>
    <li>HuBERT for audio representation</li>
    <li>Mel-frequency Cepstral Coefficients (MFCC)</li>
    <li>Constant-Q Transform (CQT)</li>
    <li>PyTorch</li>
  </ul>
  
  <h3>Key Features</h3>
  <ul>
    <li>High-accuracy detection of synthetic and manipulated audio</li>
    <li>Robust against various deepfake generation techniques</li>
    <li>Low computational overhead for real-time applications</li>
    <li>Comprehensive feature extraction pipeline</li>
    <li>Explainable AI components for detection reasoning</li>
  </ul>
  
  <h3>Implementation Details</h3>
  <p>
    The system employs a multi-stage approach to deepfake detection:
  </p>
  <ol>
    <li><strong>Audio Preprocessing:</strong> Normalization and segmentation</li>
    <li><strong>Feature Extraction:</strong> Using MFCC and CQT to capture spectral characteristics</li>
    <li><strong>Representation Learning:</strong> HuBERT for contextual audio understanding</li>
    <li><strong>Classification:</strong> LCNN architecture for efficient pattern recognition</li>
    <li><strong>Post-processing:</strong> Decision fusion and confidence scoring</li>
  </ol>
  
  <h3>Research Impact</h3>
  <p>
    This project addresses the growing threat of audio deepfakes in security-critical applications like banking verification systems and voice authentication. The research contributes novel techniques for detecting increasingly sophisticated voice manipulation methods.
  </p>
  
  <div style="margin-top: 20px;">
    <a href="https://github.com/DinithiG/WavSpoof" class="btn" target="_blank"><i class="fab fa-github"></i> View on GitHub</a>
  </div>
</div>

<div class="project-card" id="intellipm">
  <h2>🤖 IntelliPM – Multi-Agent Project Management Tool</h2>
  <img src="/images/intellipm.png" alt="IntelliPM Project Screenshot" style="max-width: 600px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
  
  <h3>Overview</h3>
  <p>
    IntelliPM is an innovative multi-agent system designed to optimize project workflows and enhance team collaboration. By leveraging multiple specialized AI agents that communicate and coordinate with each other, the system can handle complex project management tasks with minimal human intervention.
  </p>
  
  <h3>Technologies Used</h3>
  <ul>
    <li>Python</li>
    <li>LangChain for agent orchestration</li>
    <li>LangGraph for agent communication flows</li>
    <li>Large Language Models</li>
    <li>Vector databases for knowledge storage</li>
  </ul>
  
  <h3>Key Features</h3>
  <ul>
    <li>Autonomous task allocation and scheduling</li>
    <li>Resource optimization across project components</li>
    <li>Risk identification and mitigation strategies</li>
    <li>Adaptive planning based on progress feedback</li>
    <li>Natural language interface for team members</li>
  </ul>
  
  <h3>Agent Architecture</h3>
  <p>
    The system implements a hierarchical multi-agent architecture:
  </p>
  <ul>
    <li><strong>Manager Agent:</strong> Oversees the entire project and coordinates other agents</li>
    <li><strong>Planning Agent:</strong> Creates and adjusts project timelines</li>
    <li><strong>Resource Agent:</strong> Optimizes allocation of team members and resources</li>
    <li><strong>Risk Agent:</strong> Identifies potential issues and suggests mitigations</li>
    <li><strong>Communication Agent:</strong> Handles interactions with human team members</li>
  </ul>
  
  <h3>Implementation Challenges</h3>
  <p>
    A significant challenge was designing effective communication protocols between agents with different specializations. This was addressed by implementing a structured message passing system with context preservation and priority handling to ensure coherent decision-making across the system.
  </p>
  
  <div style="margin-top: 20px;">
    <a href="https://github.com/DinithiG/IntelliPM" class="btn" target="_blank"><i class="fab fa-github"></i> View on GitHub</a>
  </div>
</div>

<div class="project-card" id="stock-analysis">
  <h2>📈 Stock Analysis using Multi-Agent AI</h2>
  <img src="/images/stock-analysis.png" alt="Stock Analysis Project Screenshot" style="max-width: 600px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
  
  <h3>Overview</h3>
  <p>
    This project implements a sophisticated multi-agent system for stock market analysis and prediction. By simulating AI-driven decision-making with supervisor agents, the system creates a hierarchical approach to financial insights that mimics expert collaboration.
  </p>
  
  <h3>Technologies Used</h3>
  <ul>
    <li>Python</li>
    <li>TensorFlow for predictive modeling</li>
    <li>Multi-Agent Systems architecture</li>
    <li>Financial APIs for real-time data</li>
    <li>Data visualization libraries</li>
  </ul>
  
  <h3>Key Features</h3>
  <ul>
    <li>Multi-perspective market analysis</li>
    <li>Automated technical and fundamental analysis</li>
    <li>Consensus-based prediction methodology</li>
    <li>Risk assessment and portfolio recommendations</li>
    <li>Backtesting against historical market data</li>
  </ul>
  
  <h3>Agent Roles</h3>
  <p>
    The system employs specialized agents with distinct roles:
  </p>
  <ul>
    <li><strong>Technical Analysis Agent:</strong> Focuses on price patterns and indicators</li>
    <li><strong>Fundamental Analysis Agent:</strong> Evaluates company financials and economic factors</li>
    <li><strong>Sentiment Analysis Agent:</strong> Monitors news and social media sentiment</li>
    <li><strong>Risk Assessment Agent:</strong> Evaluates potential downside scenarios</li>
    <li><strong>Supervisor Agent:</strong> Integrates insights and makes final recommendations</li>
  </ul>
  
  <div style="margin-top: 20px;">
    <a href="https://github.com/DinithiG/StockAnalysisAI" class="btn" target="_blank"><i class="fab fa-github"></i> View on GitHub</a>
  </div>
</div>

<div class="project-card" id="hr-chatbot">
  <h2>💬 Copilot HR Chatbot</h2>
  <img src="/images/hr-chatbot.png" alt="HR Chatbot Screenshot" style="max-width: 600px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
  
  <h3>Overview</h3>
  <p>
    Developed during my internship at Dialog Axiata, this HR chatbot leverages Microsoft Copilot Studio to streamline employee support by automating responses to common HR queries and integrating with existing company systems.
  </p>
  
  <h3>Technologies Used</h3>
  <ul>
    <li>Microsoft Copilot Studio</li>
    <li>Azure services</li>
    <li>Power Platform</li>
    <li>SharePoint integration</li>
    <li>Natural Language Processing</li>
  </ul>
  
  <h3>Key Features</h3>
  <ul>
    <li>Automated responses to common HR inquiries</li>
    <li>Employee leave management assistance</li>
    <li>Benefits and policy information retrieval</li>
    <li>Integration with HR databases</li>
    <li>Escalation to human HR staff when needed</li>
  </ul>
  
  <h3>Implementation Process</h3>
  <p>
    The chatbot was developed through a structured approach:
  </p>
  <ol>
    <li><strong>Requirements Analysis:</strong> Identifying common HR queries and processes</li>
    <li><strong>Knowledge Base Creation:</strong> Compiling HR policies and procedures</li>
    <li><strong>Conversation Flow Design:</strong> Creating natural dialog patterns</li>
    <li><strong>Integration:</strong> Connecting with HR systems and databases</li>
    <li><strong>Testing and Refinement:</strong> Iterative improvement based on user feedback</li>
  </ol>
  
  <h3>Business Impact</h3>
  <p>
    The implementation resulted in a 40% reduction in routine HR inquiries requiring human intervention, allowing the HR team to focus on more complex employee issues and strategic initiatives. Employee satisfaction with HR support increased significantly due to faster response times.
  </p>
  
  <div style="margin-top: 20px;">
    <a href="https://github.com/DinithiG/HRChatbot" class="btn" target="_blank"><i class="fab fa-github"></i> View on GitHub</a>
  </div>
</div>

<div style="margin-top: 30px; text-align: center;">
  <a href="/" class="btn"><i class="fas fa-arrow-left"></i> Back to Home</a>
</div>