import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>hello</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="w-[100%] flex text-justify flex-col gap-2 text-[17px] text-gray-700 mb-5">
              <div className="">
                Company X ("X") serves as an online marketplace for sellers and
                buyers to engage in the sale and purchase of products or
                services. X acts solely as an intermediary, facilitating
                communication between sellers and buyers for the purpose of
                conducting transactions.
              </div>
              <div>
                Please note that X does not assume any responsibility or
                liability for the products or services listed on its platform.
                The sellers are solely responsible for the accuracy, quality,
                legality, and fitness for purpose of their offerings. Similarly,
                buyers are responsible for verifying the suitability and
                condition of the products or services before making a purchase.
              </div>
              <div>
                X does not provide any warranty, explicit or implied, for the
                products or services offered on its platform. Any warranties or
                guarantees provided by the sellers are strictly between the
                sellers and buyers, and X shall not be a party to such
                arrangements.
              </div>
              <div>
                Furthermore, X shall not be liable for any disputes, claims,
                damages, losses, or any other liabilities arising from the sale
                or purchase of products or services through its platform. Any
                conflicts or disagreements between sellers and buyers are to be
                resolved solely between the parties involved.
              </div>
              <div>
                Users of the platform must exercise due diligence and caution
                when dealing with other users. It is recommended to thoroughly
                review the seller's and buyer's information, product
                descriptions, and feedback before proceeding with any
                transactions.
              </div>
              <div>
                By using X's platform, both sellers and buyers agree to hold X
                harmless and release it from any and all claims, demands, or
                liabilities related to transactions conducted through the
                platform. Company X strongly advises users to seek legal counsel
                or professional advice for any matters related to the buying or
                selling of products or services on its platform. This disclaimer
                forms an integral part of the terms of use of Company X's
                platform and applies to all users engaging in transactions
                through the platform.
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
