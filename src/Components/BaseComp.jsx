import React from "react";
import { css } from "@emotion/css";
import Logo from "../Images/Logo.png";
import { FaDiscord, FaTelegramPlane, FaInstagram } from "react-icons/fa";

export default function BaseComp() {
  const ScreenWidth = window.innerWidth;
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: ${ScreenWidth > 768 ? "row" : "column"};
          justify-content: ${ScreenWidth > 768 ? "flex-start" : "center"};
          align-content: center;
          font-family: sans-serif;
          padding-top: 7%;
          padding-bottom: 5%;
          justify-items: space-between;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: center;
          `}
        >
          <img
            src={Logo}
            alt=""
            className={css`
              width: ${ScreenWidth > 768 ? "20%" : "70%"};
            `}
          />
          <div
            className={css`
              width: ${ScreenWidth > 768 ? "38%" : "100%"};
              color: white;
              opacity: 0.5;
              margin-top: ${ScreenWidth > 768 ? "2.5%" : "10%"};
              font-size: 14px;
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            fringilla tempor nunc, vel imperdiet mauris consequat non.
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-content: center;
              width: 35%;
              color: white;
              font-size: 14px;
              margin-top: ${ScreenWidth > 768 ? "2.5%" : "10%"};
              white-space: nowrap;
            `}
          >
            Terms of Service
            <div
              className={css`
                width: 5px;
                height: 5px;
                background: white;
                opacity: 0.25;
                border-radius: 999px;
                align-self: center;
                margin-left: ${ScreenWidth > 768 ? "5%" : "25%"};
                margin-right: ${ScreenWidth > 768 ? "5%" : "25%"};
              `}
            />
            Privacy Policy
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: ${ScreenWidth > 768 ? "row" : "column"};
            margin-top: ${ScreenWidth > 768 ? "0%" : "10%"};
            justify-content: ${ScreenWidth > 768 ? "flex-end" : "center"};
            align-content: center;
            gap: ${ScreenWidth > 768 ? "70px" : "25px"};
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-content: flex-start;
              gap: 12px;
            `}
          >
            <div
              className={css`
                color: #4873ff;
                margin-bottom: ${ScreenWidth > 768 ? "20%" : "5%"};
                opacity: 0.9;
              `}
            >
              EXPLORE
            </div>
            <div
              className={css`
                color: white;
                opacity: 0.5;
              `}
            >
              Order
            </div>
            <div
              className={css`
                color: white;
                opacity: 0.5;
              `}
            >
              About Us
            </div>
            <div
              className={css`
                color: white;
                opacity: 0.5;
              `}
            >
              FAQs
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-content: flex-start;
              gap: 12px;
            `}
          >
            <div
              className={css`
                color: #4873ff;
                margin-bottom: ${ScreenWidth > 768 ? "20%" : "5%"};
                opacity: 0.9;
              `}
            >
              ACCOUNT
            </div>
            <div
              className={css`
                color: white;
                opacity: 0.5;
              `}
            >
              Sign Up
            </div>
            <div
              className={css`
                color: white;
                opacity: 0.5;
              `}
            >
              Log In
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-content: flex-start;
              gap: 12px;
            `}
          >
            <div
              className={css`
                color: #4873ff;
                margin-bottom: ${ScreenWidth > 768 ? "12%" : "5%"};
                opacity: 0.9;
              `}
            >
              SOCIAL
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-content: flex-start;
                gap: 12px;
              `}
            >
              <button
                className={css`
                  padding-top: 7px;
                  padding-right: 6px;
                  padding-left: 6px;
                  background: #4873ff;
                  border-radius: 8px;
                  color: white;
                  border: none;
                  &:hover {
                    background: white;
                    color: #4873ff;
                  }
                `}
              >
                <FaDiscord size={20} />
              </button>
              <button
                className={css`
                  padding-top: 7px;
                  padding-right: 8px;
                  padding-left: 6px;
                  background: #4873ff;
                  border-radius: 8px;
                  color: white;
                  border: none;
                  &:hover {
                    background: white;
                    color: #4873ff;
                  }
                `}
              >
                <FaTelegramPlane size={20} />{" "}
              </button>
              <button
                className={css`
                  padding-top: 7px;
                  padding-right: 6px;
                  padding-left: 6px;
                  background: #4873ff;
                  border-radius: 8px;
                  color: white;
                  border: none;
                  &:hover {
                    background: white;
                    color: #4873ff;
                  }
                `}
              >
                <FaInstagram size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
