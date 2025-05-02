import React, { useEffect } from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
    useEffect(() => {
        // Ensure the footer logo stays the same for both light and dark modes
        document.querySelector(".tomatologofooter").style.filter = "none";
    }, []);

    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img
                        className="tomatologofooter"
                        src={assets.logo}
                        alt=""
                    />
                    <p>
                    Энэ вэбсайт нь зөвхөн миний багцад зориулагдсан бөгөөд энэ нь бодит биш юм
                    вэб сайт.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <a
                            href="https://www.linkedin.com/in/your-linkedin-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Компани</h2>
                    <ul>
                        <li>Нүүр</li>
                        <li>Бидний тухай</li>
                        <li>Хүргэлт</li>
                        <li>Нууцлалын бодлого</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Холбоос</h2>
                    <ul>
                        <li>+976 60606447</li>
                        <li>hangryKHH@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2025 © Hangry.com - Бүх эрх хуулиар хамгаалагдсан.
            </p>
        </div>
    );
};

export default Footer;
