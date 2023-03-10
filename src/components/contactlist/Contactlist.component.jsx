import "./contactlist.component.css";
import { useParams, NavLink } from "react-router-dom";

const ContactList = ({ localValue }) => {

  //acending Sort by fname
  localValue.sort((a, b) => {
    if (a.fname > b.fname) {
      return 1;
    } else {
      return -1;
    }
  });


  return (
    <div className="contact-container">
      {localValue.map((data) => (
        <NavLink
          to={`/detailPage/${data.email}`}
          style={{ textDecoration: "none" }}
          key={data.email}
        >
          <section className="contactcard-container">
            <h3 className="logo">{data.fname.slice(0, 1)}</h3>
            <h3 className="name">{`${data.fname} ${data.lname} `}</h3>
          </section>
        </NavLink>
      ))}
    </div>
  );
};

export default ContactList;
