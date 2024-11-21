import { useState } from "react";
import LoginForm from "../features/user/LoginForm";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { hideLoginModule } from "./uiSlice";

function LoginModule() {
  const dispatch = useDispatch();
  function onClose() {
    dispatch(hideLoginModule());
  }
  return (
    <>
      {/* 背景遮罩和登入框 */}

      <div
        className="z-999 bg-stone fixed inset-0 flex items-center justify-center bg-stone-50 bg-opacity-50"
        onClick={() => onClose()} // 點擊遮罩關閉
      >
        <div
          className="relative w-full max-w-sm rounded bg-white p-6 shadow-lg"
          onClick={(e) => e.stopPropagation()} // 阻止點擊登入框關閉
        >
          <div className="absolute right-4">
            <Button type="small" onClick={() => onClose()}>
              X
            </Button>
          </div>
          <h2 className="mb-4 text-xl font-bold">登入</h2>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginModule;
