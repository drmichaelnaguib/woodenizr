"use client";
import React from "react";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";

export default function Topbar2({ bgColor = "bg_dark" }) {
  return (
    <div className={`tf-top-bar bg_dark line ${bgColor}`} id="header__top-bar">
      <div className="px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-2 gap-30 align-items-center">
          <div className="tf-top-bar_left">
            <div className="d-flex gap-30 text_white fw-5">
              <span>+20 1266788654</span>
              <span>woodenizer@gmail.com</span>
            </div>
          </div>

          <div className="top-bar-language tf-cur justify-content-end">
            <div className="tf-currencies">
              <CurrencySelect light topStart />
            </div>
            <div className="tf-languages">
              <LanguageSelect
                parentClassName={
                  "image-select center style-default type-languages color-white"
                }
                topStart
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
