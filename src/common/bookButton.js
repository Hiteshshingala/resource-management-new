import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Button, DropdownButton, Dropdown} from 'react-bootstrap'
import { Container, Row, Col, Modal } from "react-bootstrap";
import { getData, setData } from '../services/localstorage'
import { DateRangePicker } from 'react-date-range';

const BookButton = ({ values, setUserData }) => {
    let history = useHistory();
    const [resourceData, setResourceData] = useState([]);
    const [bookingDate, setBookingDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = async () => {
        console.log("handleClick called");
        setIsModalOpen(true);
    }

    useEffect(() => {
      getBookingData();
    }, []);
  
    const getBookingData = () => {
      const data = getData();
      if(data && data.length > 0) {
          setResourceData(data);
      }
    };

    const closeModal = () => {
        setIsModalOpen(false);
      };

    const handleSelect = ({selection}) => {
        const {startDate, endDate} = selection;
        setBookingDate({
            startDate: startDate,
            endDate: endDate,
            key: 'selection',
        })
    }
    const dayContentRenderer = (selection) => {
        console.log('@@@dayContentRenderer', selection)
    }

      
    return (
        <>
        <div>
             <Button variant="primary" onClick={() => handleClick()}>Book</Button>
        </div>
              <Modal
                className="booking-modal"
                show={isModalOpen}
                backdrop={true}
                onHide={closeModal}
                >
                    <div>
                        <DropdownButton align="end" title="Dropdown end" id="dropdown-menu-align-end">
                            {resourceData.map(el => {
                                return (
                                    <Dropdown.Item eventKey="1">{el.name} / {el.code}</Dropdown.Item>
                                )
                            })}
                        </DropdownButton>
                        <DateRangePicker
                            ranges={[bookingDate]}
                            onChange={handleSelect}
                            dayContentRenderer={dayContentRenderer}
                            disabledDates={new Date()}
                        />
                    </div>
            </Modal>
        </>
    )
}
export default BookButton;