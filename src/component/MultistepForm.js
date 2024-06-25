
// StepperForm.jsx
 
import React, { useState } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ProgressBar now={(step / 5) * 100} />
      {step === 1 && (
        <Form.Group controlId="formStep1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
      )}
      {step === 2 && (
        <Form.Group controlId="formStep2">
          <Form.Label>Email/phonenumber</Form.Label>
          <Form.Control
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
      )}
      {step === 3 && (
        <Form.Group controlId="formStep3">
          <Form.Label>Amount to donate .</Form.Label>
          <Form.Control
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </Form.Group>
      )}
      
      {step === 4 && (
        <Form.Group controlId="formStep3">
          <Form.Label>Monthly / yearly</Form.Label>
          <Form.Control as="select" value={formData.message} onChange={handleInputChange}>
          <option>Monthly</option>
          <option>yearly</option>
        </Form.Control>
        </Form.Group>
      )}
      
      {step === 5 && (
        <Form.Group controlId="formStep3">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </Form.Group>
      )}
      <div className="d-flex justify-content-between" style={{paddingTop:'10px'}}>
        {step > 1 && (
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {step < 5 ? (
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </div>
    </Form>
  );
};

export default MultiStepForm;