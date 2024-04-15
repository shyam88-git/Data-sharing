import { rootApi } from "@/redux/root.api";
import { initAuthUser, initVerifyUser, logout } from "./authSlice";
import { SignupPayload, SignupSuccesPayload, VerifyUserPayload } from "./auth";

export const authApi = rootApi.injectEndpoints({

    endpoints: (builder) => ({

        login: builder.mutation({

            query: (body: { usernamem_or_phone: string; password: string }) => ({

                url: "/login/token/",
                method: 'POST',
                body: body
            }),

            onQueryStarted(_args, { dispatch, queryFulfilled }) {

                queryFulfilled.then((data) => {

                    dispatch(initAuthUser(data.data));
                })
            }
        }),

        verifyToken: builder.mutation<VerifyUserPayload, { token: string }>({

            query: (body) => ({

                url: '/token/verify/',
                method: 'POST',
                headers: {},
                body: body
            }),
            onQueryStarted(_args, { dispatch, queryFulfilled }) {
                queryFulfilled.then((data) => {

                    dispatch(initVerifyUser(data.data));
                })
                    .catch((() => {

                        dispatch(logout());
                    }));



            }
        }),

        signup: builder.mutation<SignupSuccesPayload, SignupPayload>({

            query: (data) => ({
                url: '/user/',
                method: 'POST',
                body: data

            })
        })

    })
})

export const { useLoginMutation, useVerifyTokenMutation, useSignupMutation } = authApi;