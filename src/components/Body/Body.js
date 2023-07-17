import React, { useState } from "react";
import Services from "../Services/service";
import jsonData from "../../Constants/Services.json";
import Modal from "../Popup/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ec2124;
  border-radius: 10px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 20px 20px 20px 20px;
  outline: none;
  padding: 25px 145px 43px 134px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  @media screen and (max-width: 950px) {
    font-size: 12px;
  }
`;
const StyledButtonOutline = styled.button`
  background-color: transparent;
  // border-color: #ec2124;
  border: 1px solid #ec2124;
  border-radius: 10px;
  // border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 20px 20px 20px 20px;
  // outline: none;
  padding: 25px 125px 43px 134px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  @media screen and (max-width: 950px) {
    font-size: 14px;
  }
`;
const Body = () => {
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const toggleModal = (e) => {
    setSelectedId(e.target.id);

    console.log(selectedId);
    setModal(!modal);
  };
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  // console.log(elem);
  // console.log("here is scroll Div");
  function handleScrollToLearnMore() {
    const elem = document.getElementById("myDiv")?.offsetTop;
    // console.log(document.body.offsetHeight);
    console.log(elem.offsetHeight);
    window.scroll({
      top: elem,
      left: 0,
      behavior: "smooth",
    });
  }
  const handleClick = (e) => {
    // console.log(e.target);
    setModal(true);
    setSelectedId(e.target.id);
  };
  //   const { autoShopHeadings } = jsonData.autoShopHeadings;
  //   console.log(jsonData);
  //   console.log("here are the auto");
  const filteredHeadings = jsonData.autoShopHeadings.filter(
    (heading) => heading.id == selectedId
  );
  // console.log(filteredHeadings);

  return (
    <section>
      <FontAwesomeIcon icon="coffee" />
      <h2 className="white-text">
        Timely and Trustworthy Mechanics you can{" "}
        <span className="depend-on">depend on</span>
      </h2>
      <p className="white-text paddingLeft paddingRight">
        We specialize in contractor's fleets so if you're a Fedex, amazon, DHL
        or Ontrac contractor we can dispatch our truck at night to take care of
        their maintenance needs when and where the trucks are parked!
      </p>
      <div className="buttons">
        <StyledButton onClick={handleScroll}>Contact Us</StyledButton>
        <StyledButtonOutline onClick={handleScrollToLearnMore}>
          Learn More
        </StyledButtonOutline>
      </div>
      <Services></Services>
      <div>
        <div className="containerGrayOutside">
          <h2 className="services-text">
            Here are some of the services we offer
          </h2>

          <div className="containerGray">
            {/* <div className="card">
            A/C Compressor Replacement
            <button onClick={toggleModal}>More Details</button>
            <Modal
              toggleModal={toggleModal}
              modal={modal}
              autoShopHeadings={jsonData.autoShopHeadings}
            ></Modal>
          </div> */}
            {jsonData.autoShopHeadings.map((heading) => {
              return (
                <>
                  <button
                    className="card"
                    key={heading.id}
                    id={heading.id}
                    onClick={handleClick}
                  >
                    <FontAwesomeIcon
                      icon={faWrench}
                      className="icon-fa"
                      // flip="horizontal"
                      // style={{ border: "1px solid pink" }}
                    />
                    {heading.title}
                  </button>

                  {/* <Modal
                  key={heading.id}
                  modal={modal}
                  toggleModal={toggleModal}
                  autoShopHeading={title}
                  autoShopInformation={information}
                ></Modal> */}
                </>
              );
            })}

            {filteredHeadings.map((heading) => (
              <Modal
                key={heading.id}
                modal={modal}
                toggleModal={toggleModal}
                title={heading.title}
                information={heading.information}
              />
            ))}
            {/* <Modal
            modal={modal}
            autoShopHeading={filteredHeadings.title}
            autoShopInformation={filteredHeadings.information}
            toggleModal={toggleModal}
          ></Modal> */}
          </div>
        </div>
      </div>
      {/* <div id="myDiv">hello</div> */}
      <h2 className="white-text paddingTop" id="myDiv">
        About Us
      </h2>
      <p className="white-text paddingLeft paddingRight">
        We are a full service auto shop specializing in fleet maintenance and
        repair for step vans. We are a family-owned business that takes care of
        your vehicle as if it were our own. We proudly service the Orange County
        / Los Angeles area and can dispatch our trucks to you so you can get
        your fleet fixed quickly, without needing to go anywhere. Call us today
        or contact us below for a free quote.
      </p>

      <h2 className="white-text paddingTop">Reliability is our #1 Priority</h2>
      <p className="white-text paddingLeft paddingRight">
        By bringing top quality, convenient service to fleets, we enable you to
        avoid disruption, unnecessary expenses, and less downtime. We offer
        services on a range of vehicles spanning from step vans to sedans and
        trucks.
      </p>
      {/* <img src="bus-crop.png" alt="" /> */}
      <p className="white-text paddingLeft paddingRight">
        Regular fleet service ensure your fleet will remain in great condition.
        The crucial element for longevity and reliability lies in routine
        maintenance, not only saving money but enhancing the safety of your team
        members as well.
      </p>
      {/* <h2>Efficiency</h2>
      <p>On-site service; no need to transport vehicle or wait.</p>
      <h2>Cost Savings</h2>
      <p>Competitive pricing and time saved.</p>
      <h2>Quality service</h2>
      <p>Highly trained technicians; 12-month/12k-mile warranty.</p>
      <h2>No downtime</h2>
      <p>Overnight maintenance and repairs from 8 PM to 5 AM.</p>
      <h2>A mobile fleet solution that works</h2>
      <p>
        Did you know downtime costs a fleet an average of $488 to $760 per day,
        per vehicle? That's in addition to towing fees. Bypass the hassle, and
        let our expert mechanics come to you.
      </p>
      <h2>Full-Service Repair Vans</h2>
      <p>
        Our vans come fully equipped with tools, diagnostic equipment, fluids,
        and parts needed to complete repairs. Vans are custom-built and designed
        to accommodate specialized equipment and parts, hazardous materials, and
        safe recycling.
      </p>
      <h2>200+ Services Performed by Expert Technicians</h2>
      <p>
        Our technicians are skilled full-time employees, many holding ASE or
        Master certifications. They are equipped with a RepairSmith van,
        upfitted with top-of-the-line tools and equipment to complete services
        including preventative maintenance, mechanical repairs, tire
        installations, light diagnostics, and aftermarket upfitter warranty
        repairs.
      </p>
      <h2>Various Types of Fleets</h2>
      <p>
        We service many B2B customers nationwide, some of which include
        corporate fleets, rental car companies, last-mile delivery & logistics,
        commercial fleets, nonprofits, as well as partnerships with automotive
        retailers and manufacturers.
      </p>
      <h2>Five-star experience for fleet operators</h2>
      <p>
        By bringing top-quality, convenient service direct to fleets,
        RepairSmith enables fleet managers to avoid service disruption,
        unnecessary expenses, and the headaches of traditional fleet service.
      </p> */}
    </section>
  );
};

export default Body;
