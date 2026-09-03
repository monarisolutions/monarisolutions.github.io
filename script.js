/* =========================================
   MONARI SOLUTIONS
   Cascading Enquiry System
========================================= */

const serviceData = {

  insurance: {

    name: "Insurance",

    services: {

      motor: {
        name: "Motor / Car Insurance",
        actions: [
          "Get a quotation",
          "Compare cover options",
          "Renew my insurance",
          "Ask a question"
        ]
      },

      life: {
        name: "Life Insurance",
        actions: [
          "Get a life insurance quotation",
          "Family protection",
          "Life cover advice",
          "Ask a question"
        ]
      },

      education: {
        name: "Education Policy",
        actions: [
          "Get an education policy quotation",
          "Plan for my child's education",
          "Education savings advice",
          "Ask a question"
        ]
      },

      medical: {
        name: "Medical Insurance",
        actions: [
          "Get a quotation",
          "Compare options",
          "Ask a question"
        ]
      },

      family: {
        name: "Family Protection",
        actions: [
          "Get protection advice",
          "Get a quotation",
          "Review my current cover"
        ]
      },

      funeral: {
        name: "Last Expense / Funeral Cover",
        actions: [
          "Get a quotation",
          "Ask about cover",
          "Review existing cover"
        ]
      },

      accident: {
        name: "Personal Accident Cover",
        actions: [
          "Get a quotation",
          "Ask about cover"
        ]
      },

      business: {
        name: "Business Insurance",
        actions: [
          "Get a quotation",
          "Discuss business risks",
          "Review existing cover"
        ]
      },

      property: {
        name: "Domestic / Property Insurance",
        actions: [
          "Get a quotation",
          "Ask about cover"
        ]
      },

      travel: {
        name: "Travel Insurance",
        actions: [
          "Get a quotation",
          "Ask about cover"
        ]
      }

    }

  },


  financial: {

    name: "Savings & Investment",

    services: {

      mmf: {
        name: "Money Market Fund",
        actions: [
          "Open a Money Market Fund account",
          "Learn how MMF works",
          "Investment advice",
          "Ask a question"
        ]
      },

      savings: {
        name: "Savings Plan",
        actions: [
          "Start a savings plan",
          "Get savings advice",
          "Ask a question"
        ]
      },

      investment: {
        name: "Investment Solutions",
        actions: [
          "Explore investment options",
          "Investment advice",
          "Ask a question"
        ]
      },

      educationSavings: {
        name: "Education Savings",
        actions: [
          "Plan for education",
          "Get savings advice",
          "Ask a question"
        ]
      },

      financialPlanning: {
        name: "Financial Planning",
        actions: [
          "Book a financial consultation",
          "Review my finances",
          "Create a financial plan"
        ]
      }

    }

  },


  pension: {

    name: "Pension & Retirement",

    services: {

      pension: {
        name: "Pension Plan",
        actions: [
          "Start a pension plan",
          "Learn about pension options",
          "Ask a question"
        ]
      },

      retirement: {
        name: "Retirement Planning",
        actions: [
          "Plan for retirement",
          "Review my retirement plan",
          "Get retirement advice"
        ]
      },

      contributions: {
        name: "Pension Contribution Advice",
        actions: [
          "Determine how much I should contribute",
          "Review my contributions",
          "Ask a question"
        ]
      },

      individual: {
        name: "Individual Retirement Planning",
        actions: [
          "Create a retirement plan",
          "Get retirement advice",
          "Ask a question"
        ]
      }

    }

  },


  technology: {

    name: "Technology & IT",

    services: {

      computer: {
        name: "Computer Purchase / Sourcing",
        actions: [
          "Buy a computer",
          "Find a laptop",
          "Find a desktop",
          "Get advice before buying"
        ]
      },

      repair: {
        name: "Computer Repair & Troubleshooting",
        actions: [
          "Computer troubleshooting",
          "Windows problem",
          "Software problem",
          "General repair"
        ]
      },

      software: {
        name: "Software Installation",
        actions: [
          "Install software",
          "Configure software",
          "Troubleshoot software"
        ]
      },

      networking: {
        name: "Networking & Connectivity",
        actions: [
          "Set up a network",
          "Internet/Wi-Fi problem",
          "Business networking"
        ]
      },

      cloud: {
        name: "Cloud Solutions",
        actions: [
          "Cloud consultation",
          "AWS guidance",
          "Cloud migration advice",
          "Cloud architecture advice"
        ]
      },

      consulting: {
        name: "Technology Consulting",
        actions: [
          "Technology consultation",
          "Business technology advice",
          "Digital transformation advice"
        ]
      },

      businessIT: {
        name: "Business IT Support",
        actions: [
          "Business IT support",
          "Set up IT for my business",
          "Ongoing IT support"
        ]
      }

    }

  }

};


