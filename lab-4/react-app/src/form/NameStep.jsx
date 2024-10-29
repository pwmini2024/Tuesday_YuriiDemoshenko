/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"


function NameStep({ onSubmit, nameCurrent }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstname: nameCurrent?.firstname || '',
      lastname: nameCurrent?.lastname || '',
      email: nameCurrent?.email || ''
    }
  });
  // 3 input fields (firstname, lastname, email address).
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-classic">
      <div>NameStep</div>
      {/* <div>{JSON.stringify(nameCurrent)}</div> */}
      <input placeholder="John" {...register("firstname", { required: true })} />
      {errors.firstname && <span>This field is required</span>}
      <input placeholder="Doe" {...register("lastname", { required: true })} />
      {errors.lastname && <span>This field is required</span>}
      <input type="email" placeholder="mail@pw.edu.pl" {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}

      
      <div className="form-classic-buttons">
        <button type="submit">Next</button>
      </div>
    </form>
  )
}

export default NameStep