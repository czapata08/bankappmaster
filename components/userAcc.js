import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  Row,
  Col,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/user.context";

function Example(props) {
  const { user } = useAuth();
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const styles = {
    card: {
      width: "159px",
      height: "102px",
      background: " #00AEEF",
      boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "20px",
      color: "#ffffff",
    },
    cardTitle: {
      fontSize: "12px",
      lineHeight: "17px",
      color: "#ffffff",
      paddingTop: "7px",
      paddingLeft: "10px",
    },
  };

  //need accounts to display account number and balance
  // let {accounts} = user

  return (
    <div>
      <Accordion
        open={open}
        toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId='1'>Bank Accounts</AccordionHeader>
          <AccordionBody accordionId='1'>
            <Container>
              <Row className='border-bottom'>
                <p>Checking ...8080</p>
                <p className='fs-2 text-end'>$103.16</p>
                <p className='fs-6 text-end'> Available Balance</p>
              </Row>
              <Row className='border-bottom py-3'>
                <p>Savings ...5234</p>
                <p className='fs-2 text-end'>$1000.16</p>
                <p className='fs-6 text-end'> Available Balance</p>
              </Row>
            </Container>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId='2'>Credit Cards</AccordionHeader>
          <AccordionBody accordionId='2'>
            <div style={styles.card}>
              <Row>
                <Col>
                  <p style={styles.cardTitle}>Fake Card</p>{" "}
                </Col>
                <Col>
                  <p style={styles.cardTitle}>...8880</p>
                </Col>
              </Row>
              <Row>
                <Col className='px-4 py-2'>
                  <p className='fs-5'> $80,000</p>
                </Col>
                <Col
                  className='py-4'
                  style={{ color: "rgb(39,99,245)" }}>
                  <FontAwesomeIcon icon={faCreditCard} />
                </Col>
              </Row>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Example;
