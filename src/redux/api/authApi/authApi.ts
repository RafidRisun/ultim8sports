import { api } from '../api';

export const authApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		userRegister: builder.mutation<any, any>({
			query: data => ({
				url: '/register',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['auth'],
		}),
		otpVerify: builder.mutation<any, any>({
			query: data => ({
				url: '/verify-otp',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['auth'],
		}),
		resendOtp: builder.mutation<any, any>({
			query: data => ({
				url: '/resend-otp',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['auth'],
		}),
		forgotPassword: builder.mutation<any, any>({
			query: data => ({
				url: '/forgot-password',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['auth'],
		}),
		login: builder.mutation<any, any>({
			query: data => ({
				url: '/login',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['auth'],
		}),
		resetPassword: builder.mutation<any, any>({
			query: data => ({
				url: '/change-password',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['auth'],
		}),
		validateToken: builder.query<any, string>({
			query: data => ({
				url: '/check-token?token=' + data,
				method: 'GET',
			}),
			providesTags: ['auth'],
		}),
		logout: builder.mutation<any, void>({
			query: () => ({
				url: '/logout',
				method: 'POST',
			}),
			invalidatesTags: ['auth'],
		}),
	}),
});
export const {
	useUserRegisterMutation,
	useOtpVerifyMutation,
	useResendOtpMutation,
	useLoginMutation,
	useResetPasswordMutation,
	useValidateTokenQuery,
	useLogoutMutation,
} = authApi;
