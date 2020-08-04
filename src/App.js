import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Form, Header, Dropdown } from "semantic-ui-react";
import { generateFromData } from "./TEMPLATE";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gitProfile, setGitProfile] = useState("");
  const [website, setWebsite] = useState("");
  const [area, setArea] = useState("");
  const [companyName, setCompanyname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [contactName, setContactName] = useState("");
  const [type, setType] = useState("recruiter");

  const typeOptions = [
    {
      key: "recruiter",
      text: "Recruiter",
      value: "Recruiter",
    },
    {
      key: "engineer",
      text: "Engineer",
      value: "Engineer",
    },
    {
      key: "executive",
      text: "Executive",
      value: "Executive",
    },
    {
      key: "thanks",
      text: "Thank You",
      value: "Thank You",
    },
    {
      key: "rebuttal",
      text: "Rebuttal",
      value: "Rebuttal",
    },
  ];

  const renderSubjectLine = () => {
    switch (type) {
      case "recruiter":
        return `Interested in ${jobTitle} at ${companyName}`;
      case "engineer":
        return `Request: Informational Interview about ${companyName}`;
      case "executive":
        return `I'd like to join your engineering team`;
      case "thank you":
        return `Thank You!`;
      case "rebuttal":
        return `In Response: ${jobTitle} at ${companyName}`;
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="sticky">
        <Header as="h3" block>
          Outreach Buddy
        </Header>
      </div>
      <Container
        className="App"
        fluid
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "40% 60%",
        }}
      >
        <Form style={{ display: "flex", margin: "20px" }}>
          <Container textAlign="left">
            <h2>Company Information</h2>
            <Form.Field>
              <label>Contact Name</label>
              <input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Contact Name"
                type="text"
              />
            </Form.Field>
            <Form.Field>
              <label>Contact Type</label>
              <Dropdown
                placeholder="Select Contact Type"
                fluid
                selection
                options={typeOptions}
                onChange={(e, result) =>
                  setType(result.value.toLocaleLowerCase())
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Company Name</label>
              <input
                value={companyName}
                onChange={(e) => setCompanyname(e.target.value)}
                type="text"
                placeholder="Company Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Job Title</label>
              <input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                type="text"
                placeholder="Job Title"
              />
            </Form.Field>
            <Form.Field>
              <label>Keywords</label>
              <input
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                type="text"
                placeholder="Keywords"
              />
            </Form.Field>

            <h2>Personal Information</h2>
            <Form.Field>
              <label>First Name</label>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="First Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
            </Form.Field>
            <Form.Field>
              <label>Phone Number</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                placeholder="(555)-555-5555"
              />
            </Form.Field>
            <Form.Field>
              <label>Location</label>
              <input
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="text"
                placeholder="Location"
              />
            </Form.Field>
            <Form.Field>
              <label>Github Username</label>
              <input
                value={gitProfile}
                onChange={(e) => setGitProfile(e.target.value)}
                type="text"
                placeholder="Github Username"
              />
            </Form.Field>
            <Form.Field>
              <label>Website</label>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                type="text"
                placeholder="Website Address"
              />
            </Form.Field>
          </Container>
        </Form>
        <Container style={{ position: "relative" }}>
          <Header
            className="cover-letter"
            as="h3"
            block
            style={{ margin: "20px", zIndex: 999 }}
          >
            Subject: {renderSubjectLine()}
          </Header>
          <textarea
            className="cover-letter"
            style={{ margin: "20px", width: "80%", height: "100%" }}
            value={generateFromData({
              userName: firstName + " " + lastName,
              email,
              phoneNumber,
              gitProfile,
              website,
              area,
              contactName,
              companyName,
              jobTitle,
              keywords,
              type,
            })}
            wrap="true"
            onChange={() => {}}
          />
        </Container>
      </Container>
    </div>
  );
}

export default App;
