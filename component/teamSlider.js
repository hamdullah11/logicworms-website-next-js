import Slider from "react-slick";
import Image from "next/image";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
function TeamSlider() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [about, setAbout] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [socialLinks, setsocialLinks] = useState([
    "fa-linkedin",
    "fa-instagram",
    "fa-twitter",
  ]);
  const [skills, setSkills] = useState(["", "", "", ""]);
  const handleClose = () => setShow(false);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
          onClick={() => {
            setShow(true);
            setImage("/images/team/employees/atif.png");
            setName("Atif Waheed");
            setDesignation("Digital Marketing team lead");
            setLink1(
              "https://www.linkedin.com/in/atif-waheed-17964534?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZIoOTgawRLWnQ3qfQbon1w%3D%3D"
            );
            setLink2("https://www.instagram.com/m_adil_kamboh/");
            setLink3("https://twitter.com/atifwaheedktk");
            setsocialLinks(["fa-linkedin", "fa-instagram", "fa-twitter"]);
            setAbout(
              "Digital marketing specialist with an immense knowledge and more then six year of experience. Also in inspiration for the newbie digital marketer for I have got several rewards for my great works."
            );
            setSkills([
              "Blogger  ",
              "Off-page SEO",
              "Products Hunting",
              "Sales Generation",
            ]);
          }}
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media" style={{ cursor: "pointer" }}>
              <img src="images/team/employees/atif.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <span>Atif Waheed</span>
                </h4>
                <span className="dlab-position">
                  Digital Marketing team lead
                </span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://www.linkedin.com/in/atif-waheed-17964534/"
                    target="_blank"
                    className="fa fa-linkedin"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="fa fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/atifwaheedktk"
                    target="_blank"
                    className="fa fa-twitter"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
          onClick={() => {
            setShow(true);
            setImage("/images/team/employees/adil.png");
            setName("Muhammd Adil");
            setDesignation("Senior Web Developer");
            setLink1(
              "https://www.linkedin.com/in/m-adi%D9%84-%C2%AB-kamboh-%C2%BB-52b09111b/"
            );
            setLink2("https://www.instagram.com/m_adil_kamboh/");
            setLink3("https://twitter.com/_adil_Kamboh");
            setsocialLinks(["fa-linkedin", "fa-instagram", "fa-twitter"]);
            setAbout(
              ` Software Engineer with 4+ years of experience specializing in the designing and developing innovative web / mobile interactive applications that deliver improved functionality and user experience in a very well structured code. Effectively combines technical expertise and creativity with strong business management experience to consistently deliver solid results. \n Thrives on challenges and adopts a flexible approach to every task, including a willingness to learn new skills in order to achieve results. with considerable international exposure, works effectively as part of a cross-functional team and adapts to different cultures with ease and professionalism.`
            );
            setSkills([
              "Full Stack JS Developer",
              "Data Engineer  ",
              "DevOps Engineer",
              "MERN | Firebsae | SQL",
            ]);
          }}
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media" style={{ cursor: "pointer" }}>
              <img src="images/team/employees/adil.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <span>M Adil</span>
                </h4>
                <span className="dlab-position">Senior Web Developer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://www.linkedin.com/in/m-adi%D9%84-%C2%AB-kamboh-%C2%BB-52b09111b/"
                    target="_blank"
                    className="fa fa-linkedin"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/m_adil_kamboh/"
                    target="_blank"
                    className="fa fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/_adil_Kamboh"
                    target="_blank"
                    className="fa fa-twitter"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
          onClick={() => {
            setShow(true);
            setImage("/images/team/employees/mazhar.png");
            setName("Sayyed Mazhar Ullah Jan");
            setDesignation("Web Developer");
            setLink1("https://www.linkedin.com/in/mazhar-jan-755a35196/");
            setLink2("https://www.instagram.com/this_is.mj/");
            setLink3("https://twitter.com/MazharJan15");
            setAbout(
              "Software Engineer having more than 1 and half year of experience in IT field. A highly competent, motivated and enthusiastic individual with experience of working as part of a team as well as an individual in a busy office environment. I have strong technical skills in Web Development as well as excellent interpersonal skills, enabling me to interact with a wide range of different people including customers/clients & visitors. Possessing a proven ability to generate innovative ideas and solutions to problems. Currently working as a Web developer. Always excited to try out new technologies which would help me grow as a professional and as a person."
            );
            setSkills([
              "JS Developer",
              "MERN Stack",
              "Firebase | MySQL",
              "Bootstrap | MUI | Tailwind CSS",
            ]);
          }}
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media" style={{ cursor: "pointer" }}>
              <img src="images/team/employees/mazhar.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a> Mazhar Jan</a>
                </h4>
                <span className="dlab-position">Web Developer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mazhar-jan-755a35196/"
                    target="_blank"
                    className="fa fa-linkedin"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/this_is.mj/"
                    target="_blank"
                    className="fa fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/MazharJan15"
                    target="_blank"
                    className="fa fa-twitter"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
          onClick={() => {
            setShow(true);
            setImage("/images/team/employees/aqib.png");
            setName("Muhammad Aqib");
            setDesignation("Andriod Developer");
            setLink1("https://www.facebook.com/profile.php?id=100010238443949");
            setLink2("https://www.instagram.com/aqif_khattak/");
            setLink3("https://www.linkedin.com/in/aqib-iqbal-420052175/");
            setsocialLinks(["fa-facebook", "fa-instagram", "fa-linkedin"]);
            setAbout(
              "Android Developer with more than 1 years of involvement. I  offers a wide scope of administrations for Android applications improvement Go ahead and connect with me so we can begin arranging your project."
            );
            setSkills([
              "Android Using Java",
              "Firebase Database  ",
              "adMob ads implementation,ironSource,mediation",
              "project management lead ",
            ]);
          }}
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media" style={{ cursor: "pointer" }}>
              <img src="images/team/employees/aqib.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Aqib Iqbal</a>
                </h4>
                <span className="dlab-position">Andriod Developer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://www.linkedin.com/in/aqib-iqbal-420052175/"
                    target="_blank"
                    className="fa fa-linkedin"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/aqif_khattak/"
                    target="_blank"
                    className="fa fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100010238443949"
                    target="_blank"
                    className="fa fa-facebook"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
          onClick={() => {
            setShow(true);
            setImage("/images/team/employees/zakir.png");
            setName("Zakir Ullah");
            setDesignation("UI/UX Designer");
            setLink1("https://en-gb.facebook.com/");
            setLink2("https://www.instagram.com/zakirdesigns/");
            setLink3("https://www.linkedin.com/in/zakir-ullah-068197217/");
            setsocialLinks(["fa-facebook", "fa-instagram", "fa-linkedin"]);
            setAbout(
              " Creative UI/UX Designer With 1.5+ Years Of Experience In Optimizing User Experience Through Innovative Solutions and Dynamic Interface Designs. Successful In Enhancing User Engagement For Well-Known Brands, Providing A Compelling User Experience To Improve Brand Loyalty And Customer Retention. "
            );
            setSkills([
              "Logo Design",
              "Web Design",
              "App Design",
              "Software design",
            ]);
          }}
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media" style={{ cursor: "pointer" }}>
              <img src="images/team/employees/zakir.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Zakir Ullah</a>
                </h4>
                <span className="dlab-position">UI/UX Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://en-gb.facebook.com/"
                    className="fa fa-facebook"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zakirdesigns/"
                    className="fa fa-instagram"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/zakir-ullah-068197217/"
                    className="fa fa-linkedin"
                    target="_blank"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
          onClick={() => {
            setShow(true);
            setImage("/images/team/employees/sadiq.png");
            setName("M. Sadiq");
            setDesignation("Graphics Designer");
            setLink1("https://www.facebook.com/profile.php?id=100012424505096");
            setLink2("https://twitter.com/0311_4429337");
            setLink3(
              "https://www.linkedin.com/in/muhammad-sadiq-a44541177?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIR0YctNBSvWamdn144jWaA%3D%3D"
            );
            setsocialLinks(["fa-facebook", "fa-twitter", "fa-linkedin"]);
            setAbout(
              "Graphic designer  assisting and collaborating with  designing team to complete tasks and project beyond my capabilities such as icons, logo, banner, brusher and branding work designs etc."
            );
            setSkills([
              "Typography",
              "Banner",
              "Design for Screen and Print",
              "Photo editing",
            ]);
          }}
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media" style={{ cursor: "pointer" }}>
              <img src="images/team/employees/sadiq.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>M. Sadiq</a>
                </h4>
                <span className="dlab-position">Graphics Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://www.linkedin.com/in/muhammad-sadiq-a44541177?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIR0YctNBSvWamdn144jWaA%3D%3D"
                    target="_blank"
                    className="fa fa-linkedin"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/0311_4429337"
                    target="_blank"
                    className="fa fa-twitter"
                  ></a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100012424505096"
                    target="_blank"
                    className="fa fa-facebook"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
          onClick={() => {
            setShow(true);
            setImage("/images/team/employees/hamza2.png");
            setName("Hamza Khattak");
            setDesignation("  Content Creator /Shopify Expert");
            setLink1("https://www.facebook.com/hamza.writes.1042");
            setLink2("https://www.instagram.com/hamxoo_974/");
            setLink3("https://twitter.com/hamzakhattak974");
            setsocialLinks(["fa-facebook", "fa-instagram", "fa-twitter"]);
            setAbout(
              "Experienced Blogger with a demonstrated history of working in the information technology and services industry. Skilled in Research, English, Networking, and Media Strategy. Besides, I am Shopify Expert and have strong affiliation with businesses. I enjoy helping businesses create an online presence that accurately represents their brand. If you're looking for someone who can help you write SEO friendly, eye-catching, and engaging content or set up an online store, then please get in touch. I'd be happy to help."
            );
            setSkills([
              "SEO Friendly Content",
              "Off-page SEO",
              "Products Hunting",
              "Sales Generation",
            ]);
          }}
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media" style={{ cursor: "pointer" }}>
              <img src="images/team/employees/hamza2.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Hamza Khattak</a>
                </h4>
                <span className="dlab-position">
                  Content Creator Shopify Expert{" "}
                </span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://www.facebook.com/hamza.writes.1042"
                    target="_blank"
                    className="fa fa-facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/hamxoo_974/"
                    target="_blank"
                    className="fa fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/hamzakhattak974"
                    target="_blank"
                    className="fa fa-twitter"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.7s"
          onClick={() => {
            setShow(true);
            setImage("/images/team/employees/basit.png");
            setName("Basit Ali");
            setDesignation("Andriod Developer");
            setLink1("https://facebook.com/justbasitali");
            setLink2("https://www.linkedin.com/in/basit-ali-5718a2201/");
            setLink3("https://twitter.com/justbasitali");
            setsocialLinks(["fa-facebook", "fa-linkedin", "fa-twitter"]);
            setAbout(
              "Android Developer with more than 1 year of experience. I  offers a wide scope of administrations for Android applications improvement Go ahead and connect with me so we can begin arranging your project."
            );
            setSkills([
              "Android Using Kotlin/Java",
              "Firebase Database  ",
              "adMob ads implementation,ironSource,mediation",
              "project management",
            ]);
          }}
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media" style={{ cursor: "pointer" }}>
              <img src="images/team/employees/basit.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Basit Ali</a>
                </h4>
                <span className="dlab-position">Andriod Developer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://twitter.com/justbasitali"
                    className="fa fa-twitter"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/justbasitali"
                    className="fa fa-facebook"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/basit-ali-5718a2201/"
                    className="fa fa-linkedin"
                    target="_blank"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.8s"
          onClick={() => {
            setShow(true);
            setImage("/images/team/employees/hamd.png");
            setName("Hamd Ullah");
            setDesignation("Web Developer");
            setLink1("https://www.facebook.com/hamdullah.kha");
            setLink2("https://www.linkedin.com/in/hamd-ullah-7747b6218/");
            setLink3("https://twitter.com/login?lang=en");
            setsocialLinks(["fa-facebook", "fa-linkedin", "fa-twitter"]);
            setAbout(
              "Software Engineer  with 1 years of experience in web designing and web development that deliver improved functionality and user experience in a very well structured code."
            );
            setSkills([
              "React js",
              "Next js",
              "Firebase | SQL",
              "MUI | React Bootstrap",
            ]);
          }}
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media" style={{ cursor: "pointer" }}>
              <img src="images/team/employees/hamd.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Hamd ullah</a>
                </h4>
                <span className="dlab-position">Web Developer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://www.linkedin.com/in/hamd-ullah-7747b6218/"
                    className="fa fa-linkedin"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/hamdullah.kha"
                    className="fa fa-facebook"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/login?lang=en"
                    className="fa fa-twitter"
                    target="_blank"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.9s"
          onClick={() => {
            setShow(true);
            setImage("/images/team/employees/asad.png");
            setName("Syed Asad");
            setDesignation("Web Developer");
            setLink1("https://www.facebook.com/syedasad.shah.16100");
            setLink2("https://www.linkedin.com/in/syed-asad-4b3776234/");
            setLink3(
              "https://twitter.com/QC6UCZwXMPDc2rd?t=lPOHSybDpSJJPetEmqSEBA&s=08"
            );
            setsocialLinks(["fa-facebook", "fa-linkedin", "fa-twitter"]);
            setAbout(
              "Software Engineer  with 1 years of experience in web designing and web development that deliver improved functionality and user experience in a very well structured code."
            );
            setSkills([
              "React js",
              "Web developer",
              "Html | Css ",
              "Bootstrap",
            ]);
          }}
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media" style={{ cursor: "pointer" }}>
              <img src="images/team/employees/asad.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <span>Syed Asad</span>
                </h4>
                <span className="dlab-position">Web Developer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a
                    href="https://www.facebook.com/syedasad.shah.16100"
                    className="fa fa-facebook"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/syed-asad-4b3776234/"
                    className="fa fa-linkedin"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/QC6UCZwXMPDc2rd?t=lPOHSybDpSJJPetEmqSEBA&s=08"
                    className="fa fa-twitter"
                    target="_blank"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
      <Modal show={show} className="mt-5" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={image} width={500} height={500} />

          <span
            className="fw-bold "
            style={{
              color: "#FF8700",
            }}
          >
            <h4 className="mb-0 mt-3">{name}</h4>
            <span className="dlab-position">{designation}</span>
          </span>
          <span>
            <br />
            {about}
          </span>
          <h5 className="mt-1">Skills</h5>
          <ul style={{ listStyleType: "square" }}>
            <li>
              <i
                class="fa fa-solid fa-caret-right mx-2"
                style={{ color: "#FF8700", fontSize: "20px" }}
              ></i>
              {skills[0]}
            </li>
            <li>
              <i
                class="fa fa-solid fa-caret-right mx-2"
                style={{ color: "#FF8700", fontSize: "20px" }}
              ></i>
              {skills[1]}
            </li>
            <li>
              <i
                class="fa fa-solid fa-caret-right mx-2"
                style={{ color: "#FF8700", fontSize: "20px" }}
              ></i>
              {skills[2]}
            </li>
            <li>
              <i
                class="fa fa-solid fa-caret-right mx-2"
                style={{ color: "#FF8700", fontSize: "20px" }}
              ></i>
              {skills[3]}
            </li>
          </ul>
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: "center" }}>
          <ul className="dlab-social-icon primary-light">
            <li>
              <a
                href={link1}
                className={`fa ${socialLinks[0]}`}
                target="_blank"
              ></a>
            </li>
            <li>
              <a
                href={link2}
                className={`fa ${socialLinks[1]}`}
                target="_blank"
              ></a>
            </li>
            <li>
              <a
                href={link3}
                className={`fa ${socialLinks[2]}`}
                target="_blank"
              ></a>
            </li>
          </ul>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TeamSlider;
