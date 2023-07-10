import React, { useState } from "react";
import Services from "../Services/service";
import jsonData from "../../Constants/Services.json";
import Modal from "../Popup/modal";
const Body = () => {
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const toggleModal = (e) => {
    setSelectedId(e.target.id);

    console.log(selectedId);
    setModal(!modal);
  };
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
  console.log(filteredHeadings);

  return (
    <section>
      <h2>
        Timely and Trustworthy Mechanics you can{" "}
        <span className="depend-on">depend on</span>
      </h2>
      <p>
        We specialize in contractor's fleets so if you're a Fedex, amazon, DHL
        or Ontrac contractor we can dispatch our truck at night to take care of
        their maintenance needs when and where the trucks are parked!
      </p>
      <button>Contact us</button>
      <button>Learn More</button>
      <Services></Services>
      <div>
        <div className="containerGrayOutside">
          Here are some of the services we offer
        </div>
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
          <div className="card">I am a card3</div>
          <div className="card">I am a card4</div>
          <div className="card">I am a card5</div>
          <div className="card">I am a card5</div>
          <div className="card">I am a card7</div>
          <div className="card">I am a card8</div>
        </div>
      </div>
      <h2>Efficiency</h2>
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
      </p>
    </section>
  );
};

export default Body;
