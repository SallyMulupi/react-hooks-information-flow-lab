import React from 'react'
const Filter = ({ onCategoryChange }) => {
    return (
        <div className="Filter">
              <select name="filter" onChange={onCategoryChange}></select>
              <option value="All">Filter by category</option>
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Dessert">Dessert</option>
