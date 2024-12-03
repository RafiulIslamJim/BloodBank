import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-red-500">
      <div className="w-[600px]">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost text-[#010d6e] absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-extrabold text-[#010d6e] text-lg">Signup</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <span className="text-[#010d6e]">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border bg-slate-300 rounded-md outline-none"
                {...register("fullname", { required: "Name is required" })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">{errors.fullname.message}</span>
              )}
            </div>

            {/* Department */}
            <div className="mt-4 space-y-2">
              <span className="text-[#010d6e]">Department</span>
              <br />
              <input
                type="text"
                placeholder="Enter your department"
                className="w-80 px-3 py-1 border bg-slate-300 rounded-md outline-none"
                {...register("department", { required: "Department is required" })}
              />
              {errors.department && (
                <span className="text-sm text-red-500">{errors.department.message}</span>
              )}
            </div>

            {/* Registration */}
            <div className="mt-4 space-y-2">
              <span className="text-[#010d6e]">Registration</span>
              <br />
              <input
                type="text"
                placeholder="Enter your registration number"
                className="w-80 px-3 py-1 border bg-slate-300 rounded-md outline-none"
                {...register("registration", { required: "Registration is required" })}
              />
              {errors.registration && (
                <span className="text-sm text-red-500">{errors.registration.message}</span>
              )}
            </div>

            {/* Blood Group */}
            <div className="mt-4 space-y-2">
              <span className="text-[#010d6e]">Blood Group</span>
              <br />
              <input
                type="text"
                placeholder="Enter your blood group"
                className="w-80 px-3 py-1 border bg-slate-300 rounded-md outline-none"
                {...register("bloodGroup", { required: "Blood group is required" })}
              />
              {errors.bloodGroup && (
                <span className="text-sm text-red-500">{errors.bloodGroup.message}</span>
              )}
            </div>

            {/* Phone */}
            <div className="mt-4 space-y-2">
              <span className="text-[#010d6e]">Phone</span>
              <br />
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-80 px-3 py-1 border bg-slate-300 rounded-md outline-none"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-sm text-red-500">{errors.phone.message}</span>
              )}
            </div>

            {/* Last Date of Donation */}
            <div className="mt-4 space-y-2">
              <span className="text-[#010d6e]">Last Date of Donation</span>
              <br />
              <input
                type="date"
                className="w-80 px-3 py-1 border bg-slate-300 rounded-md outline-none"
                {...register("lastDonation", { required: "Last donation date is required" })}
              />
              {errors.lastDonation && (
                <span className="text-sm text-red-500">{errors.lastDonation.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span className="text-[#010d6e]">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border bg-slate-300 rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span className="text-[#010d6e]">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border bg-slate-300 rounded-md outline-none"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* Signup Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="text-white rounded-md px-3 py-1 bg-[#010d6e] hover:bg-red-600 duration-200"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
