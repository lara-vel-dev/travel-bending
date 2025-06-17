import { IoMdSearch, IoIosBed } from "react-icons/io";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const Filter = ({ direction }) => {
  return (
    <>
      <div className="filter-container">
        <div className="filter">
          <div class="filter_form-group">
            <label for="arrival">Location</label>
            <IoMdSearch className="filter_form-group__icon" />
            <input
              type="text"
              id="arrival"
              name="arrival"
              placeholder="Where to go?"
            />
          </div>

          <div class="filter_form-group">
            <label for="arrival">Dates</label>
            <div className="filter_form-group__guests">
              <FaCalendarAlt className="filter_form-group__icon" />
              <input
                style={{ borderRight: "2px solid #bebebe" }}
                type="text"
                id="arrival"
                name="arrival"
                placeholder="Arrival"
              />
               <FaCalendarAlt className="filter_form-group__icon" />
              <input
                style={{ MarginLeft: "10px"}}
                type="text"
                id="departure"
                name="arrival"
                placeholder="Departure"
              />
            </div>
          </div>

          <div class="filter_form-group">
            <label for="guests">Guests & rooms</label>
            <div className="filter_form-group__guests">
              <FaUser className="filter_form-group__icon" />
              <input type="number" id="guests" name="guests" min="1" max="10" />
              <IoIosBed className="filter_form-group__icon" />
              <input type="number" id="rooms" name="guests" min="1" max="10" />
            </div>
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </>
  );
};

export default Filter;
