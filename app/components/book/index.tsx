// https://3dbook.xyz/books/5fd49aeea535e40017cd5dd4
"use client";

import React from "react";
import styles from "./styles.module.css";

export const Book = ({ coverImage, bookTitle, borderRadius = "4px", rotate = "20" }) => {
  const isDarkMode = false;
  return (
    <div>
      <div className={`${styles.bookContainer} flex items-center justify-center mt-10 mb-12`}>
        <div className={`${styles.book} relative`}>
          <img alt={bookTitle || "Book Title"} src={coverImage} />
        </div>
      </div>
    </div>
  );
};
