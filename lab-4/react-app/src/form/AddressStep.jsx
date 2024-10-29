/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useForm } from "react-hook-form"

function AddressStep({ prevStep, onSubmit, addresCurrent }) {
  const [sameAddress, setSameAddress] = useState(addresCurrent?.same || false)
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      street: addresCurrent?.street || '',
      zip: addresCurrent?.zip || '',
      city: addresCurrent?.city || '',
      billingStreet: addresCurrent?.billingStreet || '',
      billingZip: addresCurrent?.billingZip || '',
      billingCity: addresCurrent?.billingCity || '',
      same: addresCurrent?.same || false
    }
  });

  const onSameAddress = () => { 
    setSameAddress(!sameAddress)
  }

  // add two form sections: delivery address and invoice address. each should contain 3 fields: street, zip code and city. 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-classic">
      <div>AddressStep</div>
      <div className="form-classic-section">
        <h3>Address</h3>
        <input placeholder="Street" {...register("street", { required: true })} />
        {errors.street && <span>This field is required</span>}
        <input placeholder="Zip code" {...register("zip", { required: true, pattern: /^[0-9]{2,5}(?:-[0-9]{3,5})?$/ })} />
        {errors.zip && <span>This field is required</span>}
        <input placeholder="city" {...register("city", { required: true })} />
        {errors.city && <span>This field is required</span>}
        <div>
          <label htmlFor="sameAsBulling">Same as billing address</label>
          <input type="checkbox" name="sameAsBulling" id="sameAsBulling" onClick={onSameAddress} { ...register("same") } />
        </div>
      </div>
      { !sameAddress && (
        <div className="form-classic-section">
          <h3>Invoice address</h3>
          <input placeholder="Street" {...register("billingStreet", { required: true })} />
          {errors.billingStreet && <span>This field is required</span>}
          <input placeholder="Zip code" {...register("billingZip", { required: true, pattern: /^[0-9]{2,5}(?:-[0-9]{3,5})?$/ })} />
          {errors.billingZip && <span>This field is required</span>}
          <input placeholder="city" {...register("billingCity", { required: true })} />
          {errors.billingCity && <span>This field is required</span>}
        </div>
      )}

      <div className="form-classic-buttons">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  )
}

export default AddressStep