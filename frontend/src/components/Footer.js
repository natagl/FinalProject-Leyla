import React from "react";
import "./Footer.css";
import { Icon } from "react-icons-kit";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { socialInstagram } from "react-icons-kit/typicons/socialInstagram";
import { socialPinterest } from "react-icons-kit/typicons/socialPinterest";
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { u00A9 } from "react-icons-kit/noto_emoji_regular/u00A9";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>
          <span className="footerIcons">
            <a>
              <Icon
                type="copyright"
                size={15}
                icon={u00A9}
                style={{ color: "gray" }}
              />
            </a>{" "}
            2020 Glinska Inc.
          </span>
          <span className="footerIcons">
            <a>
              <Icon
                type="instagram"
                size={15}
                icon={socialInstagram}
                style={{ color: "gray" }}
              />
            </a>
          </span>
          <span className="footerIcons">
            <a>
              <Icon
                type="instagram"
                size={15}
                icon={socialFacebook}
                style={{ color: "gray" }}
              />
            </a>
          </span>
          <span className="footerIcons">
            <a>
              <Icon
                type="twitter"
                size={15}
                icon={socialTwitter}
                style={{ color: "gray" }}
              />
            </a>
          </span>
          <span className="footerIcons">
            <a>
              <Icon
                type="pinterest"
                size={15}
                icon={socialPinterest}
                style={{ color: "gray" }}
              />
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
