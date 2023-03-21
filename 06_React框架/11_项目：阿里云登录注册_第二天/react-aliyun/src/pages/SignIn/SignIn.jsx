import React from 'react'
import SignInForm from './SignInForm/SignInForm'

export default function SignIn() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          {/* 登录表单 */}
          <SignInForm />
        </div>
        <div className="col-md-3"></div>

      </div>
    </div>
  )
}
