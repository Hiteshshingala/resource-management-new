import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { Container, Row, Col, Modal } from "react-bootstrap";
import { getData, setData } from '../services/localstorage'
import { DateRangePicker } from 'react-date-range';
import addDays from 'date-fns/addDays';

const BookButton = ({ values, setUserData }) => {
    let history = useHistory();
    const [resourceData, setResourceData] = useState([]);
    const [selectedResourceData, setSelectedResourceData] = useState('Select Product');
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
        if (data && data.length > 0) {
            setResourceData(data);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSelect = ({ selection }) => {
        if (selection) {
            const { startDate, endDate } = selection;
            setBookingDate({
                startDate: startDate,
                endDate: endDate,
                key: 'selection',
            })
        }
    }

    const selectResource = (e) => {
        setSelectedResourceData(e);
    }
    const dayContentRenderer = (selection) => {
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
                    <DropdownButton align="end" onSelect={selectResource} title={selectedResourceData} id="dropdown-menu-align-end">
                        {resourceData.map(el => {
                            return (
                                <Dropdown.Item eventKey={`${el.name}/${el.code}`}> {el.name} / {el.code}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                    <DateRangePicker
                        ranges={[bookingDate]}
                        onChange={handleSelect}
                        dayContentRenderer={dayContentRenderer}
                        disabledDates={[
                            addDays(new Date(), 1),
                            addDays(new Date(), 2),
                            addDays(new Date(), 3),
                        ]}
                    >
                    </DateRangePicker>
                </div>
            </Modal>
        </>
    )
}
export default BookButton;