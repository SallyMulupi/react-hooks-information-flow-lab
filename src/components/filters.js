import React from 'react'
const Filter = ({ onCategoryChange }) => {
    return (
        <div className="Filter">
              <select name="filter" onChange={onCategoryChange}></select>