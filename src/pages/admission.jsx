import { useMutation } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { sendApplication } from '../services/applicationServices';
import { useState } from 'react';
import Spinner from '../components/Spinner';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export default function AdmissionPage() {
  // const { state: course } = useLocation();
  const mutation = useMutation({ mutationFn: sendApplication });

  const [fullname, setFullname] = useState('');
  const [dob, setDob] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [grade, setGrade] = useState('4');
  const [lastAcademicInfo, setLastAcademicInfo] = useState('');
  const [hostel, setHostel] = useState('');
  const [transportation, setTransportation] = useState('');
  const [lunch, setLunch] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherContactNumber, setFatherContactNumber] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherContactNumber, setMotherContactNumber] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianContactNumber, setGuardianContactNumber] = useState('');
  const [siblingInfo, setSiblingInfo] = useState('');
  const [aboutUs, setAboutUs] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [applicantRelation, setApplicantRelation] = useState('parent');
  const [applicantContactNumber, setApplicantContactNumber] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      fullname,
      dob,
      placeOfBirth,
      gender,
      permanentAddress,
      currentAddress,
      grade,
      lastAcademicInfo,
      hostel,
      transportation,
      lunch,
      fatherName,
      fatherContactNumber,
      motherName,
      motherContactNumber,
      guardianName,
      guardianContactNumber,
      siblingInfo,
      aboutUs,
      applicantName,
      applicantRelation,
      applicantContactNumber,
      applicantEmail,
    });
  };

  if (mutation.isLoading) {
    return <Spinner />;
  }

  if (mutation.isSuccess) {
    toast.success(mutation.data?.message);
    return <Navigate to='/thanks' replace />;
  }

  return (
    <section className='p-8'>
      <h1 className='text-center text-5xl font-semibold mb-8'>Apply Now</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <section className='max-w-5xl m-auto my-8'>
            <h2 className='text-xl font-semibold my-2 uppercase underline'>
              Personal Details
            </h2>
            <div>
              <label className='block'>Student's Full Name:</label>
              <input
                required
                className='w-full'
                type='text'
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <section className='flex justify-between my-4'>
              <div>
                <label>Date Of Birth:</label>
                <input
                  required
                  className='w-40'
                  type='date'
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div className='grow mx-2'>
                <label>Place Of Birth:</label>
                <input
                  type='text'
                  className='w-full'
                  value={placeOfBirth}
                  onChange={(e) => setPlaceOfBirth(e.target.value)}
                />
              </div>

              <div>
                <label>Gender:</label>
                <div className='flex gap-2'>
                  <input
                    type='radio'
                    name='gender'
                    value='male'
                    checked={gender === 'male'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male
                  <input
                    type='radio'
                    name='gender'
                    value='female'
                    checked={gender === 'female'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                </div>
              </div>
            </section>
            <div className='my-4'>
              <label>Permanent Address:</label>
              <input
                required
                className='w-full'
                type='text'
                value={permanentAddress}
                onChange={(e) => setPermanentAddress(e.target.value)}
              />
            </div>
            <div className='my-4'>
              <label>Current Address:</label>
              <input
                required
                className='w-full'
                type='text'
                value={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
              />
            </div>

            <div className='my-4'>
              <label>Grade Applied For: </label>
              <select
                required
                defaultValue={grade}
                onChange={(e) => setGrade(e.target.value)}
              >
                <option value='K.G'>K.G.</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
              </select>
            </div>
            <div className='my-4'>
              <label>Last Academic Information: </label>
              <textarea
                required
                className='w-full h-40'
                placeholder='Passed grade 3 from Chandra Surya Secondary School with 59%.'
                value={lastAcademicInfo}
                onChange={(e) => setLastAcademicInfo(e.target.value)}
              />
            </div>
          </section>
          <section className='max-w-5xl m-auto my-8'>
            <h2 className='text-xl font-semibold my-2 uppercase underline'>
              Service Required
            </h2>
            <div className='flex gap-2'>
              <label>Hostel Facility:</label>
              <input
                required
                type='radio'
                name='hostel'
                value='yes'
                checked={hostel === 'yes'}
                onChange={(e) => setHostel(e.target.value)}
              />
              Yes
              <input
                required
                type='radio'
                name='hostel'
                value='no'
                checked={hostel === 'no'}
                onChange={(e) => setHostel(e.target.value)}
              />
              No
            </div>
            <div className='flex gap-2'>
              <label>Transportation Service:</label>
              <input
                required
                type='radio'
                name='transport'
                value='yes'
                checked={transportation === 'yes'}
                onChange={(e) => setTransportation(e.target.value)}
              />
              Yes
              <input
                required
                type='radio'
                name='transport'
                value='no'
                checked={transportation === 'no'}
                onChange={(e) => setTransportation(e.target.value)}
              />
              No
            </div>
            <div className='flex gap-2'>
              <label>Lunch:</label>
              <input
                required
                type='radio'
                name='lunch'
                value='yes'
                checked={lunch === 'yes'}
                onChange={(e) => setLunch(e.target.value)}
              />
              Yes
              <input
                required
                type='radio'
                name='lunch'
                value='no'
                checked={lunch === 'no'}
                onChange={(e) => setLunch(e.target.value)}
              />
              No
            </div>
          </section>
          <section className='max-w-5xl m-auto my-8'>
            <h2 className='text-xl font-semibold my-2 uppercase underline'>
              Parents/Guardian/Siblings Information
            </h2>
            <div className='flex gap-4 my-4'>
              <div className='w-full'>
                <label>Father's Name</label>
                <input
                  required
                  className='w-full'
                  type='text'
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </div>
              <div className='w-full'>
                <label>Father's Contact Number</label>
                <input
                  required
                  className='w-full'
                  type='text'
                  value={fatherContactNumber}
                  onChange={(e) => setFatherContactNumber(e.target.value)}
                />
              </div>
            </div>
            <div className='flex gap-4 my-4'>
              <div className='w-full'>
                <label>Mother's Name</label>
                <input
                  required
                  className='w-full'
                  type='text'
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                />
              </div>
              <div className='w-full'>
                <label>Mother's Contact Number</label>
                <input
                  required
                  className='w-full'
                  type='text'
                  value={motherContactNumber}
                  onChange={(e) => setMotherContactNumber(e.target.value)}
                />
              </div>
            </div>
            <div className='flex gap-4 my-4'>
              <div className='w-full'>
                <label>Guardian's Name</label>
                <input
                  required
                  className='w-full'
                  type='text'
                  value={guardianName}
                  onChange={(e) => setGuardianName(e.target.value)}
                />
              </div>
              <div className='w-full'>
                <label>Guardian's Contact Number</label>
                <input
                  required
                  className='w-full'
                  type='text'
                  value={guardianContactNumber}
                  onChange={(e) => setGuardianContactNumber(e.target.value)}
                />
              </div>
            </div>
            <div className='my-4'>
              <label>Sibling's Information: </label>
              <textarea
                className='w-full h-40'
                placeholder='Their Name, Date Of Birth, School/College they are attending.'
                value={siblingInfo}
                onChange={(e) => setSiblingInfo(e.target.value)}
              />
            </div>
            <div className='my-4'>
              <label>How did you hear about us? : </label>
              <textarea
                className='w-full h-40'
                value={aboutUs}
                onChange={(e) => setAboutUs(e.target.value)}
              />
            </div>
          </section>
          <section className='max-w-5xl m-auto my-8'>
            <h2 className='text-xl font-semibold my-2 uppercase underline'>
              Declaration
            </h2>
            <p>
              I{' '}
              <input
                required
                type='text'
                id='declaration'
                className='outline-none'
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
              />{' '}
              the{' '}
              <select
                required
                defaultValue={applicantRelation}
                onChange={(e) => setApplicantRelation(e.target.value)}
              >
                <option value='parent'>Parent</option>
                <option value='guardian'>Guardian</option>
                <option value='student'>Student</option>
              </select>{' '}
              seeking admission in Jalupa Secondary School, solemnly declare
              that the above given information is true to my knowledge and I
              will strictly abideby the rules and regulations in force and that
              may be framed hereafter, and will not indulge in any unsocial
              activities. I will avoid any act of indiscipline and breach of
              rules. I further agree to reimburse any furniture, apparatus, etc.
              which may cause by carelessness or wantonness on my part.
            </p>
            <div className='my-2 text-lg text-black'>
              <input type='checkbox' required /> I read the above statement and
              I strongly agree to them.
            </div>
          </section>

          <section className='max-w-5xl m-auto my-8'>
            <h2 className='text-xl font-semibold my-2 uppercase underline'>
              Applicant's Contact Details
            </h2>
            <div className='flex gap-4 my-4'>
              <div className='w-full'>
                <label>Contact Number</label>
                <input
                  required
                  className='w-full'
                  type='text'
                  value={applicantContactNumber}
                  onChange={(e) => setApplicantContactNumber(e.target.value)}
                />
              </div>
              <div className='w-full'>
                <label>Email</label>
                <input
                  required
                  className='w-full'
                  type='email'
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                />
              </div>
            </div>
          </section>
          <section className='max-w-5xl m-auto my-8'>
            <button
              type='submit'
              className='w-full p-4 px-8 text-lg text-white bg-indigo-700 hover:bg-indigo-800'
            >
              Submit Application
            </button>
          </section>
        </form>
      </section>
    </section>
  );
}
