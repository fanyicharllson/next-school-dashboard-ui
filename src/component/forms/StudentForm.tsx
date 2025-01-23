"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Schema from "@/lib/student_Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../InputField";

type FormData = z.infer<typeof Schema>;

const StudentForm = ({ type, data }: { type: "plus" | "edit"; data?: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const Onsubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(Onsubmit)}>
      <h1 className="text-xl font-semibold">Create new Student</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
        <InputField
          label="Address"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
        {/* Take on github */}
      </span>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "plus" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
