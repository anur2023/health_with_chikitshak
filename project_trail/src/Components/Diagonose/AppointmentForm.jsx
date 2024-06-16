
import React, { useEffect, useState } from 'react';
import './Appointment.module.css';

function AppointmentForm() {
  // State to keep track of the currently active card
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const selectDateCards = document.querySelectorAll('.select-date');

    selectDateCards.forEach(card => {
      card.addEventListener('click', () => {
        // Remove 'active' class from the previously active card, if any
        if (activeCard) {
          activeCard.classList.remove('active');
        }
        
        // Add 'active' class to the clicked card
        card.classList.add('active');
        
        // Update the activeCard state to the clicked card
        setActiveCard(card);
      });
    });
  }, [activeCard]); // Run the effect whenever the activeCard state changes

  return (
    <div className="container" style={{ marginBottom: '12rem', marginTop: '8rem' }}>
       <div className="ant-steps ant-steps-horizontal css-dev-only-do-not-override-gzal6t ant-steps-label-horizontal">
        <div className="ant-steps-item ant-steps-item-process ant-steps-item-active">
          <div className="ant-steps-item-container">
            <div className="ant-steps-item-tail"></div>
            <div className="ant-steps-item-icon">
              <span className="ant-steps-icon">1</span>
            </div>
            <div className="ant-steps-item-content">
              <div className="ant-steps-item-title">Select Appointment Date &amp; Time</div>
            </div>
          </div>
        </div>
        <div className="ant-steps-item ant-steps-item-wait">
          <div className="ant-steps-item-container">
            <div className="ant-steps-item-tail"></div>
            <div className="ant-steps-item-icon">
              <span className="ant-steps-icon">2</span>
            </div>
            <div className="ant-steps-item-content">
              <div className="ant-steps-item-title">Patient Information</div>
            </div>
          </div>
        </div>
        <div className="ant-steps-item ant-steps-item-wait">
          <div className="ant-steps-item-container">
            <div className="ant-steps-item-tail"></div>
            <div className="ant-steps-item-icon">
              <span className="ant-steps-icon">3</span>
            </div>
            <div className="ant-steps-item-content">
              <div className="ant-steps-item-title">Payment</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 mt-3 mx-3">
        <div style={{ marginTop: '5rem' }}>
          <div className="p-3" style={{ background: 'rgb(248, 249, 250)' }}>
            <div className="row">
              <div className="col-md-3 col-sm-12 mt-3 info-part border-end">
                <p className="py-2 border-bottom info-head-date">Would you like to schedule an Interview? Pick a Date &amp; Time</p>
                <div className="icon-box">
                  <div className="d-flex gap-3">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
                    </svg>
                    <p>With Doctor</p>
                  </div>
                </div>
              </div><div className="col-md-5 col-sm-12 mt-3 border-end">
  <p className="py-2 border-bottom info-head-date">Pick a Time</p>
  <div className="info-date-card row">
    <div className="mb-3 col-md-6">
      <div className="p-3 mb-3 rounded text-center select-date active">
        <div className="select-month">April 2024</div>
        <div className="select-day-num">24</div>
        <div className="select-month">Wednesday</div>
      </div>
    </div>
    <div className="mb-3 col-md-6">
      <div className="p-3 mb-3 rounded text-center select-date">
        <div className="select-month">April 2024</div>
        <div className="select-day-num">23</div>
        <div className="select-month">Tuesday</div>
      </div>
    </div>
    <div className="mb-3 col-md-6">
      <div className="p-3 mb-3 rounded text-center select-date">
        <div className="select-month">April 2024</div>
        <div className="select-day-num">22</div>
        <div className="select-month">Monday</div>
      </div>
    </div>
    <div className="mb-3 col-md-6">
      <div className="p-3 mb-3 rounded text-center select-date">
        <div className="select-month">April 2024</div>
        <div className="select-day-num">21</div>
        <div className="select-month">Sunday</div>
      </div>
    </div>
    <div className="mb-3 col-md-6">
      <div className="p-3 mb-3 rounded text-center select-date">
        <div className="select-month">April 2024</div>
        <div className="select-day-num">20</div>
        <div className="select-month">Saturday</div>
      </div>
    </div>
  </div>
</div>

              <div className="col-md-4 col-sm-12 mt-3">
                <p className="py-2 border-bottom info-head-date">Pick a Time</p>
                <div className="select-time-div">
                <div className="p-3 mb-3 rounded text-center select-date">
      <div className="select-month">April 2024</div>
      <div className="select-day-num">22</div>
      <div className="select-month">Monday</div>
    </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end mx-3">
        <button type="button" className="ant-btn css-dev-only-do-not-override-gzal6t ant-btn-primary ant-btn-lg" disabled="">
          <span>Next</span>
        </button>
      </div>
    </div>
  );
}

export default AppointmentForm;

























