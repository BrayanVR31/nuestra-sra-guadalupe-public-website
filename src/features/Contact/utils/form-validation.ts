import type { ErrorInferenceObject } from "astro/actions/runtime/utils.js";
import type { ActionInputError } from "astro:actions";

export const handleFormSubmission = <Inputs = { [k: string]: unknown }>(
  form: HTMLFormElement | null,
  eventHandler: (data: FormData, inputValues: Inputs) => void,
) => {
  if (!form) return null;
  // Register and call user event
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    eventHandler?.(formData, Object.fromEntries(formData) as unknown as Inputs);
  });
};

export const handleErrors = (fieldNames: string[], errorSelector: string) => {
  const cleanUpErrors = () => {
    for (const fieldName of fieldNames) {
      const input = document.querySelector(
        `[name=${fieldName}] ${errorSelector}`,
      );
      if (input) {
        input.textContent = "";
        input.removeAttribute("data-error");
      }
    }
  };

  const managerErrors = <T extends ErrorInferenceObject>(
    error: ActionInputError<T>,
  ) => {
    for (const fieldName of fieldNames) {
      const errorMessage = (error.fields as {})[fieldName as keyof {}] as
        | string[]
        | undefined;
      const input = document.querySelector(
        `[name=${fieldName}] ${errorSelector}`,
      );
      if (input) {
        if (!errorMessage) {
          input.textContent = "";
          input.removeAttribute("data-error");
        } else {
          input.textContent = errorMessage.join(", ");
          input.setAttribute("data-error", "");
        }
      }
    }
  };
  return { cleanUpErrors, managerErrors };
};
