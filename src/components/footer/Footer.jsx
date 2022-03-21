import NavLink from "../navLink/NavLink";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="ft-col-container">
        <div id="ft-col-1">
          <h5>From The Blog</h5>
          <article>
            <h6>Blog Post Title</h6>
            <p className="meta">Posted by Admin on 00.00.0000</p>
            <p className="excerpt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati cumque illo itaque sit architecto, hic atque modi
              molestiae excepturi quam laborum accusamus, animi aperiam
              voluptatibus, doloremque blanditiis fuga incidunt delectus!
            </p>
            <p class="readmore">
              <a href="https://www.wikipedia.org/">Read more &raquo;</a>
            </p>
          </article>
        </div>
        <div id="ft-col-2">
          <h5>Quick Links</h5>
          <ul>
            <NavLink to="https://www.wikipedia.org" text="Link Text Here" />
            <NavLink to="https://www.wikipedia.org" text="Link Text Here" />
            <NavLink to="https://www.wikipedia.org" text="Link Text Here" />
            <NavLink to="https://www.wikipedia.org" text="Link Text Here" />
            <NavLink to="https://www.wikipedia.org" text="Link Text Here" />
            <NavLink to="https://www.wikipedia.org" text="Link Text Here" />
          </ul>
        </div>
        <div id="ft-col-3">
          <h5>Contact Us</h5>
          <p>
            Company Name
            <br />
            Street Name & Number
            <br />
            Town
            <br />
            Postcode/ZIP
          </p>
          <p>
            Tel:
            <br />
            xx xx xx xx xx
          </p>
          <p>
            Fax:
            <br />
            xx xx xx xx xx
          </p>
          <p>
            Email:
            <br />
            contact@mydomain.com
          </p>
        </div>
        <div id="ft-col-4">
          <h5>Socialise</h5>
          <ul>
            <li>
              <FaLinkedinIn className="rs-icons" />
              <p>Linkedin</p>
            </li>
            <li>
              <FaTwitter className="rs-icons" />
              <i className="fab fa-twitter"></i>
              <p>Twitter</p>
            </li>
            <li>
              <FaPinterestP className="rs-icons" />
              <i className="fab fa-pinterest"></i>
              <p>Pinterest</p>
            </li>
            <li>
              <FaRss className="rs-icons" />
              <i className="fas fa-rss"></i>
              <p>RSS Feed</p>
            </li>
          </ul>
        </div>
      </div>
      <div id="sub-footer">
        <p>Copyright © 2013 Domain Name - All Rights Reserved</p>
        <p>Intégration : Anthony Fieve</p>
        <p>Template by OS Templates</p>
      </div>
    </footer>
  );
}
