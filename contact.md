---
layout: default
title: Contact - Dinithi Gunawardena
permalink: /contact/
---

# Contact Me

<div class="contact-container">
  <div class="contact-info">
    <h2>Get In Touch</h2>
    <p>Feel free to reach out to me for job opportunities, collaborations, or just to say hello. I'm always open to discussing new projects and ideas.</p>
    
    <div class="contact-section">
      <div class="contact-item">
        <i class="fas fa-envelope"></i> <a href="mailto:dinithi.20210465@iit.ac.lk">dinithi.20210465@iit.ac.lk</a>
      </div>
      
      <div class="contact-item">
        <i class="fas fa-phone"></i> <a href="tel:+94713249027">+94 71 324 9027</a>
      </div>
      
      <div class="contact-item">
        <i class="fab fa-linkedin"></i> <a href="https://lk.linkedin.com/in/dinithi-gunawardena-7719a9164" target="_blank">Dinithi Gunawardena</a>
      </div>
      
      <div class="contact-item">
        <i class="fab fa-github"></i> <a href="https://github.com/DinithiG" target="_blank">DinithiG</a>
      </div>
    </div>
    
    <div class="download-section">
      <h3>Download My CV</h3>
      <p>For a complete overview of my experience, skills, and qualifications, please download my CV.</p>
      <a href="/CV_ DinithiGunawardena.pdf" class="btn" target="_blank"><i class="fas fa-file-alt"></i> Download CV</a>
    </div>
  </div>
  
  <div class="contact-form">
    <h2>Send Me a Message</h2>
    <p>I'll get back to you as soon as possible.</p>
    
    <form action="https://formspree.io/f/your-formspree-endpoint" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="_replyto" required>
      </div>
      
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      
      <button type="submit" class="btn"><i class="fas fa-paper-plane"></i> Send Message</button>
    </form>
  </div>
</div>

<style>
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 20px;
  }
  
  .contact-info, .contact-form {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 25px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .contact-section {
    margin: 20px 0;
  }
  
  .contact-item {
    margin: 15px 0;
    display: flex;
    align-items: center;
  }
  
  .contact-item i {
    width: 25px;
    color: #267CB9;
    margin-right: 10px;
  }
  
  .download-section {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 16px;
  }
  
  textarea {
    resize: vertical;
  }
  
  button.btn {
    background-color: #267CB9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  button.btn:hover {
    background-color: #1c5d8b;
  }
  
  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
    }
  }
</style>