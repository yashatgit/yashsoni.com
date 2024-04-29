// https://3dbook.xyz/books/5fd49aeea535e40017cd5dd4
"use client";

import React from "react";

const StyledBook = (props) => {
  return (
    <style jsx>{`
      .bookContainer {
        perspective: 600px;
      }

      .book {
        width: 200px;
        height: 300px;
        transform-style: preserve-3d;
        transform: rotateY(-${props.rotate}deg);
        transition: transform 1s ease;
        animation: 1s ease 0s 1 initAnimation;
      }

      @keyframes initAnimation {
        0% {
          transform: rotateY(0deg);
        }
        100% {
          transform: rotateY(-${props.rotate}deg);
        }
      }

      .book:hover {
        transform: rotateY(0deg);
      }

      .book > :first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 303px;
        transform: translateZ(25px);
        border-radius: 0 ${props.borderRadius} ${props.borderRadius} 0;
        box-shadow: 5px 5px 20px ${props.isDarkMode ? "#3c3b3b" : "#aaaaaa"};
        background-color: #01060f;
      }

      .book::before {
        position: absolute;
        content: " ";
        left: 0;
        top: 4px;
        width: 48px;
        height: 295px;
        transform: translateX(171px) rotateY(90deg);
        background: linear-gradient(
          90deg,
          #fff 0%,
          #f9f9f9 5%,
          #fff 10%,
          #f9f9f9 15%,
          #fff 20%,
          #f9f9f9 25%,
          #fff 30%,
          #f9f9f9 35%,
          #fff 40%,
          #f9f9f9 45%,
          #fff 50%,
          #f9f9f9 55%,
          #fff 60%,
          #f9f9f9 65%,
          #fff 70%,
          #f9f9f9 75%,
          #fff 80%,
          #f9f9f9 85%,
          #fff 90%,
          #f9f9f9 95%,
          #fff 100%
        );
      }

      .book::after {
        position: absolute;
        top: 0;
        left: 0;
        content: " ";
        width: 200px;
        height: 303px;
        transform: translateZ(-25px);
        background-color: #01060f;
        border-radius: 0 ${props.borderRadius} ${props.borderRadius} 0;
        box-shadow: -10px 0 50px 10px ${props.isDarkMode ? "#3c3b3b" : "#aaaaaa"};
      }
    `}</style>
  );
};

export const Book = ({ coverImage, bookTitle, borderRadius = "4px", rotate = "20" }) => {
  const isDarkMode = false;
  return (
    <div>
      <div className="bookContainer flex items-center justify-center mt-10 mb-12">
        {StyledBook({ borderRadius, rotate, isDarkMode })}
        <div className="book relative">
          <img alt={bookTitle || "Book Title"} src={coverImage} />
        </div>
      </div>
    </div>
  );
};
