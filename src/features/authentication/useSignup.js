import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutation: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    // mutationKey: ['users']
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please Verify the new account from thr user's email address."
      );
    },
  });

  return { signup, isLoading };
}
