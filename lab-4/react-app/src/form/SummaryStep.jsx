/* eslint-disable react/prop-types */

function SummaryStep({ addresStep, nameStep, formSubmission }) {
  return (
    <div>
      <h3>SummaryStep</h3>
      <div>
        <h3>Name Step</h3>
        <p>{formSubmission.name.firstname}</p>
        <p>{formSubmission.name.lastname}</p>
        <p>{formSubmission.name.email}</p>
      </div>
      <div>
        <h3>Address Step</h3>
        <p>{formSubmission.address.street}</p>
        <p>{formSubmission.address.zip}</p>
        <p>{formSubmission.address.city}</p>
        <h3>Billing Address</h3>
        { formSubmission.address.same ? 
          <p>Same as address</p>
          :
          <>
            <p>{formSubmission.address.billingStreet}</p>
            <p>{formSubmission.address.billingZip}</p>
            <p>{formSubmission.address.billingCity}</p>
          </>
        }
      </div>
      <div className="form-classic-buttons">
      <button type="button" onClick={nameStep}>NameStep</button>
      <button type="button" onClick={addresStep}>AddresStep</button>
      </div>
    </div>
  )
}

export default SummaryStep