/* =========================================
   STEP 1 → STEP 2
========================================= */

function updateServiceTypes() {

  const category =
    document.getElementById("serviceCategory").value;

  const serviceContainer =
    document.getElementById("serviceTypeContainer");

  const serviceSelect =
    document.getElementById("serviceType");

  const actionContainer =
    document.getElementById("actionContainer");

  const detailsContainer =
    document.getElementById("detailsContainer");

  const customerContainer =
    document.getElementById("customerContainer");

  const resetContainer =
    document.getElementById("resetContainer");


  serviceSelect.innerHTML =
    '<option value="">Select a service</option>';

  actionContainer.classList.add("hidden");
  detailsContainer.classList.add("hidden");
  customerContainer.classList.add("hidden");
  resetContainer.classList.add("hidden");


  if (!category) {

    serviceContainer.classList.add("hidden");

    updateSteps(1);

    return;
  }


  const services =
    serviceData[category].services;


  Object.keys(services).forEach(key => {

    const option =
      document.createElement("option");

    option.value = key;
    option.textContent = services[key].name;

    serviceSelect.appendChild(option);

  });


  serviceContainer.classList.remove("hidden");

  updateSteps(2);
}


/* =========================================
   STEP 2 → STEP 3
========================================= */

function updateServiceActions() {

  const category =
    document.getElementById("serviceCategory").value;

  const service =
    document.getElementById("serviceType").value;


  const actionContainer =
    document.getElementById("actionContainer");

  const actionSelect =
    document.getElementById("serviceAction");


  const detailsContainer =
    document.getElementById("detailsContainer");

  const customerContainer =
    document.getElementById("customerContainer");


  actionSelect.innerHTML =
    '<option value="">Select an option</option>';

  detailsContainer.classList.add("hidden");
  customerContainer.classList.add("hidden");


  if (!service) {

    actionContainer.classList.add("hidden");

    updateSteps(2);

    return;
  }


  const actions =
    serviceData[category]
      .services[service]
      .actions;


  actions.forEach(action => {

    const option =
      document.createElement("option");

    option.value = action;
    option.textContent = action;

    actionSelect.appendChild(option);

  });


  actionContainer.classList.remove("hidden");

  updateSteps(3);
}


/* =========================================
   STEP 3 → DYNAMIC FORM
========================================= */

