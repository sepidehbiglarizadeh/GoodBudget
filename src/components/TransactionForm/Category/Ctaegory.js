import Select from "react-select";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./Category.module.css";


const Category = ({ selectedOption, handleCHange }) => {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([
    { value: "food", label: "Food" },
    { value: "travel", label: "Travel" },
    { value: "shopping", label: "Shopping" },
    { value: "other", label: "Other" },
  ]);

  useEffect(() => {
    if (categories.length > 4) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  useEffect(() => {
    const savedCategories = JSON.parse(localStorage.getItem("categories"));
    if (savedCategories) {
      setCategories(savedCategories);
    }
  }, []);

  const showNewCategoryHandler = (e) => {
    e.preventDefault();
    setIsShow((prevState) => !prevState);
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    setCategories((prev) => [
      ...prev,
      { value: inputValue, label: inputValue },
    ]);
    setIsShow(false);
  };

  return (
    <>
      <div className={`${isShow ? "hidden" : styles.categoryWrapper}`}>
        <Select
          defaultValue={selectedOption}
          onChange={handleCHange}
          options={categories}
          className={styles.select}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
            colors: {
              ...theme.colors,
              primary25: "#84cc16",
              primary: "#064e3b",
            },
          })}
        />
        <button className={styles.categoryBtn} onClick={showNewCategoryHandler}>
          Add New Category?
        </button>
      </div>
      <div className={`${isShow ? styles.newCategory : "hidden"}`}>
        <input
          type="text"
          placeholder="New Category"
          value={inputValue}
          onChange={changeHandler}
        />
        <button
          className={styles.addCategoryBtn}
          onClick={addNewCategoryHandler}
        >
          Add
        </button>
        <button className={styles.closeBtn} onClick={showNewCategoryHandler}>
          <FaTimes />
        </button>
      </div>
    </>
  );
};

export default Category;
