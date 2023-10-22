import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import ScrollTopView from '../components/Scroller';
import FooterView from '../components/Footer';
import Dropdown from 'react-bootstrap/Dropdown';
import FormCheck from 'react-bootstrap/FormCheck';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string[];
  fieldOfStudy: string;
}

interface Errors {
  firstName: string;
  lastName: string;
  email: string | null;
  role: string | null;
  fieldOfStudy: string | null;
  general: string | null;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    role: [],
    fieldOfStudy: '',
  });

  const [errors, setErrors] = useState<Errors>({
    firstName: null,
    lastName: null,
    email: null,
    role: null,
    fieldOfStudy: null,
    general: null,
  });

  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showFieldDropdown, setShowFieldDropdown] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch(`/api/searchSubjects`);
        const data = await response.json();
        setSubjects(data['subject-classifications']['subject-classification']);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };
    fetchSubjects();
  }, []);

  const handleSearch = (e) => {
    console.log(e.target.value);
    const query = e.target.value.toLowerCase();
    const results = subjects.filter((subject) =>
      subject.description.toLowerCase().includes(query),
    );
    setFilteredSubjects(results);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fieldErrors = validateFields(formData);
    setErrors(fieldErrors);

    if (Object.values(fieldErrors).some((errorMsg) => errorMsg !== null)) {
      return;
    }

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          role: [],
          fieldOfStudy: '',
        });
      } else {
        setErrors((prev) => ({ ...prev, general: 'Error submitting data' }));
      }
    } catch (error) {
      console.error('There was an error submitting the form', error);
      setErrors((prev) => ({
        ...prev,
        general: 'Server error. Please try again later.',
      }));
    }
  };

  const validateFields = (data: FormData): Errors => {
    const fieldErrors: Errors = {
      firstName: !data.firstName ? 'Name is required' : null,
      lastName: !data.lastName ? 'Name is required' : null,
      email: !data.email ? 'Email is required' : null,
      role: !data.role ? 'Role is required' : null,
      fieldOfStudy: !data.fieldOfStudy ? 'Field of Study is required' : null,
      general: null,
    };
    return fieldErrors;
  };

  const getDropdownTitle = () => {
    if (formData.role.length === 0) return 'Select Role';
    return formData.role.join(', ');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-150">
        <h2 className="mb-4 text-center">Join Our Waitlist</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="form-control"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                    {errors.firstName && (
                      <div className="text-danger">{errors.firstName}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="form-control"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                    {errors.firstName && (
                      <div className="text-danger">{errors.firstName}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="role"
                  className="form-label"
                >{`Role* (Any applicable)`}</label>
                <Dropdown
                  show={showRoleDropdown}
                  id="dropdown-basic"
                  onBlur={() => setShowRoleDropdown(false)}
                  onSelect={() => {}} // required for preventing auto-close
                >
                  <Dropdown.Toggle
                    id="dropdown-basic-button"
                    variant="secondary"
                    onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                  >
                    {getDropdownTitle()}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {['author', 'reviewer', 'editor', 'other'].map((role) => (
                      <Dropdown.Item
                        as="div"
                        key={role}
                        className="form-check"
                        eventKey={role}
                        onMouseDown={(e) => e.preventDefault()}
                        onMouseUp={(e) => e.preventDefault()}
                      >
                        <FormCheck
                          id={`${role}Check`}
                          label={role.charAt(0).toUpperCase() + role.slice(1)}
                          value={role}
                          checked={formData.role.includes(role)}
                          onChange={(e) => {
                            const updatedRoles = e.target.checked
                              ? [...formData.role, e.target.value]
                              : formData.role.filter(
                                  (r) => r !== e.target.value,
                                );
                            setFormData({ ...formData, role: updatedRoles });
                          }}
                        />
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                {errors.role && (
                  <div className="text-danger">{errors.role}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="fieldOfStudy" className="form-label">
                  Field of Study*
                </label>

                <input
                  type="text"
                  id="fieldOfStudy"
                  className="form-control"
                  placeholder="Enter your field of study"
                  value={formData.fieldOfStudy}
                  onChange={handleSearch}
                  onClick={() => setShowFieldDropdown(true)}
                  onBlur={() =>
                    setTimeout(() => setShowFieldDropdown(false), 200)
                  } // small timeout to handle item selection
                  ref={searchRef}
                />

                <Dropdown show={showFieldDropdown} align="start">
                  <Dropdown.Menu
                    style={{ maxHeight: '200px', overflowY: 'auto' }}
                  >
                    {filteredSubjects.map((subject) => (
                      <Dropdown.Item
                        as="button"
                        key={subject.code}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setFormData({
                            ...formData,
                            fieldOfStudy: subject.description,
                          });
                          setShowFieldDropdown(false);
                          searchRef.current.focus();
                        }}
                      >
                        {subject.description}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                {errors.fieldOfStudy && (
                  <div className="text-danger">{errors.fieldOfStudy}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
        {errors.general && (
          <p className="text-danger text-center mt-3">{errors.general}</p>
        )}
        {submitSuccess && (
          <p className="text-success text-center mt-3">
            Data successfully submitted!
          </p>
        )}
      </div>
      {/* <!-- ========================= footer start ========================= --> */}
      <section id="home" className="container">
        {<FooterView />}
      </section>

      {/* <!-- ========================= scroll-top ========================= --> */}
      <ScrollTopView />
    </>
  );
};

export default Form;