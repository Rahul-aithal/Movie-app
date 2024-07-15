import { useForm } from "react-hook-form";

function Form({
  setUser
}) {
  const { register, handleSubmit,reset ,formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      country: 'India',
      streetAddress: '',
      city: '',
      region: '',
      postalCode: '',
    }
  });

  const onSubmit = (data) => {
    setUser(data);
    reset();
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="space-y-12 px-4 m-1 py-2">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  {...register('firstName', { required: 'First name is required' })}
                  type="text"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.firstName ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.firstName ? 'focus:ring-red-500' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                />
                {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  {...register('lastName', { required: 'Last name is required' })}
                  type="text"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.lastName ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.lastName ? 'focus:ring-red-500' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                />
                {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.email ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.email ? 'focus:ring-red-500' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                />

                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  {...register('number', {
                    required: 'Number is required',
                    pattern: {
                      value: /\d{10}/,
                      message: "Invaild Number"
                    }
                  })}
                  type="number"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.number ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.number ? 'focus:ring-red-500' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                />
                {errors.number && <span className="text-red-500 text-sm">{errors.number.message}</span>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <input
                  id="country"
                  {...register('country')}
                  value="India"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  disabled
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  {...register('streetAddress', { required: 'Street address is required' })}
                  type="text"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.streetAddress ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.streetAddress ? 'focus:ring-red-500' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                />
                {errors.streetAddress && <span className="text-red-500 text-sm">{errors.streetAddress.message}</span>}
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  {...register('city', { required: 'City is required' })}
                  type="text"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.city ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.city ? 'focus:ring-red-500' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                />
                {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  {...register('region', { required: 'Region is required' })}
                  type="text"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.region ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.region ? 'focus:ring-red-500' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                />
                {errors.region && <span className="text-red-500 text-sm">{errors.region.message}</span>}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  id="postal-code"
                  {...register('postalCode', { required: 'Postal code is required',
                    pattern:{
                      value:/^[1-9][0-9]{5}$/,
                      message:"Invaild Zip/Postal Code"
                    }

                   })}
                  type="text"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.postalCode ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.postalCode ? 'focus:ring-red-500' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                />
                {errors.postalCode && <span className="text-red-500 text-sm">{errors.postalCode.message}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-start gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-100 border border-black p-1 rounded-xl bg-gray-700" onClick={()=>{
            reset()
          }}>
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
