---
layout: default
title: Stock Analysis using Multi-Agent AI | Dinithi Gunawardena
permalink: /projects/stock-analysis/
---

# 📈 Stock Analysis using Multi-Agent AI

<div class="project-detail">
  <div class="project-header">
    <img src="/images/stock-analysis.png" alt="Stock Analysis Project Screenshot" class="project-image"/>
    
    <div class="project-links">
      <a href="https://github.com/DinithiG/StockAnalysisAI" class="btn" target="_blank"><i class="fab fa-github"></i> View on GitHub</a>
      <a href="/projects/" class="btn secondary"><i class="fas fa-arrow-left"></i> Back to Projects</a>
    </div>
  </div>
  
  <div class="project-section">
    <h2>Overview</h2>
    <p>
      This project implements a sophisticated multi-agent system for stock market analysis and prediction. By simulating AI-driven decision-making with supervisor agents, the system creates a hierarchical approach to financial insights that mimics expert collaboration.
    </p>
  </div>
  
  <div class="project-section">
    <h2>Technologies Used</h2>
    <div class="tech-tags">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">TensorFlow</span>
      <span class="tech-tag">Multi-Agent Systems</span>
      <span class="tech-tag">Financial APIs</span>
      <span class="tech-tag">Data Visualization</span>
    </div>
  </div>
  
  <div class="project-section">
    <h2>Key Features</h2>
    <ul class="feature-list">
      <li><span class="feature-icon">✓</span> Multi-perspective market analysis</li>
      <li><span class="feature-icon">✓</span> Automated technical and fundamental analysis</li>
      <li><span class="feature-icon">✓</span> Consensus-based prediction methodology</li>
      <li><span class="feature-icon">✓</span> Risk assessment and portfolio recommendations</li>
      <li><span class="feature-icon">✓</span> Backtesting against historical market data</li>
    </ul>
  </div>
  
  <div class="project-section">
    <h2>Agent Roles</h2>
    <p>
      The system employs specialized agents with distinct roles:
    </p>
    <div class="agent-grid">
      <div class="agent-card">
        <div class="agent-icon">📊</div>
        <h3>Technical Analysis Agent</h3>
        <p>Focuses on price patterns and indicators</p>
        <ul class="agent-tasks">
          <li>Chart pattern recognition</li>
          <li>Indicator calculation and interpretation</li>
          <li>Trend identification and analysis</li>
        </ul>
      </div>
      
      <div class="agent-card">
        <div class="agent-icon">📝</div>
        <h3>Fundamental Analysis Agent</h3>
        <p>Evaluates company financials and economic factors</p>
        <ul class="agent-tasks">
          <li>Financial statement analysis</li>
          <li>Industry comparison metrics</li>
          <li>Economic impact assessment</li>
        </ul>
      </div>
      
      <div class="agent-card">
        <div class="agent-icon">📰</div>
        <h3>Sentiment Analysis Agent</h3>
        <p>Monitors news and social media sentiment</p>
        <ul class="agent-tasks">
          <li>News article processing</li>
          <li>Social media trend analysis</li>
          <li>Sentiment scoring and aggregation</li>
        </ul>
      </div>
      
      <div class="agent-card">
        <div class="agent-icon">⚠️</div>
        <h3>Risk Assessment Agent</h3>
        <p>Evaluates potential downside scenarios</p>
        <ul class="agent-tasks">
          <li>Volatility analysis</li>
          <li>Downside scenario modeling</li>
          <li>Risk-adjusted return calculation</li>
        </ul>
      </div>
      
      <div class="agent-card">
        <div class="agent-icon">👨‍💼</div>
        <h3>Supervisor Agent</h3>
        <p>Integrates insights and makes final recommendations</p>
        <ul class="agent-tasks">
          <li>Conflict resolution between agents</li>
          <li>Weighted decision-making</li>
          <li>Final recommendation generation</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="project-section">
    <h2>System Architecture</h2>
    <p>
      The multi-agent system is structured in a hierarchical manner, with specialized agents reporting to a supervisor agent that integrates their insights. This architecture enables:
    </p>
    <ul>
      <li><strong>Parallel Processing:</strong> Multiple analysis approaches run simultaneously</li>
      <li><strong>Specialized Expertise:</strong> Each agent focuses on a specific analysis domain</li>
      <li><strong>Weighted Integration:</strong> The supervisor agent applies appropriate weights to different insights</li>
      <li><strong>Continuous Learning:</strong> Agents adapt based on historical performance</li>
    </ul>
    <p>
      The system employs a message-passing architecture where agents communicate their findings and confidence levels to the supervisor agent, which then integrates these insights to form a comprehensive market view.
    </p>
  </div>
  
  <div class="project-section">
    <h2>Data Sources</h2>
    <p>
      The system integrates data from multiple sources to provide a comprehensive view of the market:
    </p>
    <ul>
      <li><strong>Market Data:</strong> Historical and real-time price and volume information</li>
      <li><strong>Financial Statements:</strong> Quarterly and annual reports from companies</li>
      <li><strong>Economic Indicators:</strong> GDP, inflation, interest rates, and other macroeconomic data</li>
      <li><strong>News Articles:</strong> Financial news from major publications</li>
      <li><strong>Social Media:</strong> Sentiment from Twitter, Reddit, and other platforms</li>
    </ul>
  </div>
  
  <div class="project-section">
    <h2>Performance Metrics</h2>
    <p>
      The system's performance is evaluated using several metrics:
    </p>
    <ul>
      <li><strong>Prediction Accuracy:</strong> Percentage of correct directional predictions</li>
      <li><strong>Risk-Adjusted Returns:</strong> Sharpe and Sortino ratios of recommended portfolios</li>
      <li><strong>Drawdown Mitigation:</strong> Effectiveness in identifying market downturns</li>
      <li><strong>Agent Contribution:</strong> Individual agent performance and contribution to overall results</li>
    </ul>
    <p>
      Backtesting against historical data has shown the system outperforming traditional single-approach analysis methods by 15-20% in terms of risk-adjusted returns.
    </p>
  </div>
  
  <div class="project-section">
    <h2>Future Enhancements</h2>
    <p>
      Planned improvements to the system include:
    </p>
    <ul>
      <li>Integration of alternative data sources (satellite imagery, credit card transactions, etc.)</li>
      <li>Enhanced reinforcement learning for agent adaptation</li>
      <li>Sector-specific analysis agents</li>
      <li>Real-time trading API integration</li>
      <li>Mobile application for on-the-go market insights</li>
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
  
  .agent-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .agent-card {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .agent-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }
  
  .agent-icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .agent-card h3 {
    margin: 10px 0;
    color: #267CB9;
    font-size: 16px;
  }
  
  .agent-card p {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
  }
  
  .agent-tasks {
    text-align: left;
    font-size: 13px;
    padding-left: 20px;
    margin-bottom: 0;
  }
  
  .agent-tasks li {
    margin-bottom: 5px;
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
    
    .agent-grid {
      grid-template-columns: 1fr;
    }
  }
</style>