<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Mohanakrishnan C - Portfolio</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background: #f9f9f9;
    color: #333;
  }
  header {
    text-align: center;
    margin-bottom: 40px;
  }
  h1 {
    font-size: 2.5em;
    margin-bottom: 0.1em;
  }
  h2 {
    color: #2266aa;
  }
  p, li {
    font-size: 1.05em;
  }
  section {
    max-width: 900px;
    margin: auto;
    margin-bottom: 30px;
    background: #fff;
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
  .gallery img {
    width: 180px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .gallery img:hover {
    transform: scale(1.07);
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  }
  .contact {
    margin-top: 10px;
    font-size: 1.05em;
  }
  .contact a {
    color: #2266aa;
    text-decoration: none;
    margin-right: 14px;
  }
  .contact a:hover {
    text-decoration: underline;
  }
  footer {
    text-align: center;
    color: #888;
    margin: 44px 0 12px;
    font-size: 0.93em;
  }
</style>
</head>
<body>

<header>
  <h1>Mohanakrishnan C</h1>
  <p>Cybersecurity Student | Programmer | Tech Enthusiast</p>
  <div class="contact">
    <a href="https://www.linkedin.com/in/mohanakrishnan-c-374336378" target="_blank">LinkedIn</a>
    <a href="mailto:mohanakrishnan1510@gmail.com">Email</a>
  </div>
</header>

<section>
  <h2>About Me</h2>
  <p>
    Hello! I am <strong>Mohanakrishnan C</strong>, a passionate cybersecurity student pursuing my BE in Cybersecurity at SRM Valliammai College, Chennai. I enjoy programming with Python and C/C++, exploring ethical hacking, gaming, and fitness.<br>
    I’m always eager to apply my knowledge to real-world projects and build a career in cybersecurity.
  </p>
</section>

<section>
  <h2>My Projects</h2>
  <ul>
    <li>
      <strong>Project One:</strong> <a href="https://github.com/mohan-10-15/project-one" target="_blank">Project One Repo</a> — Brief description of your project one.
    </li>
    <li>
      <strong>Project Two:</strong> <a href="https://github.com/mohan-10-15/project-two" target="_blank">Project Two Repo</a> — Brief description of your project two.
    </li>
    <!-- Add more projects as needed -->
  </ul>
</section>

<section>
  <h2>Gallery</h2>
  <div class="gallery">
    <img src="images/pic1.jpg" alt="Pic 1" />
    <img src="images/pic2.jpg" alt="Pic 2" />
    <img src="images/pic3.jpg" alt="Pic 3" />
    <img src="images/pic4.jpg" alt="Pic 4" />
    <!-- Add more images -->
  </div>
</section>

<footer>
  &copy; 2025 Mohanakrishnan C. All Rights Reserved.
</footer>

</body>
</html>
