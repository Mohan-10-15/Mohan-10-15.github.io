<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Mohanakrishnan C - Cybersecurity Portfolio</title>
<style>
  /* Animated binary background (computer science vibe) */
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    margin: 0;
    background: #101417;
    color: #eee;
    position: relative;
    overflow-x: hidden;
  }
  .binary-bg {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none;
    z-index: -1;
    opacity: 0.1;
    font-size: 2em;
    animation: scrollBin 12s linear infinite;
    white-space: pre;
  }
  @keyframes scrollBin {
    0% {transform: translateY(0);}
    100% {transform: translateY(-200px);}
  }
  header {
    text-align: center;
    margin-bottom: 40px;
    background: #232e39ef;
    padding: 36px 10px 20px;
    border-bottom: 2px solid #18d178;
  }
  h1 {
    font-size: 2.5em;
    color: #18d178;
    text-shadow: 0 2px 20px #18d17866;
    margin-bottom: 0.1em;
  }
  h2 {
    color: #18d178;
  }
  p, li {
    font-size: 1.08em;
    color: #ccc;
  }
  section {
    max-width: 900px;
    margin: auto;
    margin-bottom: 30px;
    background: #21272c;
    border-radius: 12px;
    padding: 26px;
    box-shadow: 0 2px 22px rgba(24,209,120,0.13);
  }
  .cyber-link {
    color: #18d178;
    text-decoration: none;
    font-weight: bold;
    margin-right: 16px;
  }
  .cyber-link:hover { text-decoration: underline; }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    justify-content: center;
  }
  .card {
    background: #181d22;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(24,209,120,0.07);
    overflow: hidden;
    width: 200px;
    text-align: center;
    position: relative;
    animation: zoomCard 0.7s ease;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  @keyframes zoomCard {
    from { transform: scale(0.6);}
    to { transform: scale(1);}
  }
  .card img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    background: #282b30;
    display: block;
    margin-bottom: 4px;
    transition: filter 0.3s;
  }
  .card:hover img {
    filter: brightness(1.12) contrast(1.15);
  }
  .card .desc {
    padding: 10px 8px;
    font-size: 1em;
    color: #b6e8ce;
    font-style: italic;
  }
  footer {
    text-align: center;
    color: #18d178;
    margin-top: 38px;
    font-size: 0.96em;
    background: #181d22;
    padding: 16px;
    border-top: 1.6px solid #18d17833;
  }
</style>
</head>
<body>

<div class="binary-bg">
10100101 11001010 01101110 10101111 01100110 10110101 10011001 11001101 10101000<br>
01011010 01101001 11011011 10110111 01101001 10110100 10010010 11001001 10010110<br>
00101101 11001100 01101001 11010111 01101001 10111000 10001010 11100100 10111010<br>
</div>

<header>
  <h1>Mohanakrishnan C</h1>
  <p>Cybersecurity Student | Programmer | Tech Enthusiast</p>
  <div>
    <a href="https://www.linkedin.com/in/mohanakrishnan-c-374336378" class="cyber-link" target="_blank">LinkedIn</a>
    <a href="mailto:mohanakrishnan1510@gmail.com" class="cyber-link">Email</a>
  </div>
</header>

<section>
  <h2>About Me</h2>
  <p>
    Hello! I am <strong>Mohanakrishnan C</strong>, a passionate cybersecurity student pursuing my BE in Cybersecurity at SRM Valliammai College, Chennai.<br>
    I love working on network security, Python, C/C++, ethical hacking, and tech projects. I hope to build a strong career in cybersecurity, combining knowledge and creativity.
  </p>
</section>

<section>
  <h2>My Projects</h2>
  <ul>
    <li>
      <strong>Password Strength Checker:</strong>
      <a href="https://github.com/mohan-10-15/password-checker" class="cyber-link" target="_blank">GitHub Repo</a>
      <span>— A website to analyze and rate password security using Python and JavaScript.</span>
    </li>
    <li>
      <strong>File Encryption Tool:</strong>
      <a href="https://github.com/mohan-10-15/file-encryption" class="cyber-link" target="_blank">GitHub Repo</a>
      <span>— Python-based desktop tool to securely encrypt and decrypt files.</span>
    </li>
    <!-- Add more projects as you create them -->
  </ul>
</section>

<section>
  <h2>Cybersecurity Gallery</h2>
  <div class="gallery">
    <div class="card">
      <img src="images/cyber1.jpg" alt="Lock symbol, cybersecurity" />
      <div class="desc">Digital lock - security matters!</div>
    </div>
    <div class="card">
      <img src="images/cyber2.jpg" alt="Code screen, programming" />
      <div class="desc">Python and C/C++ in action</div>
    </div>
    <div class="card">
      <img src="images/cyber3.jpg" alt="Shield, data protection" />
      <div class="desc">Protect your data like a pro</div>
    </div>
    <div class="card">
      <img src="images/cyber4.jpg" alt="Network visualization" />
      <div class="desc">Network security made simple</div>
    </div>
    <!-- Add more cards/images as you wish -->
  </div>
</section>

<footer>
  &copy; 2025 Mohanakrishnan C. Cybersecurity | Computer Science | Portfolio.
</footer>

</body>
</html>