function showDetailsForm() {

  const category =
    document.getElementById("serviceCategory").value;

  const service =
    document.getElementById("serviceType").value;

  const action =
    document.getElementById("serviceAction").value;


  const detailsContainer =
    document.getElementById("detailsContainer");

  const customerContainer =
    document.getElementById("customerContainer");

  const resetContainer =
    document.getElementById("resetContainer");


  detailsContainer.innerHTML = "";


  if (!action) {

    detailsContainer.classList.add("hidden");
    customerContainer.classList.add("hidden");
    resetContainer.classList.add("hidden");

    return;
  }


  let html = "";


  /* MOTOR */

  if (service === "motor") {

    html = `
      <h3>Vehicle Details</h3>

      <p>
        Give me a few details about the vehicle so I can
        understand what you need.
      </p>

      <div class="form-grid">

        <label>
          Vehicle Make
          <input id="vehicleMake"
                 type="text"
                 placeholder="e.g. Toyota">
        </label>

        <label>
          Vehicle Model
          <input id="vehicleModel"
                 type="text"
                 placeholder="e.g. Fielder">
        </label>

        <label>
          Year of Manufacture
          <input id="vehicleYear"
                 type="number"
                 placeholder="e.g. 2018">
        </label>

        <label>
          Registration Number
          <input id="vehicleReg"
                 type="text"
                 placeholder="e.g. KDA 123A">
        </label>

      </div>

      <label>
        Preferred Cover
        <select id="motorCover">
          <option value="">Select cover</option>
          <option>Comprehensive</option>
          <option>Third Party</option>
          <option>Not sure - I need advice</option>
        </select>
      </label>
    `;

  }


  /* LIFE */

  else if (service === "life") {

    html = `
      <h3>Life Insurance Details</h3>

      <p>
        Tell me a little about the type of protection you are
        looking for.
      </p>

      <label>
        Main Purpose
        <select id="lifePurpose">
          <option value="">Select one</option>
          <option>Family protection</option>
          <option>Income protection</option>
          <option>Education planning</option>
          <option>Investment & protection</option>
          <option>Retirement planning</option>
          <option>Not sure - I need advice</option>
        </select>
      </label>

      <label>
        Approximate Monthly Budget
        <input id="lifeBudget"
               type="text"
               placeholder="e.g. Ksh 5,000">
      </label>
    `;

  }


  /* EDUCATION */

  else if (service === "education") {

    html = `
      <h3>Education Planning</h3>

      <p>
        Help me understand your education savings goal.
      </p>

      <div class="form-grid">

        <label>
          Child's Current Age
          <input id="childAge"
                 type="number"
                 placeholder="e.g. 5">
        </label>

        <label>
          Target Education Age
          <input id="educationAge"
                 type="number"
                 placeholder="e.g. 18">
        </label>

        <label>
          Desired Monthly Saving
          <input id="educationSaving"
                 type="text"
                 placeholder="e.g. Ksh 10,000">
        </label>

        <label>
          Contribution Frequency
          <select id="educationFrequency">
            <option value="">Select</option>
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Annually</option>
            <option>Not sure</option>
          </select>
        </label>

      </div>
    `;

  }


  /* MMF */

  else if (service === "mmf") {

    html = `
      <h3>Money Market Fund</h3>

      <p>
        Tell me what you would like to know about MMF.
      </p>

      <label>
        Approximate Amount You Want To Invest
        <input id="mmfAmount"
               type="text"
               placeholder="e.g. Ksh 100,000">
      </label>

      <label>
        Main Goal
        <select id="mmfGoal">
          <option value="">Select</option>
          <option>Short-term savings</option>
          <option>Emergency fund</option>
          <option>Investment</option>
          <option>Regular income</option>
          <option>Not sure</option>
        </select>
      </label>
    `;

  }


  /* PENSION */

  else if (
    service === "pension" ||
    service === "retirement" ||
    service === "contributions" ||
    service === "individual"
  ) {

    html = `
      <h3>Retirement Planning</h3>

      <p>
        A few details will help me understand your retirement goal.
      </p>

      <div class="form-grid">

        <label>
          Your Age
          <input id="clientAge"
                 type="number"
                 placeholder="e.g. 35">
        </label>

        <label>
          Desired Retirement Age
          <input id="retirementAge"
                 type="number"
                 placeholder="e.g. 60">
        </label>

        <label>
          Current Monthly Contribution
          <input id="pensionContribution"
                 type="text"
                 placeholder="e.g. Ksh 10,000">
        </label>

        <label>
          Desired Monthly Contribution
          <input id="desiredContribution"
                 type="text"
                 placeholder="e.g. Ksh 20,000">
        </label>

      </div>
    `;

  }


  /* COMPUTER */

  else if (service === "computer") {

    html = `
      <h3>Computer Requirements</h3>

      <p>
        Tell me what type of computer you are looking for.
      </p>

      <label>
        Computer Type
        <select id="computerType">
          <option value="">Select</option>
          <option>Laptop</option>
          <option>Desktop</option>
          <option>Gaming Computer</option>
          <option>Business Computer</option>
          <option>Not sure</option>
        </select>
      </label>

      <label>
        Approximate Budget
        <input id="computerBudget"
               type="text"
               placeholder="e.g. Ksh 50,000">
      </label>

      <label>
        What will you use it for?
        <textarea id="computerUse"
                  placeholder="e.g. Office work, school, design, business..."></textarea>
      </label>
    `;

  }


  /* DEFAULT */

  else {

    html = `
      <h3>Tell me a little more</h3>

      <p>
        Give me any information that will help me understand
        what you need.
      </p>

      <label>
        Your Requirements
        <textarea id="serviceRequirements"
                  placeholder="Tell me what you need..."></textarea>
      </label>
    `;

  }


  detailsContainer.innerHTML = html;

  detailsContainer.classList.remove("hidden");

  customerContainer.classList.remove("hidden");

  resetContainer.classList.remove("hidden");
}


