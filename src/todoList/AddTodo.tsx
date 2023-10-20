import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { todoActions } from "../store";

function AddTodo() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    task: Yup.string().required("Task is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  function onSubmit({ task }: any) {
    dispatch(todoActions.addTodo(task));
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-3 m-3 flex flex-col">
        <div className="flex flex-col">
          <label>Add Todo</label>
          <textarea
            required
            {...register("task")}
            className={`${errors.task ? "text-red-500" : "p-3 m-3"}`}
          />
          <div className="bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative">
            {errors.task?.message}
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none mt-2 mb-2"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          )}
          Add Todo
        </button>
      </form>
    </>
  );
}

export { AddTodo };
