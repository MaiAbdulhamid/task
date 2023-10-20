import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../store";
import { ThunkDispatch } from "@reduxjs/toolkit";

// form validation rules
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

function Form() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const authError = useSelector((state: any) => state.auth.error);

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  function onSubmit({ username, password }: any) {
    return dispatch(authActions.login({ username, password }));
  }

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6 bg-white px-8 pt-6 pb-8 mb-4"
      >
        <div className="form-group">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            className={`${
              errors.username
                ? "text-red-500"
                : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }`}
          />
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {errors.username?.message}
          </div>
        </div>
        <div className="form-group">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className={`${
              errors.password
                ? "text-red-500"
                : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }`}
          />
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {errors.password?.message}
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none mt-2 mb-2"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          )}
          Login
        </button>
        {authError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {authError.message}
          </div>
        )}
      </form>
    </div>
  );
}

export { Form };