/* =========================================
   STEP INDICATOR
========================================= */

function updateSteps(currentStep) {

  const steps = [
    document.getElementById("step1Indicator"),
    document.getElementById("step2Indicator"),
    document.getElementById("step3Indicator")
  ];


  steps.forEach((step, index) => {

    if (index < currentStep) {

      step.classList.add("active");

    } else {

      step.classList.remove("active");

    }

  });

}


/* =========================================
   COLLECT FORM VALUES
========================================= */

function collectDynamicDetails() {

  const inputs =
    document.querySelectorAll(
      "#detailsContainer input, #detailsContainer select, #detailsContainer textarea"
    );


  let details = [];


  inputs.forEach(input => {

    if (input.value.trim() !== "") {

      const label =
        input.parentElement.querySelector("label") ||
        input.previousElementSibling;


      let fieldName =
        input.id
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, str => str.toUpperCase());


      details.push(
        fieldName + ": " + input.value.trim()
      );

    }

  });


  return details.join("\n");

}


/* =========================================
   SEND WHATSAPP
========================================= */

function sendCascadingWhatsApp(event) {

  event.preventDefault();


  const category =
    document.getElementById("serviceCategory").value;

  const service =
    document.getElementById("serviceType").value;

  const action =
    document.getElementById("serviceAction").value;


  const name =
    document.getElementById("customerName").value.trim();

  const phone =
    document.getElementById("customerPhone").value.trim();

  const additional =
    document.getElementById("additionalInfo").value.trim();


  const categoryName =
    serviceData[category].name;

  const serviceName =
    serviceData[category]
      .services[service]
      .name;


  const dynamicDetails =
    collectDynamicDetails();


  let message =
`Hello Stephen, I found your Monari Solutions website and would like assistance.

AREA:
${categoryName}

SERVICE:
${serviceName}

REQUEST:
${action}

NAME:
${name}

PHONE:
${phone}
`;


  if (dynamicDetails) {

    message +=
`\nDETAILS:
${dynamicDetails}
`;

  }


  if (additional) {

    message +=
`\nADDITIONAL INFORMATION:
${additional}
`;

  }


  const whatsappURL =
    "https://wa.me/254728623457?text=" +
    encodeURIComponent(message);


  window.open(
    whatsappURL,
    "_blank",
    "noopener"
  );

}


/* =========================================
   RESET
========================================= */

function resetEnquiry() {

  document.getElementById("serviceCategory").value = "";

  document.getElementById("serviceType").innerHTML =
    '<option value="">Select a service</option>';

  document.getElementById("serviceAction").innerHTML =
    '<option value="">Select an option</option>';


  document.getElementById("serviceTypeContainer")
    .classList.add("hidden");

  document.getElementById("actionContainer")
    .classList.add("hidden");

  document.getElementById("detailsContainer")
    .classList.add("hidden");

  document.getElementById("customerContainer")
    .classList.add("hidden");

  document.getElementById("resetContainer")
    .classList.add("hidden");


  updateSteps(1);


  document.getElementById("contact")
    .scrollIntoView({
      behavior: "smooth"
    });

}
