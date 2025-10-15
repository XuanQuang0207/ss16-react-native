import { toggleLanguage } from "@/redux/languageSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LanguageSwitcher: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector((state: RootState) => state.language.value);

  return (
    <div style={{ textAlign: "center", marginTop: 30 }}>
      <h2>Ngôn ngữ hiện tại: {language === "en" ? "English" : "Tiếng Việt"}</h2>
      <button onClick={() => dispatch(toggleLanguage())}>
        Chuyển sang {language === "en" ? "Tiếng Việt" : "English"}
      </button>

      <p style={{ marginTop: 20 }}>
        {language === "en"
          ? "Hello, welcome to our app!"
          : "Xin chào, chào mừng bạn đến với ứng dụng của chúng tôi!"}
      </p>
    </div>
  );
};

export default LanguageSwitcher;