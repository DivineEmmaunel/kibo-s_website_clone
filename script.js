
class SpecialHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header>
          <div class="top">
            <div>
              <nav class="nav-bar">
                <div class="logo">
                  <img src="https://kibo.school/wp-content/uploads/2021/09/Kibo-school-secondary-logo.svg" alt="Logo">
                </div>
                <div id="nav-link">
                  <ul class="nav-links">
                    <li><a href="#Degree-Program">Degree Program ▾</a></li>
                    <li><a href="try-kibo.html">Try Kibo</a></li>
                    <li><a href="community.html">Community</a></li>
                    <li><a href="#Get-Involved">Get Involved ▾</a></li>
                    <li><a href="about.html">About</a></li>
                  </ul>
                </div> 
                <div class="added"></div>
              </nav>
            </div>
          </div>
        </header>`;
    }
  }

  class SpecialFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer>
        <section class="color-added">
        <div class="extra-space"></div>
        <div class="extra-space"></div>
          <div class="segment2">
            <div class="footer1">
              <div class="k-logo">
                <img src="https://kibo.school/wp-content/uploads/2021/09/Kibo-logo-minimal.svg">
              </div>
              <div>
                <p class="decoration ">
                  Transcend the barriers of traditional university with <span>an online degree from Kibo. Get a world-class</span> <span>education in computer science, build a global</span> <span>network, and jumpstart your future.</span>
                </p>
              </div>
            </div>

            <div class="footer2">
              <div></div>
              <div></div>
              <div class="divisor">
                <div class="segmented">
                  <div>
                    <h3>School</h3>
                    <nav>
                      <ul class="decoration">
                        <li><a>Home</a></li>
                        <li><a>About Kibo</a></li>
                        <li><a>Try Kibo</a></li>
                        <li><a>Math Challenge</a></li>
                        <li><a>Community</a></li>
                        <li><a>Accreditation</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div class="segmented">
                  <div>
                    <h3>Degree Program</h3>
                    <nav>
                      <ul class="decoration">
                        <li><a>Overview</a></li>
                        <li><a>Admissions</a></li>
                        <li><a>Tuition & Aid</a></li>
                        <li><a>Curriculum</a></li>
                        <li><a>Career</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div class="segmented">
                  <div>
                    <h3>Get Involved</h3>
                    <nav>
                      <ul class="decoration">
                        <li><a>Volunteer</a></li>
                        <li><a>Partner</a></li>
                        <li><a>Work with us</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div></div>
                <div></div>
              </div>
              <hr>
              <div>
                <h3>Get Involved</h3>
                <nav>
                  <ul class="decoration">
                    <li><a>228 Park Avenue South, New York, NY</a></li>
                    <li><a>hello@kibo.school</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </footer>`;
    }
  }

  customElements.define("special-header", SpecialHeader);
  customElements.define("special-footer", SpecialFooter);

