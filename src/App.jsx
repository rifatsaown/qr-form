import Swal from 'sweetalert2';
import { logo } from './assets';

const App = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const zip = form.zip.value;
    const medicateId = form.medicateId.value;

    try {
      Swal.fire({
        title: 'Submitting your data...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await fetch(
        'https://timesheet-backend-oc57.onrender.com/qr-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            zip,
            medicateId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      Swal.fire({
        icon: 'success',
        confirmButtonColor: '#538cc9',
        iconColor: '#538cc9',
        title: 'Success!',
        text: 'Your request has been submitted successfully.',
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen lg:bg-gray-100">
      <div className="rounded-lg lg:border bg-white text-black lg:shadow-sm w-full max-w-2xl mx-auto p-6 sm:p-8 md:p-10">
        <div className="flex flex-col space-y-1.5 p-6">
          <img className="w-2/4" src={logo} alt="" />
          <h3 className="whitespace-nowrap tracking-tight text-3xl font-bold">
            Personal Information
          </h3>
          <p className="text-sm text-gray-500">Enter your details below.</p>
        </div>
        <div className="p-6">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="grid gap-4 md:col-span-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="name"
                  name="name"
                  required
                  placeholder="Insert your name"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(123) 456-7890"
                  type="tel"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  type="email"
                />
              </div>
              
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="address">
                  Address
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="address"
                  name="address"
                  rows="2"
                  placeholder="123 Main St, Anytown USA"
                ></textarea>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="zip">
                  Zip Code
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="zip"
                  name="zip"
                  placeholder="12345"
                />
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium"
                  htmlFor="medicateId"
                >
                  Medicate ID
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="medicateId"
                  name="medicateId"
                  placeholder="123456"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="rounded-md w-full bg-[#538cc9] text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Apply for callback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
