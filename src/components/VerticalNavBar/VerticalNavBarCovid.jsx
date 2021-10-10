import React from 'react'
import { NavItem, Dropdown, NavLink, Nav} from 'react-bootstrap'
import './VerticalNavBarCovid.css'

const VerticalNavBarCovid = () => {
    return ( 
        <div class="verticalNavBarCovid m-3">
            <Nav variant="light">

            <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink} style={{color:"black"}}><a href="#InfoAttractionsSetUp"> Preparing Facilities</a></Dropdown.Toggle>
            <Dropdown.Menu style = {{width: "280px"}}>
                <a href="#InfoAttractionsSetUp"> <h2 className="title-level-2">Attraction Set Up</h2></a>
                    <a href="#InfoGeneral" className="title-level-3">General</a>
                    <a href="#InfoRideShowsTours" className="title-level-3">Rides, Shows & Tours</a>
                        <a href="#InfoIndoorShows" className="sub-title">Indoor Shows</a>
                        <a href="#InfoOutdoorShows" className="sub-title">Outdoor Shows</a>
                        <a href="#InfoLivePerformances" className="sub-title">Live Performances</a>
                        <a href="#InfoTours" className="sub-title">Tours</a>
                    <a href="#InfoWorkRelatedEvents" className="title-level-3">Work-Related Events</a>
                <a href="#InfoOperatingCapacity"> <h2 className="title-level-2">Operating Capacity</h2></a>
                <a href="#InfoMngProxTouchedSurf"> <h2 className="title-level-2">Management of Proximity & Touched Surfaces</h2></a>
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink} style={{color:"black"}}><a href="#InfoManagingArrival">Managing Arrival</a></Dropdown.Toggle>
            <Dropdown.Menu style = {{width: "280px"}}>
                <a href="#InfoHealthContactTrace"> <h2 className="title-level-2">Health Checks and Contact Tracing</h2></a>
                <a href="#InfoManageEntry"> <h2 className="title-level-2">Managing Entry</h2></a>
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink} style={{color:"black"}}><a href="#InfoAttractionsSetUp">In-Attraction Plans</a></Dropdown.Toggle>
            <Dropdown.Menu style = {{width: "280px"}}>
                <a href="#InfoManagingCrowds"> <h2 className="title-level-2">Managing Crowds</h2></a>
            </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink} style={{color:"black"}}><a href="#InfoInfectionControl">Infection Control</a></Dropdown.Toggle>
            <Dropdown.Menu style = {{width: "280px"}}>
                <a href="#InfoCleanSanitise"> <h2 className="title-level-2">Cleaning and Sanitisation</h2></a>
                <a href="#InfoResPlanInfected"> <h2 className="title-level-2">Response Plan for Infected Cases</h2></a>
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink} style={{color:"black"}}>Safe Workplace</Dropdown.Toggle>
            <Dropdown.Menu style = {{width: "280px"}}>
                <a href="#InfoPrepareFacilities"> <h2 className="title-level-2">Workplace and Manpower</h2></a>
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink} style={{color:"black"}}>Marketing and Communication</Dropdown.Toggle>
            <Dropdown.Menu style = {{width: "280px"}}>
                <a href="#InfoPrepareFacilities"> <h2 className="title-level-2">More Information</h2></a>
            </Dropdown.Menu>
            </Dropdown>

            </Nav>
        </div>
    );
}
 
export default VerticalNavBarCovid;