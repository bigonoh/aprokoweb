/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { Route, Navigate, Routes, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import axios, { AxiosError, AxiosResponse } from "axios";
import instance from '../../utils/axios'
import { toast } from 'raven-bank-ui'
import { getUser, logoutUser } from '../../redux/user'
import { useDispatch } from '../../../node_modules/react-redux/es/hooks/useDispatch'
import {
  customErrorId,
  customInfoId,
  customSuccessId,
} from '../../utils/Helpers'

const PrivateRoute = () => {
  const dispatch = useDispatch()

  const LOGOUT = async (e) => {
    const data = await dispatch(logoutUser())
    localStorage.clear()
    if (data?.payload?.status === 'success') {
      // console.log(data.payload);
    }
  }

  let isLoggingOut = false // global

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error?.response?.status === 401) {
        if (!isLoggingOut) {
          isLoggingOut = true // disallow re-entrant calls
          try {
            if (
              // error?.response?.status === 401 ||
              error?.response?.data?.message === 'Please authenticate'
            ) {
              toast.info(
                'Your session has expired. You will be redirected to login.',
                {
                  theme: 'colored',
                  toastId: customInfoId,
                }
              )

              // logout user by clearing redux and local storage
              LOGOUT()

              // redirect back to login
              setTimeout(() => {
                window.location = '/login'
              }, 1000)
            }
            await instance.delete('auth/sign_out')
          } catch (deletionError) {
            // throw errors away
          } finally {
            // clearLocalStorage();
            isLoggingOut = false
            // isLoggedIn = false; // if the variable is assignable
          }
        }
      }
      return error
    }
  )

  const authenticated = localStorage.getItem('token')
  return authenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
